const path = require('path')
const context = path.resolve(__dirname, 'src')
module.exports = {
  presets: [
    require('@babel/preset-env'),
    require('@babel/preset-react')
  ],
  plugins: [
    // [
    //   'react-css-modules',
    //   {
    //     context,
    //     generateScopedName: '[path][name]__[local]--[hash:base64:5]',
    //   }
    // ]
    [
      'react-css-modules',
      {
        context,
        generateScopedName: '[path][name]__[local]--[hash:base64:5]',
        // attributeNames: {
        //   "styleName":"className"
        // },
        webpackHotModuleReloading: true,
        exclude: 'node_modules',
        // filetypes: {
        //   '.less': {
        //     syntax: 'postcss-less'
        //   }
        // },
        filetypes: {
          '.scss': {
            syntax: 'postcss-scss'
          },
          // '.sass': {
          //   syntax: 'postcss-sass'
          // },
          '.less': {
            syntax: 'postcss-less'
          }
        },
        autoResolveMultipleImports: true
      }
    ]

  ]
}
