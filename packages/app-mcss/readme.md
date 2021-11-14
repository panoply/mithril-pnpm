###### EXPERIMENTAL

_This package is using a POC module called [mcss](https://github.com/brixtol/mcss). It is far from ready for production, but exists are an example only._

# @mpnpm/mcss

This package is an example TypeScript [Mithril](https://mithril.js.org/) application that bundles using Rollup together with a couple of plugins that are defined in the [@mpnpm/rollup-config](https://github.com/panoply/mithril-pnpm/tree/master/packages/rollup-config) package. In addition, the application is using a POC (proof of concept) module called [mcss](https://github.com/brixtol/mcss) which allows us to express hyperScript using a fugazi approach. It is intended to show any mithril developers how [mcss](https://github.com/brixtol/mcss) could work in a real-world use case situation even though its an experimental project.

### SUPPORTS

- ClassName selector completions using [mcss](https://github.com/brixtol/mcss)
- Server + Live Reloading using [BrowserSync](https://browsersync.io/docs/options)
- SCSS/SASS support via [PostCSS](https://postcss.org/)
- Transforms TypeScript into Browser ESM valid output
- Code Splitting + Tree-shaking
- Terser minification + CSS Purging
- ClassName Obfuscating

### Demonstrates

This package demonstrates a mithril application using [mcss](https://github.com/brixtol/mcss) that in addition consumes different packages in the monorepo is setup and leveraged. It also exists as a starting point for Rollup/TypeScript based projects using Mithril and [mcss](https://github.com/brixtol/mcss). The package is set to `private` within `package.json` which will prevent it from being published on the npm registry.

> **Please Note** The `rollup.config.mjs` configuration file is using [@brixtol/rollup-utils](https://github.com/BRIXTOL/rollup-utils) as a helper module, feel free to remove it, it's merely a convenience util.

# Commands

The below command can be executed from within the package. This module is however excluded from the recursive calls when executed at root.

```cli
pnpm dev      Starts development in watch mode
pnpm build    Runs a production build
```


