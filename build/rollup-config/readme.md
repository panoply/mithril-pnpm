# @mpnpm/rollup-config

Shareable rollup configuration used within the monorepo. The module acts as an interface, it exports an instance of Rollup and several plugins that are frequently used by packages contained across the workspace. We expose the plugins using getters to negate the referencing factor involved when certain projects only require certain plugins.

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

> This module will be built on `postinstall` from root when running `pnpm i`

# Usage

This is an ESM module, so rollup config files must use a `.mjs` extension (eg: `rollup.config.mjs`). The `rollup()` export is totally optional, its a re-export of `defineConfig` and used to provide type completions.

<!-- prettier-ignore -->
```ts
import { rollup, env, plugin } from "@mpnpm/rollup-config";

export default rollup(
  {
    input: "src/file.ts",
    output: {
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
        plugin.minify()
      ]
    )
  }
);
```

### Rollup + ESBuild

This package allows us to leverage ESBuild together will Rollup. TypeScript and JavaScript modules are processed with [esbuild](https://esbuild.github.io/) using [rollup-plugin-esbuild](https://github.com/egoist/rollup-plugin-esbuild). The monorepo [packages](https://github.com/panoply/mithril-pnpm/tree/master/packages) directory is where you can review `rollup.config.mjs` files and see how we leverage the speed of esbuild together with rollup. We also leverage a couple of additional plugins to produce seamless alias paths in the build environment.

##### Declarations

Because we are using esbuild instead of the the official TypeScript compiler plugins with Rollup declaration files will not be generated. Running `pnpm build` scripts on TypeScript packages in the workspace will execute a second `tsc` command which emits declarations using `----emitDeclarationOnly` flag. It is important to keep this in mind and correctly configure `outDir` within `tsconfig.json` files.

### Utilities Helper

This package is using [@brixtol/rollup-utils](https://github.com/BRIXTOL/rollup-utils) utility helper module. This module gives us some really helpful methods when working with Rollup. Feel free to remove it as it's merely a convenience utility that normalizes and brings some level of sanity to the bundle configuration files.
