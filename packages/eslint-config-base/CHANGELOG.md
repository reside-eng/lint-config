# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.3.1](https://github.com/reside-eng/lint-config/compare/@side/eslint-config-base@2.3.0...@side/eslint-config-base@2.3.1) (2024-11-15)

### Bug Fixes

- **deps:** update dependency glob to v11 ([#731](https://github.com/reside-eng/lint-config/issues/731)) ([d999316](https://github.com/reside-eng/lint-config/commit/d9993166d348928b66fd1f65f1f300679b5cb06e))

# [2.3.0](https://github.com/reside-eng/lint-config/compare/@side/eslint-config-base@2.2.0...@side/eslint-config-base@2.3.0) (2024-10-19)

### Features

- **base:** support mts configs ([#738](https://github.com/reside-eng/lint-config/issues/738)) ([9d4db28](https://github.com/reside-eng/lint-config/commit/9d4db288a1adc4ac7f900ffa9f7eb4baedba8e78))

# [2.2.0](https://github.com/reside-eng/lint-config/compare/@side/eslint-config-base@2.1.2...@side/eslint-config-base@2.2.0) (2024-05-31)

### Features

- upgrade NodeJS to 20 ([#668](https://github.com/reside-eng/lint-config/issues/668)) ([bc4b8dd](https://github.com/reside-eng/lint-config/commit/bc4b8dd9d0ad450840a93cd5dafe118170115242))

## [2.1.2](https://github.com/reside-eng/lint-config/compare/@side/eslint-config-base@2.1.1...@side/eslint-config-base@2.1.2) (2024-05-30)

### Bug Fixes

- include mts and cts in import/extensions ([#667](https://github.com/reside-eng/lint-config/issues/667)) ([6e439a3](https://github.com/reside-eng/lint-config/commit/6e439a3b01dc981a2d6d56c1461794b4917e8beb))

## [2.1.1](https://github.com/reside-eng/lint-config/compare/@side/eslint-config-base@2.1.0...@side/eslint-config-base@2.1.1) (2024-05-30)

### Bug Fixes

- support default export in config files for ESM repos ([#666](https://github.com/reside-eng/lint-config/issues/666)) ([c10aff3](https://github.com/reside-eng/lint-config/commit/c10aff3c331cbff35f7d28dbf67114f96867a0a0))

# [2.1.0](https://github.com/reside-eng/lint-config/compare/@side/eslint-config-base@2.0.3...@side/eslint-config-base@2.1.0) (2024-02-16)

### Features

- **base:** add cjs/mjs extensions for ESM support ([#631](https://github.com/reside-eng/lint-config/issues/631)) ([4e3ff4b](https://github.com/reside-eng/lint-config/commit/4e3ff4b628bd7bd3e2b1731693cc7361eaedb046))

## [2.0.3](https://github.com/reside-eng/lint-config/compare/@side/eslint-config-base@2.0.2...@side/eslint-config-base@2.0.3) (2024-02-14)

### Bug Fixes

- **deps:** update dependency glob to v10 ([#624](https://github.com/reside-eng/lint-config/issues/624)) ([dd48859](https://github.com/reside-eng/lint-config/commit/dd4885930ffb6a3ead494c4ae7d2ca0c288df71a))

## [2.0.2](https://github.com/reside-eng/lint-config/compare/@side/eslint-config-base@2.0.1...@side/eslint-config-base@2.0.2) (2023-12-28)

### Bug Fixes

- **base:** use paths for more accurate restricted imports ([#599](https://github.com/reside-eng/lint-config/issues/599)) ([39a269c](https://github.com/reside-eng/lint-config/commit/39a269cd34ca0f36b903d9f14242be8278a515ef))

## [2.0.1](https://github.com/reside-eng/lint-config/compare/@side/eslint-config-base@2.0.0...@side/eslint-config-base@2.0.1) (2023-12-28)

### Bug Fixes

- **base:** prevent false negative on restricted imports ([#598](https://github.com/reside-eng/lint-config/issues/598)) ([8fb8df8](https://github.com/reside-eng/lint-config/commit/8fb8df83f470f647a216dc4e5ded4527313d3762))

# [2.0.0](https://github.com/reside-eng/lint-config/compare/@side/eslint-config-base@1.0.0...@side/eslint-config-base@2.0.0) (2023-12-27)

- feat(base)!: add restricted import rule for lodash (#410) ([c8087c6](https://github.com/reside-eng/lint-config/commit/c8087c625f79fd38bdaa596094477a0d434327ad)), closes [#410](https://github.com/reside-eng/lint-config/issues/410)

### BREAKING CHANGES

- requires change of any top level imports of lodash or date-fns to be switched to direct import (only within services - UIs unaffected)

# [1.0.0](https://github.com/reside-eng/lint-config/compare/@side/eslint-config-base@0.17.0...@side/eslint-config-base@1.0.0) (2023-03-29)

**Note:** Version bump only for package @side/eslint-config-base

# [1.0.0-alpha.1](https://github.com/reside-eng/lint-config/compare/@side/eslint-config-base@0.17.0...@side/eslint-config-base@1.0.0-alpha.1) (2023-03-29)

**Note:** Version bump only for package @side/eslint-config-base

# [0.17.0](https://github.com/reside-eng/lint-config/compare/@side/eslint-config-base@0.16.1...@side/eslint-config-base@0.17.0) (2023-03-29)

### Features

- upgrade lerna ([#492](https://github.com/reside-eng/lint-config/issues/492)) ([54c907b](https://github.com/reside-eng/lint-config/commit/54c907bc7d6dee491fbac3ecb9769284554785cf)), closes [#488](https://github.com/reside-eng/lint-config/issues/488)

# [0.17.0-alpha.0](https://github.com/reside-eng/lint-config/compare/@side/eslint-config-base@0.16.1...@side/eslint-config-base@0.17.0-alpha.0) (2023-03-29)

### Features

- upgrade lerna ([#488](https://github.com/reside-eng/lint-config/issues/488)) ([6b10c5e](https://github.com/reside-eng/lint-config/commit/6b10c5ea54a9e68f7e3b04499a48a85b704a93cc))

## [0.16.1](https://github.com/reside-eng/lint-config/compare/@side/eslint-config-base@0.16.0...@side/eslint-config-base@0.16.1) (2023-02-27)

### Bug Fixes

- **deps:** update dependency glob to v8 ([#345](https://github.com/reside-eng/lint-config/issues/345)) ([29b3786](https://github.com/reside-eng/lint-config/commit/29b37861876ddd982c3277c6d77a843ed47d061f))

# [0.16.0](https://github.com/reside-eng/lint-config/compare/@side/eslint-config-base@0.15.1...@side/eslint-config-base@0.16.0) (2022-08-05)

### Features

- allow loops over iterators ([#397](https://github.com/reside-eng/lint-config/issues/397)) ([2c8d95c](https://github.com/reside-eng/lint-config/commit/2c8d95cf5ab4169c3dc339f809c9ac7c8505c0ce))

## [0.15.1](https://github.com/reside-eng/lint-config/compare/@side/eslint-config-base@0.15.0...@side/eslint-config-base@0.15.1) (2022-07-20)

### Bug Fixes

- **base:** add lint-staged.config file to imports settings ([#390](https://github.com/reside-eng/lint-config/issues/390)) ([7b23635](https://github.com/reside-eng/lint-config/commit/7b236353dba5545acfd719498be689ee2a969e7e))

# [0.15.0](https://github.com/reside-eng/lint-config/compare/@side/eslint-config-base@0.14.0...@side/eslint-config-base@0.15.0) (2022-07-01)

### Features

- **config-base:** add support for firebase-admin v10 imports [PLAT-1324] ([#378](https://github.com/reside-eng/lint-config/issues/378)) ([90f322a](https://github.com/reside-eng/lint-config/commit/90f322a3484b6c1527db5921d7423ba10d2701cb))

# [0.14.0](https://github.com/reside-eng/lint-config/compare/@side/eslint-config-base@0.13.5...@side/eslint-config-base@0.14.0) (2022-04-21)

### Features

- create Next.js config [ASP-567] ([#343](https://github.com/reside-eng/lint-config/issues/343)) ([35ce06a](https://github.com/reside-eng/lint-config/commit/35ce06a0fd0219c5d789f8da42c87364791bebbc))

## [0.13.5](https://github.com/reside-eng/lint-config/compare/@side/eslint-config-base@0.13.4...@side/eslint-config-base@0.13.5) (2022-03-29)

### Bug Fixes

- **base:** include ignore patterns in base config ([#335](https://github.com/reside-eng/lint-config/issues/335)) ([39d0828](https://github.com/reside-eng/lint-config/commit/39d08286a26ab95caf788b423cc1524a37b0ef08))

## [0.13.4](https://github.com/reside-eng/lint-config/compare/@side/eslint-config-base@0.13.3...@side/eslint-config-base@0.13.4) (2022-03-25)

### Bug Fixes

- disable `arrow-body-style` lint rule ([#331](https://github.com/reside-eng/lint-config/issues/331)) ([f1eb353](https://github.com/reside-eng/lint-config/commit/f1eb35360bb21ce3339fe002f2cfac283ae95c35))

## [0.13.3](https://github.com/reside-eng/lint-config/compare/@side/eslint-config-base@0.13.2...@side/eslint-config-base@0.13.3) (2022-01-21)

### Bug Fixes

- turn off class-methods-use-this rule ([#290](https://github.com/reside-eng/lint-config/issues/290)) ([03838ba](https://github.com/reside-eng/lint-config/commit/03838bac6a96fea45dafaa8c9d659f2feda93d34))

## [0.13.2](https://github.com/reside-eng/lint-config/compare/@side/eslint-config-base@0.13.1...@side/eslint-config-base@0.13.2) (2022-01-05)

**Note:** Version bump only for package @side/eslint-config-base

## [0.13.1](https://github.com/reside-eng/lint-config/compare/@side/eslint-config-base@0.13.0...@side/eslint-config-base@0.13.1) (2021-12-22)

### Bug Fixes

- **deps:** bump eslint-config-airbnb-base from 14.2.1 to 15.0.0 ([#232](https://github.com/reside-eng/lint-config/issues/232)) ([2fe8eb5](https://github.com/reside-eng/lint-config/commit/2fe8eb5452d6a87ec782d34f4f6b6ee0ca09ec04))

# [0.13.0](https://github.com/reside-eng/lint-config/compare/@side/eslint-config-base@0.12.2...@side/eslint-config-base@0.13.0) (2021-12-08)

### Features

- update rules for default exports [PLAT-1239] ([#255](https://github.com/reside-eng/lint-config/issues/255)) ([bb96f9a](https://github.com/reside-eng/lint-config/commit/bb96f9aa1ee20267211ade55b2e86f092a63e785))

### BREAKING CHANGES

- Default exports are now disallowed in favor of
  named exports.

## [0.12.2](https://github.com/reside-eng/lint-config/compare/@side/eslint-config-base@0.12.1...@side/eslint-config-base@0.12.2) (2021-11-17)

### Bug Fixes

- upgrade dependencies and use carets moving forward ([#241](https://github.com/reside-eng/lint-config/issues/241)) ([b6e765f](https://github.com/reside-eng/lint-config/commit/b6e765f42023f97a3988a0056ccc5622ee33833f))

## [0.12.1](https://github.com/reside-eng/lint-config/compare/@side/eslint-config-base@0.12.0...@side/eslint-config-base@0.12.1) (2021-10-19)

**Note:** Version bump only for package @side/eslint-config-base

# [0.12.0](https://github.com/reside-eng/lint-config/compare/@side/eslint-config-base@0.11.7...@side/eslint-config-base@0.12.0) (2021-09-01)

### Features

- **deps:** bump eslint-plugin-import from 2.24.0 to 2.24.2 ([#188](https://github.com/reside-eng/lint-config/issues/188)) ([4783b41](https://github.com/reside-eng/lint-config/commit/4783b417bc0b5a07fa648bb1af12a220efd9abd7))

## [0.11.7](https://github.com/reside-eng/lint-config/compare/@side/eslint-config-base@0.11.6...@side/eslint-config-base@0.11.7) (2021-09-01)

**Note:** Version bump only for package @side/eslint-config-base

## [0.11.6](https://github.com/reside-eng/lint-config/compare/@side/eslint-config-base@0.11.5...@side/eslint-config-base@0.11.6) (2021-08-12)

**Note:** Version bump only for package @side/eslint-config-base

## [0.11.5](https://github.com/reside-eng/lint-config/compare/@side/eslint-config-base@0.11.4...@side/eslint-config-base@0.11.5) (2021-06-07)

### Bug Fixes

- **dependabot:** move to fixed dependency versions ([#159](https://github.com/reside-eng/lint-config/issues/159)) ([4823708](https://github.com/reside-eng/lint-config/commit/4823708899919106e20b0d8f768977bd8f7017b5))

## [0.11.4](https://github.com/reside-eng/lint-config/compare/@side/eslint-config-base@0.11.3...@side/eslint-config-base@0.11.4) (2021-05-11)

**Note:** Version bump only for package @side/eslint-config-base

## [0.11.3](https://github.com/reside-eng/lint-config/compare/@side/eslint-config-base@0.11.2...@side/eslint-config-base@0.11.3) (2021-04-23)

**Note:** Version bump only for package @side/eslint-config-base

## [0.11.2](https://github.com/reside-eng/lint-config/compare/@side/eslint-config-base@0.11.1...@side/eslint-config-base@0.11.2) (2021-03-05)

**Note:** Version bump only for package @side/eslint-config-base

## [0.11.1](https://github.com/reside-eng/lint-config/compare/@side/eslint-config-base@0.11.0...@side/eslint-config-base@0.11.1) (2020-12-07)

**Note:** Version bump only for package @side/eslint-config-base

# [0.11.0](https://github.com/reside-eng/lint-config/compare/@side/eslint-config-base@0.10.1...@side/eslint-config-base@0.11.0) (2020-12-03)

### Features

- user 2020 parserOptions to support optional chaining ([#79](https://github.com/reside-eng/lint-config/issues/79)) ([3a61d08](https://github.com/reside-eng/lint-config/commit/3a61d08a9b4331e42802fd542b1674ddcd2930f0))

## [0.10.1](https://github.com/reside-eng/lint-config/compare/@side/eslint-config-base@0.10.0...@side/eslint-config-base@0.10.1) (2020-07-08)

### Bug Fixes

- enforce consistent single quote ([#24](https://github.com/reside-eng/lint-config/issues/24)) ([36c5aad](https://github.com/reside-eng/lint-config/commit/36c5aadada37b857456757ad709b6a78b15f6f51))

# [0.10.0](https://github.com/reside-eng/lint-config/compare/@side/eslint-config-base@0.9.1...@side/eslint-config-base@0.10.0) (2020-06-30)

### Features

- typescript test extentions for import/no-extraneous-dependencies ([#23](https://github.com/reside-eng/lint-config/issues/23)) ([de300a4](https://github.com/reside-eng/lint-config/commit/de300a44e190bafede950ef3bac0c4961d1d175e))

## [0.9.1](https://github.com/reside-eng/lint-config/compare/@side/eslint-config-base@0.9.0...@side/eslint-config-base@0.9.1) (2020-05-28)

### Bug Fixes

- move to [@side](https://github.com/side) scope ([#21](https://github.com/reside-eng/lint-config/issues/21)) ([496ff99](https://github.com/reside-eng/lint-config/commit/496ff9956d51ae2e746549c7c687c8a11ae14b71))

# 0.9.0 (2020-05-27)

### Bug Fixes

- add .eslintrc.js to no-extraneous-dependencies list ([#13](https://github.com/reside-eng/lint-config/issues/13)) ([922de1a](https://github.com/reside-eng/lint-config/commit/922de1abd582608900e45988f9730110dc4988fd))
- extend airbnb rules first before custom rules ([#6](https://github.com/reside-eng/lint-config/issues/6)) ([cb4f069](https://github.com/reside-eng/lint-config/commit/cb4f06996e1ce3f2026f815497f0ae36e9731873))
- ignore cypress files from jest config ([#15](https://github.com/reside-eng/lint-config/issues/15)) ([5f5d975](https://github.com/reside-eng/lint-config/commit/5f5d975a00a88b9e67d25d012ed0589b263cb45c))
- include rules as folder to publish ([#7](https://github.com/reside-eng/lint-config/issues/7)) ([e4651b3](https://github.com/reside-eng/lint-config/commit/e4651b37850b777c3b33ec762817eb55018af7ed))
- provide core settings for base rules ([#9](https://github.com/reside-eng/lint-config/issues/9)) ([00b00a5](https://github.com/reside-eng/lint-config/commit/00b00a58fbc349bae9c2199e78f70c44bb2f0d5d))
- revert peer dependency of prettier ([008c753](https://github.com/reside-eng/lint-config/commit/008c75393424daa46f6c28eec38e4bb716e07d17))
- support jsx for stories for no-extraneous-dependencies ([#12](https://github.com/reside-eng/lint-config/issues/12)) ([01b72a2](https://github.com/reside-eng/lint-config/commit/01b72a2ec455278968e6cea702e0365d72e917f8))
- upgrade peerDependency of Prettier ([77f1bff](https://github.com/reside-eng/lint-config/commit/77f1bff8b1680cc81452b375a76e128c0371f12b))
- use prettier/react to override jsx conflicting rules ([#8](https://github.com/reside-eng/lint-config/issues/8)) ([798d539](https://github.com/reside-eng/lint-config/commit/798d5394c484b49b54fcc0a1fdb324ad3ec27197))

### Features

- add cypress file support ([#16](https://github.com/reside-eng/lint-config/issues/16)) ([ad5ccc7](https://github.com/reside-eng/lint-config/commit/ad5ccc72c08d2b3722874dbf14d0defa3498a0fe))
- add Jest as separate lint package ([#18](https://github.com/reside-eng/lint-config/issues/18)) ([6809e19](https://github.com/reside-eng/lint-config/commit/6809e19d63f92353ac5b769c475970f601822733))
- add jest linting to base config ([#14](https://github.com/reside-eng/lint-config/issues/14)) ([a43422d](https://github.com/reside-eng/lint-config/commit/a43422da4c72a1b1cf9c916ddd822ee587913f2e))
- add overrides to no-console and import/no-extraneous-dependencies ([f39cdd9](https://github.com/reside-eng/lint-config/commit/f39cdd9ba41a3af7da7873895915ced4cefb4445))
- add react-hooks linting option and upgrade Prettier major ([#2](https://github.com/reside-eng/lint-config/issues/2)) ([3dc6182](https://github.com/reside-eng/lint-config/commit/3dc6182463b7c027cc54d63c71f40cd067f845bd))
- add some additional rules we need for Side ([#5](https://github.com/reside-eng/lint-config/issues/5)) ([9d33552](https://github.com/reside-eng/lint-config/commit/9d33552856604b2d0a867ddccd37ef4560edf3a7))
- initial commit ([#1](https://github.com/reside-eng/lint-config/issues/1)) ([38e8735](https://github.com/reside-eng/lint-config/commit/38e8735bec1fe95bc00802114878284852ac1ca3))
- move library to new [@side](https://github.com/side) scope ([#20](https://github.com/reside-eng/lint-config/issues/20)) ([ca05278](https://github.com/reside-eng/lint-config/commit/ca052782a37ac2ac727cd202e1135d4dc01cab87))
- upgrade ESLint to v7.0.0 ([#17](https://github.com/reside-eng/lint-config/issues/17)) ([9821399](https://github.com/reside-eng/lint-config/commit/98213995db8f79bfddaabb51881fac0136b80073))
- upgrade Prettier to next major ([761b62f](https://github.com/reside-eng/lint-config/commit/761b62ffa00a7f5748c8b0de9ba22d7ebe0b49eb))
- upgrade Prettier to next major ([ca6ca53](https://github.com/reside-eng/lint-config/commit/ca6ca5313bde09f22abb2148d24e587830138f60))

# [0.8.0](https://github.com/reside-eng/lint-config/compare/@side-eng/eslint-config-base@0.7.0...@side-eng/eslint-config-base@0.8.0) (2020-05-11)

### Features

- add Jest as separate lint package ([#18](https://github.com/reside-eng/lint-config/issues/18)) ([6809e19](https://github.com/reside-eng/lint-config/commit/6809e19d63f92353ac5b769c475970f601822733))

# [0.7.0](https://github.com/reside-eng/lint-config/compare/@side-eng/eslint-config-base@0.6.0...@side-eng/eslint-config-base@0.7.0) (2020-05-11)

### Features

- upgrade ESLint to v7.0.0 ([#17](https://github.com/reside-eng/lint-config/issues/17)) ([9821399](https://github.com/reside-eng/lint-config/commit/98213995db8f79bfddaabb51881fac0136b80073))

# [0.6.0](https://github.com/reside-eng/lint-config/compare/@side-eng/eslint-config-base@0.5.1...@side-eng/eslint-config-base@0.6.0) (2020-05-08)

### Features

- add cypress file support ([#16](https://github.com/reside-eng/lint-config/issues/16)) ([ad5ccc7](https://github.com/reside-eng/lint-config/commit/ad5ccc72c08d2b3722874dbf14d0defa3498a0fe))

## [0.5.1](https://github.com/reside-eng/lint-config/compare/@side-eng/eslint-config-base@0.5.0...@side-eng/eslint-config-base@0.5.1) (2020-05-08)

### Bug Fixes

- ignore cypress files from jest config ([#15](https://github.com/reside-eng/lint-config/issues/15)) ([5f5d975](https://github.com/reside-eng/lint-config/commit/5f5d975a00a88b9e67d25d012ed0589b263cb45c))

# [0.5.0](https://github.com/reside-eng/lint-config/compare/@side-eng/eslint-config-base@0.4.3...@side-eng/eslint-config-base@0.5.0) (2020-05-07)

### Features

- add jest linting to base config ([#14](https://github.com/reside-eng/lint-config/issues/14)) ([a43422d](https://github.com/reside-eng/lint-config/commit/a43422da4c72a1b1cf9c916ddd822ee587913f2e))

## [0.4.3](https://github.com/reside-eng/lint-config/compare/@side-eng/eslint-config-base@0.4.2...@side-eng/eslint-config-base@0.4.3) (2020-05-07)

### Bug Fixes

- add .eslintrc.js to no-extraneous-dependencies list ([#13](https://github.com/reside-eng/lint-config/issues/13)) ([922de1a](https://github.com/reside-eng/lint-config/commit/922de1abd582608900e45988f9730110dc4988fd))

## [0.4.2](https://github.com/reside-eng/lint-config/compare/@side-eng/eslint-config-base@0.4.1...@side-eng/eslint-config-base@0.4.2) (2020-05-06)

### Bug Fixes

- support jsx for stories for no-extraneous-dependencies ([#12](https://github.com/reside-eng/lint-config/issues/12)) ([01b72a2](https://github.com/reside-eng/lint-config/commit/01b72a2ec455278968e6cea702e0365d72e917f8))

## [0.4.1](https://github.com/reside-eng/lint-config/compare/@side-eng/eslint-config-base@0.4.0...@side-eng/eslint-config-base@0.4.1) (2020-05-06)

**Note:** Version bump only for package @side-eng/eslint-config-base

# [0.4.0](https://github.com/reside-eng/lint-config/compare/@side-eng/eslint-config-base@0.3.3...@side-eng/eslint-config-base@0.4.0) (2020-05-06)

### Features

- add overrides to no-console and import/no-extraneous-dependencies ([f39cdd9](https://github.com/reside-eng/lint-config/commit/f39cdd9ba41a3af7da7873895915ced4cefb4445))

## [0.3.3](https://github.com/reside-eng/lint-config/compare/@side-eng/eslint-config-base@0.3.2...@side-eng/eslint-config-base@0.3.3) (2020-05-05)

### Bug Fixes

- provide core settings for base rules ([#9](https://github.com/reside-eng/lint-config/issues/9)) ([00b00a5](https://github.com/reside-eng/lint-config/commit/00b00a58fbc349bae9c2199e78f70c44bb2f0d5d))

## [0.3.2](https://github.com/reside-eng/lint-config/compare/@side-eng/eslint-config-base@0.3.1...@side-eng/eslint-config-base@0.3.2) (2020-04-16)

### Bug Fixes

- use prettier/react to override jsx conflicting rules ([#8](https://github.com/reside-eng/lint-config/issues/8)) ([798d539](https://github.com/reside-eng/lint-config/commit/798d5394c484b49b54fcc0a1fdb324ad3ec27197))

## [0.3.1](https://github.com/reside-eng/lint-config/compare/@side-eng/eslint-config-base@0.3.0...@side-eng/eslint-config-base@0.3.1) (2020-04-14)

### Bug Fixes

- include rules as folder to publish ([#7](https://github.com/reside-eng/lint-config/issues/7)) ([e4651b3](https://github.com/reside-eng/lint-config/commit/e4651b37850b777c3b33ec762817eb55018af7ed))

# [0.3.0](https://github.com/reside-eng/lint-config/compare/@side-eng/eslint-config-base@0.1.1...@side-eng/eslint-config-base@0.3.0) (2020-04-13)

### Bug Fixes

- extend airbnb rules first before custom rules ([#6](https://github.com/reside-eng/lint-config/issues/6)) ([cb4f069](https://github.com/reside-eng/lint-config/commit/cb4f06996e1ce3f2026f815497f0ae36e9731873))

### Features

- add some additional rules we need for Side ([#5](https://github.com/reside-eng/lint-config/issues/5)) ([9d33552](https://github.com/reside-eng/lint-config/commit/9d33552856604b2d0a867ddccd37ef4560edf3a7))

# [0.2.0](https://github.com/reside-eng/lint-config/compare/@side-eng/eslint-config-base@0.1.1...@side-eng/eslint-config-base@0.2.0) (2020-04-10)

### Features

- add some additional rules we need for Side ([#5](https://github.com/reside-eng/lint-config/issues/5)) ([9d33552](https://github.com/reside-eng/lint-config/commit/9d33552856604b2d0a867ddccd37ef4560edf3a7))

## [0.1.1](https://github.com/reside-eng/lint-config/compare/@side-eng/eslint-config-base@0.1.0...@side-eng/eslint-config-base@0.1.1) (2020-04-10)

### Bug Fixes

- upgrade peerDependency of Prettier ([77f1bff](https://github.com/reside-eng/lint-config/commit/77f1bff8b1680cc81452b375a76e128c0371f12b))

# [0.1.0](https://github.com/reside-eng/lint-config/compare/@side-eng/eslint-config-base@0.0.1...@side-eng/eslint-config-base@0.1.0) (2020-04-10)

### Bug Fixes

- revert peer dependency of prettier ([008c753](https://github.com/reside-eng/lint-config/commit/008c75393424daa46f6c28eec38e4bb716e07d17))

### Features

- add react-hooks linting option and upgrade Prettier major ([#2](https://github.com/reside-eng/lint-config/issues/2)) ([3dc6182](https://github.com/reside-eng/lint-config/commit/3dc6182463b7c027cc54d63c71f40cd067f845bd))
- upgrade Prettier to next major ([761b62f](https://github.com/reside-eng/lint-config/commit/761b62ffa00a7f5748c8b0de9ba22d7ebe0b49eb))
- upgrade Prettier to next major ([ca6ca53](https://github.com/reside-eng/lint-config/commit/ca6ca5313bde09f22abb2148d24e587830138f60))
