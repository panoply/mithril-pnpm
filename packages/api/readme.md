# @mpnpm/api

This is example API module package. It is using development dependencies from the monorepo root `package.json` file. The intention with this specific package is to only consume it within the workspace. In a tradition structure this module would likely live in a directory relative to your `src` or `lib` directory and you would reference it by importing it, for example:

```js
// Monorepo Approach
import { someFunction } from "@mpnpm/api";

// Traditional Approach
import { someFunction } from "../path-to-dir";
```

Because we are working within a monorepo, we can isolate this module into it's own package and then consume it wherever we may require it by simply installing it.

### Private Package

Because this module is `private` we typically will only want to consume it in other `private` packages which exist within the monorepo workspace. For example, this package is used by `@mpnpm/app` web application which has it installed as a `dependency` which you can see [here](https://github.com/panoply/mithril-pnpm/blob/master/packages/app/package.json)

The benefits here is we are able to decouple the logic elegantly. This package exists separate from `@mpnpm/app` and can be worked on in an isolated manner, if we ever need it in another package or module alike, we can simply install it.

# Demonstrates

This package demonstrates how to leverage dependencies installed in root of the monorepo. It also is being consumed by another package in the workspace. In big projects with lots of closed source modules this is a great way to keep logic separate.

# Commands

```cli
pnpm dev      Starts development in watch mode
pnpm build    Runs a production build
pnpm dts      Emits Type declarations, alias for "tsc --emitDeclarationOnly"
pnpm bump     Updates packages depending on module to latest version
```

> In order to ensure we generate declaration files using [@rollup/plugin-typescript](https://github.com/rollup/plugins/tree/master/packages/typescript) a second tsc command is executed when running `build` to emit declarations.

# Install

```cli
pnpm add @mpnpm/api
```
