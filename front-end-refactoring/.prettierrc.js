module.exports = {
  endOfLine: 'lf',
  tabWidth: 2,
  useTabs: false,
  printWidth: 120,
  semi: false,
  singleQuote: true,
  trailingComma: 'es5',
  jsxBracketSameLine: true,
  arrowParens: 'avoid',
  overrides: [
    {
      files: '*.json',
      options: {
        printWidth: 80,
        tabWidth: 4,
      },
    },
  ],
}
