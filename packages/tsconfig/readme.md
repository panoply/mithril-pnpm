# @mpnpm/tsconfig

This package includes a shareable TypeScript configuration used across the project and referenced in TypeScript packages via the `extends` option of `tsconfig.json` files.

### Demonstrates

This package demonstrates how an organization or project that ships both open and closed source packages can leverage a shared [TypeScript](https://typescriptlang.org) configuration file.

# Install

```cli
pnpm add -D @mpnpm/tsconfig typescript
```

> Include `typescript` as we need to reference it directly in most packages.

# Usage

Provide to the `extends` option within a package `tsconfig.json`

```json
{
  "extends": "@mpnpm/tsconfig"
}
```
