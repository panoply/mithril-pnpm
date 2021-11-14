# @mpnpm/app

This package is an example TypeScript [Mithril](https://mithril.js.org/) application that bundles using Rollup together with a couple of plugins that are defined in the [@mpnpm/rollup-config](https://github.com/panoply/mithril-pnpm/tree/master/packages/rollup-config) package.

### SUPPORTS

- Server + Live Reloading using [BrowserSync](https://browsersync.io/docs/options)
- SCSS/SASS support via [PostCSS](https://postcss.org/)
- Transforms TypeScript into Browser ESM valid output
- Code Splitting + Tree-shaking
- Terser minification + CSS Purging

### Demonstrates

This package demonstrates how a web application which consumes different packages in the monorepo could be setup. It also exists as a starting point for Rollup/TypeScript based projects using Mithril. The package is set to `private` within `package.json` which will prevent it from being published on the npm registry.

> **Please Note** The `rollup.config.mjs` configuration file is using [@brixtol/rollup-utils](https://github.com/BRIXTOL/rollup-utils) as a helper module, feel free to remove it, it's merely a convenience util.

# Commands

The below command can be executed from within the package. This module is however excluded from the recursive calls when executed at root.

```cli
pnpm dev      Starts development in watch mode
pnpm build    Runs a production build
```
