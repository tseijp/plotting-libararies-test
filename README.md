## libraries

- chartjs
- echarts
- plotly.js
- recharts
- victory
- visx

https://npmtrends.com/chart.js-vs-d3-vs-echarts-vs-plotly.js-vs-recharts-vs-three-vs-victory-vs-visx

[![](https://storage.googleapis.com/zenn-user-upload/a1d945056524-20240728.png)](https://npmtrends.com/chart.js-vs-d3-vs-echarts-vs-plotly.js-vs-recharts-vs-three-vs-victory-vs-visx)

[]()    | []()      | []()                              | Stars   | Issues | Version | Updated      | Created      | Size
:-    | --------- | --------------------------------- | ------- | ------ | ------- | ------------ | ------------ | --
![_1] | chart.js  | [![n]][Cn] [![g]][Cg] [![l]][Cl]  | 64,059  | 406    | 4.4.3   | 2 months ago | 10 years ago | [![][Cb_]][Cb] 
![_2] | d3        | [![n]][Dn] [![g]][Dg] [![l]][Dl]  | 108,183 | 13     | 7.9.0   | 5 months ago | 13 years ago | [![][Db_]][Db] 
![_3] | echarts   | [![n]][En] [![g]][Eg] [![l]][El]  | 59,773  | 2,219  | 5.5.1   | a month ago  | 9 years ago  | [![][Eb_]][Eb] 
![_4] | plotly.js | [![n]][Pn] [![g]][Pg] [![l]][Pl]  | 16,760  | 571    | 2.34.0  | 10 days ago  | 9 years ago  | [![][Pb_]][Pb] 
![_5] | recharts  | [![n]][Rn] [![g]][Rg] [![l]][Rl]  | 23,363  | 542    | 2.12.7  | 3 months ago | 9 years ago  | [![][Rb_]][Rb] 
![_6] | three     | [![n]][Tn] [![g]][Tg] [![l]][Tl]  | 100,800 | 518    | 0.167.0 | 3 days ago   | 12 years ago | [![][Tb_]][Tb] 
![_7] | victory   | [![n]][Vn] [![g]][Vg] [![l]][Vl]  | 10,917  | 94     | 37.0.2  | 4 months ago | 9 years ago  | [![][Vb_]][Vb] 

[_1]: https://s.tsei.jp/_1.svg
[_2]: https://s.tsei.jp/_2.svg
[_3]: https://s.tsei.jp/_3.svg
[_4]: https://s.tsei.jp/_4.svg
[_5]: https://s.tsei.jp/_5.svg
[_6]: https://s.tsei.jp/_6.svg
[_7]: https://s.tsei.jp/_7.svg

[n]: https://api.iconify.design/mdi:npm.svg
[l]: https://api.iconify.design/mdi:link.svg
[g]: https://api.iconify.design/mdi:github.svg

[Cn]: https://npmjs.com/package/chart.js
[Dn]: https://npmjs.com/package/d3
[En]: https://npmjs.com/package/echarts
[Pn]: https://npmjs.com/package/plotly.js
[Rn]: https://npmjs.com/package/recharts
[Tn]: https://npmjs.com/package/three
[Vn]: https://npmjs.com/package/victory

[Cg]: https://github.com/chartjs/Chart.js
[Dg]: https://github.com/d3/d3
[Eg]: https://github.com/apache/echarts
[Pg]: https://github.com/plotly/plotly.js
[Rg]: https://github.com/recharts/recharts
[Tg]: https://github.com/mrdoob/three.js
[Vg]: https://github.com/FormidableLabs/victory

[Cl]: https://www.chartjs.org/
[Dl]: https://d3js.org/
[El]: https://echarts.apache.org/en/index.html
[Pl]: https://plotly.com/javascript/
[Rl]: https://recharts.org/
[Tl]: https://threejs.org/
[Vl]: https://commerce.nearform.com/open-source/victory

[Cb]: https://bundlephobia.com/package/chart.js
[Db]: https://bundlephobia.com/package/d3
[Eb]: https://bundlephobia.com/package/echarts
[Pb]: https://bundlephobia.com/package/plotly.js
[Rb]: https://bundlephobia.com/package/recharts
[Tb]: https://bundlephobia.com/package/three
[Vb]: https://bundlephobia.com/package/victory

[Cb_]: https://img.shields.io/bundlephobia/minzip/chart.js.svg
[Db_]: https://img.shields.io/bundlephobia/minzip/d3
[Eb_]: https://img.shields.io/bundlephobia/minzip/echarts
[Pb_]: https://img.shields.io/bundlephobia/minzip/plotly.js
[Rb_]: https://img.shields.io/bundlephobia/minzip/recharts
[Tb_]: https://img.shields.io/bundlephobia/minzip/three
[Vb_]: https://img.shields.io/bundlephobia/minzip/victory

[![_c]][c_]
[![_e]][e_]
[![_p]][p_]
[![_r]][r_]
[![_t]][t_]
[![_v]][v_]
[![_V]][V_]
[![_d]][d_]

[_c]: ./public/_chartjs.jpg
[_e]: ./public/_echarts.jpg
[_p]: ./public/_plotly.jpg
[_r]: ./public/_recharts.jpg
[_t]: ./public/_three.jpg
[_v]: ./public/_victory.jpg
[_V]: ./public/_visx.jpg
[_d]: ./public/_d3.jpg

[c_]: https://plotting-libraries-test.pages.dev/chartjs
[e_]: https://plotting-libraries-test.pages.dev/echarts
[p_]: https://plotting-libraries-test.pages.dev/plotly
[r_]: https://plotting-libraries-test.pages.dev/recharts
[t_]: https://plotting-libraries-test.pages.dev/three
[v_]: https://plotting-libraries-test.pages.dev/victory
[V_]: https://plotting-libraries-test.pages.dev/visx
[d_]: https://plotting-libraries-test.pages.dev/d3

## Error 1: Could not resolve "buffer/"

<details>
<summary>

plotly.js installed with `npm i plotly.js` cannot be built with vite

</summary>

`npm i plotly.js` でインストールした plotly.js が vite でビルドできなかったです 😭

</details>

```ruby
✘ [ERROR] Could not resolve "buffer/"

    node_modules/plotly.js/src/traces/image/helpers.js:5:21:
      5 │ var Buffer = require('buffer/').Buffer;  // note: the trailing slash is important!
        ╵                      ~~~~~~~~~

  You can mark the path "buffer/" as external to exclude it from the bundle, which will remove this
  error and leave the unresolved path in the bundle. You can also surround this "require" call with
  a try/catch block to handle this failure at run-time instead of bundle-time.

/Users/t/plotting-libararies-test/node_modules/esbuild/lib/main.js:1472
  let error = new Error(text);
              ^

Error: Build failed with 1 error:
node_modules/plotly.js/src/traces/image/helpers.js:5:21: ERROR: Could not resolve "buffer/"
    at failureErrorWithLog (/Users/t/plotting-libararies-test/node_modules/esbuild/lib/main.js:1472:15)
    at /Users/t/plotting-libararies-test/node_modules/esbuild/lib/main.js:945:25
    at /Users/t/plotting-libararies-test/node_modules/esbuild/lib/main.js:1353:9
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5) {
  errors: [Getter/Setter],
  warnings: [Getter/Setter]
}
```

<details>
<summary>

fix: I had to use `plotly.js-dist` instead of `plotly.js` 😭  and install `@types/plotly.js` and adjust `tsconfig.json`

</summary>

`plotly.js` の代わりに `plotly.js-dist` をつかう必要がありました 😭 また `@types/plotly.js` をインストールし、`tsconfig.json` を調整する必要がありました 😭

</details>

> https://stackoverflow.com/questions/39084438/how-to-import-plotly-js-into-typescript
>
> Types for plotly.js basic & Co.
> You can also use types together with the [partial npm bundles](https://github.com/plotly/plotly.js/blob/master/dist/README.md#partial-bundles) like basic or cartesian, starting in v1.39.0. Example for plotly.js basic (contains scatter, pie and bar):
> 
> npm i plotly.js-basic-dist
> npm i -D @types/plotly.js
> Add the following in tsconfig.json:
> 
> "compilerOptions": {
>   // make aliases absolute imports relative to the project root
>   "baseUrl": "./",
>   "paths": {
>     "plotly.js-basic-dist": [
>       "node_modules/@types/plotly.js"
>     ]
>   }
> }
> Above paths config just maps your imported plotly.js-basic-dist package to those types defined in @types/plotly.js, so you can use them with plotly.js-basic-dist. More Infos:
> 
> [baseUrl](https://www.typescriptlang.org/docs/handbook/module-resolution.html#base-url)
> [paths](https://www.typescriptlang.org/docs/handbook/module-resolution.html#path-mapping)

## Error 2: XAxis: Support for defaultProps will be removed from function components in a future major release.

<details>
<summary>

recharts causes errors in console when used with React

</summary>

recharts は Reactと使うと console にエラーが発生しました 😭

</details>


```ruby
Warning: XAxis: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.

Warning: YAxis: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.
```

<details>
<summary>

fix: install `recharts@alpha`

</summary>

`recharts@alpha` をインストールする必要がありました 😭

</summary>
</details>

> https://github.com/recharts/recharts/issues/3615
>
> Hey y'all, I think installing `v2.10.2` should fix the warning, so try this:
> 
> `npm install recharts@2.10.2`
> 
> [UPDATE]: `v2.10.2` was working perfectly in a React version under R18
> 
> For React versions above R18, this works perfectly for me `npm i recharts@2.13.0-alpha.1`


## More

> # React + TypeScript + Vite
> 
> This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
> 
> Currently, two official plugins are available:
> 
> - [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
> - [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
> 
> ## Expanding the ESLint configuration
> 
> If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:
> 
> - Configure the top-level `parserOptions` property like this:
> 
> ```js
> export default {
>   // other rules...
>   parserOptions: {
>     ecmaVersion: 'latest',
>     sourceType: 'module',
>     project: ['./tsconfig.json', './tsconfig.node.json', './tsconfig.app.json'],
>     tsconfigRootDir: __dirname,
>   },
> }
> ```
> 
> - Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
> - Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
> - Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
