# @mpnpm/rollup-config

Shareable rollup configuration used within the monorepo. The module acts as an interface, it exports an instance of Rollup and several plugins that are frequently used by packages contained across the workspace. We expose the plugins using getters to better help negate the referencing factor involved when certain projects only require certain plugins.

### Demonstrates

This package demonstrates how we can provides a single dependency import for bundling with Rollup across the workspace. This approach gives a single source which all our package can use. In addition, one can also feed missing types to plugins when required.

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

This is an ESM module, so rollup config files must use a `.mjs` extension (`rollup.config.mjs`) or else Node will complain. The `rollup()` export is totally optional, its a re-export of `defineConfig` and used to provide type completions.

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

### TypeScript Compilation

This project is using the [official](https://github.com/rollup/plugins/tree/master/packages/typescript) Rollup TypeScript plugin. It's not really ideal but its a lot faster than [rollup-plugin-typescript2](https://github.com/ezolenko/rollup-plugin-typescript2). The Rollup plugin maintainer/s are arrogant, rude and rather insufferable individuals so any potential contributors are typically scorned by them. This has resulted in the TypeScript issue at hand to result in a minor headaches but this example mono does try and negate some of those issues.

##### Declarations

The official plugin does not generate declaration files correctly and in order to combat that `pnpm build` scripts on TypeScript packages in the workspace will execute a second `tsc` command which will emit declarations.


##### Consuming `.d.ts` files

The official plugin will be a pain if you directly import declarations, you are unlikely to face such an issue but it does occur. In any sense, if the official Rollup plugin for TypeScript is annoying the absolute fuck out of you, then, simply swap it out for [rollup-plugin-typescript2](https://github.com/ezolenko/rollup-plugin-typescript2).

### Utilities Helper

The configuration is using [@brixtol/rollup-utils](https://github.com/BRIXTOL/rollup-utils) as a helper module, feel free to remove, as it's merely a convenience util but helps normalize the bundle configuration files is a nice way.
