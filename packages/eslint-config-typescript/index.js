module.exports = {
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:import/typescript',
    './rules/base',
    './rules/import',
    './rules/react',
    './rules/typescript-eslint',
  ],
};
