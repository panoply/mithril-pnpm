# @mpnpm/rollup-config

Shareable rollup configuration used within the monorepo. The module acts as an interface, it exports an instance of Rollup and several plugins that are frequently used by packages contained across the workspace. We expose the plugins using getters to better help negate the referencing factor involved when certain projects only require certain plugins.

### Demonstrates

This package demonstrates how we can provide a single dependency import for bundling with Rollup across a monorepo workspace. This approach gives a single source which all our packages can use. In addition, one can also supply missing types to plugins when required.

# Commands

The below command can be executed from within the package.

```cli
pnpm dev      Starts development in watch mode
pnpm build    Runs a production build
pnpm bump     Updates packages depending on module to latest version
```

# Install

```cli
pnpm add @mpnpm/rollup-config -D
```

> This module will be built on `postinstall`

# Usage

This is an ESM module, so rollup config files must use a `.mjs` extension (eg: `rollup.config.mjs`) or else Node will complain. The `rollup()` export is totally optional, its a re-export of `defineConfig` and used to provide type completions.

<!-- prettier-ignore -->
```ts
import { rollup, env, plugin } from "@mpnpm/rollup-config";

export default rollup(
  {
    input: "src/file.ts",
    output:   {
      format: 'cjs',
      dir: 'package',
      sourcemap: env.is('dev', 'inline'), // Inline sourcemap in development else false
      interop: 'default'
    },
    plugins: env.if('div')(
      [
        plugin.commonjs(options: {}),
        plugin.ts(options: {}),
        // etc etc
      ]
    )(
      [
        plugin.terser()
      ]
    )
  }
);
```

### Rollup + ESBuild

This package is using ESBuild together will Rollup. TypeScript and JavaScript modules are processed with [esbuild](https://esbuild.github.io/) using [rollup-plugin-esbuild](https://github.com/egoist/rollup-plugin-esbuild). Within [packages](https://github.com/panoply/mithril-pnpm/tree/master/packages) you can review the `rollup.config.mjs` files to see how we can leverage the speed of esbuild and a couple of additional plugins to produce a TypeScript compatible build environment.

##### Declarations

The official plugin does not generate declaration files correctly and in order to combat that `pnpm build` scripts on TypeScript packages in the workspace will execute a second `tsc` command which will emit declarations.


### Utilities Helper

The configuration is using [@brixtol/rollup-utils](https://github.com/BRIXTOL/rollup-utils) as a helper module, feel free to remove, as it's merely a convenience util but helps normalize the bundle configuration files is a nice way.
