# @mpnpm/api

This is example API module package. It is using development dependencies from the monorepo root `package.json` file. The intention with this specific package is to only consume it within the workspace. In a traditional structure this module would likely live in a directory relative to your `src` or `lib` directory and you would reference it by importing it, for example:

```js
// Monorepo Approach
import { someFunction } from '@mpnpm/api';

// Traditional Approach
import { someFunction } from '../path-to-dir';
```

Because we are working within a monorepo, we can isolate this module into it's own package and then consume it wherever we may require it by installing, eg: `pnpm add @mpnpm/api`

### Private Package

Because this module is `private` we typically will only want to consume it in other `private` packages which exist within the monorepo workspace. For example, this package is used by the `@mpnpm/app` web application which has it installed as a `dependency` as you can see [here](https://github.com/panoply/mithril-pnpm/blob/master/packages/app/package.json).

The benefits with this approach is we are able to decouple the logic elegantly. This package exists separate from `@mpnpm/app` and can be worked on in an isolated manner.

# Demonstrates

This package demonstrates how to leverage dependencies installed in the root of the monorepo. It also is being consumed by another package in the workspace. In big projects with lots of closed source modules this is a great way to keep logic separate.

### ESBuild Bundle

This module is bundled with [esbuild](https://esbuild.github.io/) which handles TypeScript in a fast and productive manner. We can optionally generated declaration files by running `pnpm dts` which will emit declarations into our `dist` directory.

### Path aliases

This module is leverages path aliases by combining the `files[]` option in the `tsconfig.json` file together with the [@rollup/plugin-alias](https://git.io/JuTc9) plugin. We also take advantage of the the utilities export provided in our build package to reference our alias paths.

# Commands

```cli
pnpm dev      Starts development in watch mode
pnpm build    Runs a production build
pnpm dts      Emits Type declarations, alias for "tsc --emitDeclarationOnly"
pnpm bump     Updates packages depending on module to latest version
```

# Install

```cli
pnpm add @mpnpm/api
```
