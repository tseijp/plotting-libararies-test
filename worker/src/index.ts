/**
 * ref: https://zenn.dev/kiyoshiro9446/scraps/3de87d9749d1c5
 */
import { getAssetFromKV, serveSinglePageApp } from '@cloudflare/kv-asset-handler';
import manifestJSON from '__STATIC_CONTENT_MANIFEST';

const DEPLOY_STATIC_URL = 'https://plotting-libraries-test.pages.dev';

/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `wrangler dev src/index.ts` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `wrangler publish src/index.ts --name my-worker` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

export interface Env {
	// Example binding to KV. Learn more at https://developers.cloudflare.com/workers/runtime-apis/kv/
	// MY_KV_NAMESPACE: KVNamespace;
	//
	// Example binding to Durable Object. Learn more at https://developers.cloudflare.com/workers/runtime-apis/durable-objects/
	// MY_DURABLE_OBJECT: DurableObjectNamespace;
	//
	// Example binding to R2. Learn more at https://developers.cloudflare.com/workers/runtime-apis/r2/
	// MY_BUCKET: R2Bucket;
	__STATIC_CONTENT: KVNamespace;
}

const assetFileExtensions = ['.css', '.js', '.png', '.jpg', '.jpeg', '.svg', '.gif'];

const isAssetFileRequest = (request: Request): boolean => assetFileExtensions.some((ext) => request.url.endsWith(ext));

export default {
	async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
		const asset = await getAssetFromKV(
			{
				request,
				waitUntil(promise) {
					return ctx.waitUntil(promise);
				},
			},
			{
				// ここのASSET_NAMESPACEやASSET_MANIFESTの指定を忘れないこと(2敗)
				ASSET_NAMESPACE: env.__STATIC_CONTENT,
				ASSET_MANIFEST: JSON.parse(manifestJSON),
				mapRequestToAsset: serveSinglePageApp,
			}
		);
		if (isAssetFileRequest(request)) return asset;

		const url = new URL(request.url);
		const pathname = url.pathname;
		const id = pathname.split('/').pop();

		if (id === undefined) return asset;

		const html = await asset.text();
		const ogp = generateOgpMetaTags(id);

		// ここでogp関係のメタタグを注入する
		return new Response(html.replace('</head>', `${ogp}</head>`), {
			headers: {
				'content-type': 'text/html;charset=UTF-8',
			},
		});
	},
};

function generateOgpMetaTags(id: string): string {
	const description = `記事:${id}の説明`;
	const title = `plotting library test - ${id}`;
	const filename = id ? `_${id}.jpg` : 'chatgpt.jpg';

	return `
        <meta name="description" content="${description}" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="${title}" />
        <meta property="og:description" content="${description}" />
        <meta property="og:image" content="${DEPLOY_STATIC_URL}/${filename}" />
        <meta property="og:url" content="https://example.com/${id}" />
        <meta property="og:site_name" content="Your Site Name" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="${title}" />
        <meta name="twitter:description" content="${description}" />
        <meta name="twitter:image" content="${DEPLOY_STATIC_URL}/${filename}" />
  `;
}
