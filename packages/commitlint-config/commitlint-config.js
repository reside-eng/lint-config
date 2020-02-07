// https://github.com/conventional-changelog/commitlint/blob/master/docs/reference-rules.md
module.exports = {
  extends: ['@commitlint/config-conventional'],
  parserPreset: {
    parserOpts: {
      issuePrefixes: ['#', 'PLAT-', 'CORE-', 'CA-'],
      referenceActions: ['jira', 'closes', 'fixes'],
    },
  },
};
