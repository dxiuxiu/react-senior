const path = require('path');
const context = path.resolve(__dirname, 'src')
module.exports = {
  presets: [
    require('@babel/preset-env'),
    require('@babel/preset-react')
  ],
  plugins: [
    [
      'react-css-modules',
      {
        generateScopedName: '[path][name]__[local]--[hash:base64:5]',
      }
    ]
  ]
}