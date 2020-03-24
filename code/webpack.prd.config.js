module.exports = {
    mode:"production",
    entry: {
        index: "./src/index.jsx"
    },
    module:{
        rules: [
          {
            test: /\.jsx$/,
            exclude: /(node_modules)/,
            use: {
              loader: 'babel-loader',
            }
          }
      ]
    },
    output: {
      filename: 'static/js/[name].[contenthash].js',
      // chunkFilename: 'static/js/[name].[contenthash].js',
      chunkFilename: 'static/js/[id].[contenthash].js',
  },
}