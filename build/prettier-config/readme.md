# @mpnpm/prettier-config

This package includes a shareable Prettier configuration that can be consumed across the workspace in different packages. This approach allows us to publish the config on the npm registry and use it within the monorepo.

### Demonstrates

This package demonstrates how an organization or project that ships both open and closed source packages can leverage a shared [Prettier](https://prettier.io/) configuration.

# Commands

The below command can be executed from within the package.

```cli
$ pnpm bump     Updates packages depending on the module to latest version
```

# Install

```cli
pnpm add prettier @mpnpm/prettier-config -D
```

> Prettier is an `peerDependency` so you will need to install it within your project.

# Usage

Extend configuration from within `package.json` files.

```json
{
  "prettier": "@mpnpm/prettier-config"
}
```

### Text Editor (VS Code)

Install the [esbenp.prettier-vscode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extension from the marketplace. Depending on how your editor is configured, one may require setting global configuration in a user `settings.json` file:

```jsonc
{
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[markdown]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

### Ignored Files

In some packages contained within the monorepo and also in the root you will notice a `.prettierignore` file. This file is to prevent prettier from wreaking utter havoc by attempting to format the following files types:

```
*.toml
*.mjs
*.js
*.ts
*.css
*.scss
*.liquid
*.html
```

Prettier is cool and all, but just leave it to ESLint/Stylelint for JS/TS and other files. Even if ESlint is not built for formatting, it feels rather silly to have code be passed through 2 parsers when one suffices. If you want, exclude the ignores at your taste.
