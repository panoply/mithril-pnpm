## @mpnpm/prettier-config

This package includes a shareable Prettier configuration used across the project.

### Install

[pnpm](https://pnpm.js.org/en/cli/install)

```cli
pnpm add prettier @mpnpm/prettier-config --save-dev
```

> Prettier is an `optionalDependency` so you will need to install it within your project.

### Usage

Extend configuration from within `package.json` files.

```json
{
  "prettier": "@mpnpm/prettier-config"
}
```

### Text Editor (VSCode)

Install the [esbenp.prettier-vscode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extension from the marketplace. Depending on how your editor is configured, one may require setting global configuration in a user `settings.json` file:

```jsonc
{
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[markdown]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode" // disabled in brixtol packages
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode" // disabled in brixtol packages
  }
}
```

### Ignore Files

In almost all packages within the monorepo a `.prettierignore` file is included to prevent prettier from wreaking utter havoc in by attempting to format the following files types:

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

Prettier is cool and all, but just leave it to ESLint for JS/TS and other files. Even if ESlint is not built for formatting, it feels rather silly to have code be passed through 2 parsers when one suffices. If you want, exclude the ignores at your taste in each package.
