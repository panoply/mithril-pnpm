# @mpnpm/tsconfig

This package includes a shareable TypeScript configuration that can be used across the project and referenced within TypeScript packages via the `extends` option of a `tsconfig.json` file.

### Demonstrates

This package demonstrates how an organization or project that ships both open and closed source packages can leverage a shared [TypeScript](https://typescriptlang.org) configuration file.

# Install

```cli
pnpm add @mpnpm/tsconfig typescript -D
```

> Include `typescript` as we need to reference it directly in most packages.

# Usage

Provide to the `extends` option within a package `tsconfig.json`

```json
{
  "extends": "@mpnpm/tsconfig"
}
```
