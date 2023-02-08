# Side Jest Config for Next.js

## Usage

Install the package as a dev dependency:

```sh
yarn add -D @side/jest-config-next
```

Then add the following to your Jest config file:

```ts
// jest.config.{js,mjs,ts}
import { makeConfig } from '@side/jest-config-next';

export default makeConfig();
```

## Customization

### Module Aliases

If you have module aliases (such as those defined in tsconfig.json `paths`), you can include them like this:

```ts
import { makeConfig } from '@side/jest-config-next';

export default makeConfig({
  moduleAliases: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
});
```

The `moduleAliases` option is an alias (no pun intended) for the [`moduleNameMapper`](https://jestjs.io/docs/configuration#modulenamemapper-objectstring-string--arraystring) option in Jest.

### Overrides

> **Warning**: You probably don't need to override anything. If you do, please consider modifying this library instead to ensure our shared config remains up to date.
>
> If there are options that do need to be overriden per project, consider adding them directly to the `MakeConfigOptions` interface.

If you need to override any of the default options, you can do so by passing an object to the `overrides` option:

```ts
import { makeConfig } from '@side/jest-config-next';

export default makeConfig({
  overrides: {
    testEnvironment: 'node',
  },
});
```
