# @mpnpm

An example monorepo strap. The project can be used as a starting point for pnpm projects. Provides a series of packages that are consumed by various packages across the workspace. It includes a couple of packages that be used in bundle/build processes.

## Usage

```cli
pnpm i
```

You can then cd into different packages (mainly `api` and `app`)

## Commands

```cli
pnpm dev      Starts development in watch mode (if calling from root, runs recursively)
pnpm build    Runs a production build (if calling from root, runs recursively)
```

#### @mpnpm/tsconfig

This is a shareable `tsconfig.json` that each package which is TypeScript based can extend. It includes just some basic defaults.

#### @mpnpm/rollup-config

This is a shareable Rollup configuration. It can be imported in each package for bundling TypeScript or JAvaScript files. It exposes several commonly used plugins and some utils.

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
    "ignorePatterns": "*.html",
    "extends": ["@mpnpm/eslint-config"],
    "rules": {}
  }
}
```
