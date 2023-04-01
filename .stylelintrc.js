module.exports = {
  plugins: ['stylelint-order'],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-rational-order',
  ],
  ignoreFiles: ['**/*.min.css'],
  rules: {
    'selector-class-pattern': null,
    'selector-id-pattern': null,
    'no-descending-specificity': null,
    'property-no-vendor-prefix': null,
    'declaration-block-no-redundant-longhand-properties': [
      true,
      {
        ignoreShorthands: ['inset'],
      },
    ],
  },
};
