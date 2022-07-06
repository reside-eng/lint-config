# `@side/lint-staged-config`

This is a shared configuration for [lint-staged][lint-staged] that is used within JavaScript, Node.js, and TypeScript projects across `reside-eng`.

## Setup

### Install lint-staged with shared configuration

Install lint-staged and this shared configuration package.

```bash
yarn add -D lint-staged @side/lint-staged-config
```

Then, create a `.lintstagedrc.js` to use the shared configuration.

```js
// .lintstagedrc.js
module.exports = {
  ...require('@side/lint-staged-config'),
};
```

[lint-staged]: https://github.com/okonet/lint-staged#readme 'lint-staged'
