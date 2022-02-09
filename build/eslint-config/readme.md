# @mpnpm/eslint-config

This package includes a shareable [ESLint](https://eslint.org/) configuration that can be consumed across the workspace in different packages. This approach allows us to publish the config on the npm registry.

### Demonstrates

This package demonstrates how an organization or project that ships both open and closed source packages can leverage a shared [ESLint](https://eslint.org/) configuration.

# Commands

The below command can be executed from within the package.

```cli
$ pnpm bump     Updates packages depending on the module to latest version
```

# Install

```cli
pnpm add @mpnpm/eslint-config -D
```

The module has peers on the following, thus in some situation you may need to install these as development dependencies.

```cli
pnpm add eslint eslint-plugin-import eslint-plugin-promise -D
```

> The `main` file is a commonjs module type. This is because eslint does not yet support ESM.

# Usage

Extend the configuration within `package.json` files

```jsonc
{
  "eslintConfig": {
    "ignorePatterns": ["*.html"],
    "extends": ["@mpnpm/eslint-config"],
    "rules": {} // extend the config
  }
}
```
