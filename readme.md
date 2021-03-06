# @mpnpm

An example monorepo strap. The project can be used as a starting point for pnpm projects. Provides a series of packages that are consumed by various modules across the workspace. It includes a couple of packages that can be used in a bundle and/or build processes.

It is rather opinionated and the approaches employed are mostly geared towards mithril users.

## Usage

Clone the repository and `cd` into root, then run:

```cli
pnpm i
```

You can then cd into different packages (mainly `api` and `app`). While you can execute commands from root, it is just best to `cd` into the directories you are working within. Look at [pnpm filtering](https://pnpm.io/filtering) to understand and better leverage workspace executions from different locations.

> The entire workspace is built in `postinstall`

## Commands

Every package has the following commands:

```cli
pnpm dev      Starts development in watch mode
pnpm build    Runs a production build
```

If you are calling these from root directory:

```cli
pnpm dev   <pkg>  Start development for a specific package from root
pnpm build <pkg>  Runs a production build on specific package from root
```

## `/build`

This directory contains build specific packages, they are:

#### @mpnpm/tsconfig

This is a shareable `tsconfig.json` that each package that is TypeScript based can extend upon. It includes just some basic defaults.

#### @mpnpm/rollup-config

This is a shareable Rollup configuration. It can be imported in each package for bundling TypeScript or JavaScript files. It exposes several commonly used plugins and some utils.

#### @mpnpm/prettier-config

This is a shareable Prettier config. Extend configuration from within `package.json` files, eg:

```json
{
  "prettier": "@mpnpm/prettier-config"
}
```

#### @mpnpm/eslint-config

This is a shareable ESLint config. Extend configuration from within `package.json` files, eg:

```jsonc
{
  "eslintConfig": {
    "ignorePatterns": ["*.html"],
    "extends": ["@mpnpm/eslint-config"],
    "rules": {}
  }
}
```

## `/packages`

This directory contains non-build specific packages, those which would be a library, application, module or something else. Contained within this example is the following:

#### @mpnpm/api

This is a simple package that has some exported members that can be consumed in different package/s.

#### @mpnpm/app

This is a basic mithril app that uses `@mpnpm/api` and is bundling using Rollup and TypeScript. It demonstrates a private package using workspace packages.
