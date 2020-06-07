module.exports = (config) => {
  const rules = config.module.rules[0].oneOf
  const cssRuleIndex = rules.findIndex(rule => rule.test.toString() === '/\\.css$/')

  rules[cssRuleIndex] = {
    test: /\.css$/,
    use: [
      'style-loader',
      { loader: 'css-loader', options: { importLoaders: 1 } },
      'postcss-loader'
    ]
  }

  return config
}
