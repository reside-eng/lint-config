// https://github.com/conventional-changelog/commitlint/blob/master/docs/reference-rules.md
module.exports = {
  extends: ['@commitlint/config-conventional'].map(require.resolve),
  parserPreset: {
    parserOpts: {
      issuePrefixes: ['#', 'PLAT-', 'CORE-', 'CA-', 'ASP-', 'DBM-', 'ENGFEED'],
      referenceActions: ['jira', 'closes', 'fixes'],
    },
  },
};
