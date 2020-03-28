const path = require('path')
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
        context,
        generateScopedName: 'src-[path][name]__[local]', // --[hash:base64:5]
        webpackHotModuleReloading: true,
        exclude:'node_modules',
        filetypes: {
          //   '.scss': {
          //     syntax: 'postcss-scss'
          //   },
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