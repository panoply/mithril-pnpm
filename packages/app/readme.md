# @mpnpm/app

This package is an example TypeScript [Mithril](https://mithril.js.org/) application that bundles using Rollup together with a couple of plugins that are defined in the [@mpnpm/rollup-config](https://github.com/panoply/mithril-pnpm/tree/master/packages/rollup-config) package. It will build a SPA and digests the exported package modules we created in the `api` directory.

### Supported

- Development Server + Live Reloading using [BrowserSync](https://browsersync.io/docs/options)
- SCSS/SASS support via [PostCSS](https://postcss.org/)
- Transforms TypeScript into Browser ESM valid output using [ESBuild](https://esbuild.github.io/)
- Shows how to leverage code Splitting + tree-shaking with Rollup.
- Does bundle minification, CSS auto-prefixing and CSS class purging.

### Demonstrates

This package demonstrates how a web application which consumes different packages in this monorepo could be setup. It also exists as a starting point for rollup, ESBuild and TypeScript based projects using Mithril. The package is set to `private` within `package.json` which will prevent it from being published on the npm registry.

> **Please Note** The `rollup.config.mjs` configuration file is using [@brixtol/rollup-utils](https://github.com/BRIXTOL/rollup-utils) as a helper module, feel free to remove it, it's merely a convenience util.

# Commands

The below command can be executed from within the package. This module is however excluded from the recursive calls when executed at root.

```cli
pnpm dev      Starts development in watch mode
pnpm build    Runs a production build
```
