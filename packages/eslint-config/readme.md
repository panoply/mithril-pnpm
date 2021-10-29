## @mpnpm/eslint-config

This package includes a shareable ESLint configuration consumed across the workspace in different packages.

### Install

[pnpm](https://pnpm.js.org/en/cli/install)

```cli
pnpm i @mpnpm/eslint-config --save-dev
```

### Usage

Extend the configuration within `package.json` files

```jsonc
{
  "eslintConfig": {
    "ignorePatterns": "*.html",
    "extends": ["@mpnpm/eslint-config"],
    "rules": {} // extend the config
  }
}
```

### Monorepo/Workspace

This module is installed at project root of the mono-repo and thus it is available for consumption by all containing packages. If you have closed sourced packages then you consume the module from root whereas for any open source packages existing in the workspace you can provide the config as a development dependency in the projects. This approach allows individuals outside of on an organization to keep the code style aesthetics when contributing to projects made available to the public.
