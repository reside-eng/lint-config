# `@side/prettier-config`

This is a [shared configuration][shared] for [Prettier][prettier] that is used within JavaScript, Node.js, and TypeScript projects across `reside-eng`.

## Setup

### Install Prettier with Shared Configuration

Install Prettier and this shared configuration package.

```bash
yarn add -D prettier @side/prettier-config
```

Then, update package.json to instruct Prettier to use the shared configuration.

```jsonc
// package.json
{
  "prettier": "@side/prettier-config"
}
```

### Configure ESLint

If using ESLint, install Prettier's ESLint config.

```bash
yarn add -D eslint-config-prettier
```

Then, include it in your ESLint configuration file.

```jsonc
// .eslintrc.json (or .eslintrc, .eslintrc.js, etc.)
{
  "extends": [
    "foo",
    "bar",
    "prettier" // `prettier` should always be last in `extends`
  ]
}
```

### Configure lint-staged

If using lint-staged, update its configuration to run Prettier **_after_** ESLint.

```jsonc
// package.json
{
  "lint-staged": {
    "*.{js,ts}": ["eslint --fix"],
    "*.{js,jsx,ts,tsx,yaml,yml,json,html,css}": ["prettier --write"]
  }
}
```

### Add Helper Scripts

It can be helpful to have scripts that apply and validate formatting with Prettier. Here are two examples that can be added to package.json:

```jsonc
// package.json
{
  "scripts": {
    "format": "prettier --write .",
    "format:check": "prettier --check ."
  }
}
```

The `format:check` script can be used within a CI workflow to validate formatting. If a file does not have the correct formatting, the script will return a failing exit code.

[prettier]: https://prettier.io 'Prettier'
[shared]: https://prettier.io/docs/en/configuration.html#sharing-configurations 'Sharing Configurations'
