module.exports = {
  'presets': [
    '@babel/preset-env',
    '@babel/preset-react'
  ],
  // some additional plugins
  'plugins': [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-syntax-dynamic-import',
    [
      'babel-plugin-styled-components',
      { 'ssr': true }
    ],
    [
      '@babel/plugin-syntax-decorators',
      { 'legacy': true }
    ]
  ]
};