/**
 * These rules are taken from the Next.js ESLint config
 *
 * @link {https://github.com/vercel/next.js/blob/23c82e42af6f8297ef28a4e6fd40f95e4891d7d5/packages/eslint-config-next/index.js}
 */
module.exports = {
  rules: {
    'jsx-a11y/alt-text': [
      'warn',
      {
        elements: ['img'],
        img: ['Image'],
      },
    ],
    'jsx-a11y/aria-props': 'warn',
    'jsx-a11y/aria-proptypes': 'warn',
    'jsx-a11y/aria-unsupported-elements': 'warn',
    'jsx-a11y/role-has-required-aria-props': 'warn',
    'jsx-a11y/role-supports-aria-props': 'warn',
  },
};
