/**
 * ref: https://zenn.dev/kiyoshiro9446/scraps/3de87d9749d1c5
 */
import { getAssetFromKV, serveSinglePageApp } from '@cloudflare/kv-asset-handler';
import manifestJSON from '__STATIC_CONTENT_MANIFEST';

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

		// e.g. https://example.workers.dev/?id=1
		const id = new URL(request.url).searchParams.get('id');
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
	console.log(id)
	const description = `記事:${id}の説明`;
	return `
    <meta name="description" content="${description}" />
    <meta property="og:title" content="記事：${id}のタイトル" />
    <meta property="og:description" content="${description}" />
  `;
}
