
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
  mode: "production",
  entry: {
    index: "./src/index.jsx"
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.less$/,
        use: [
          {
            // loader: 'style-loader',
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                strictMath: true,
                noIeCompat: true,
              },
            },
          },
        ],
      },
    ]
  },
  plugins: [
    /**
     * All files inside webpack's output.path directory will be removed once, but the
     * directory itself will not be. If using webpack 4+'s default configuration,
     * everything under <PROJECT_DIR>/dist/ will be removed.
     * Use cleanOnceBeforeBuildPatterns to override this behavior.
     *
     * During rebuilds, all webpack assets that are not used anymore
     * will be removed automatically.
     *
     * See `Options and Defaults` for information
     */
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ template: './public/template.html' }),
    // new MiniCssExtractPlugin(),
    new MiniCssExtractPlugin(
      {
        filename: 'style/[name].[contenthash].css',
        chunkFilename: 'style/[id].[contenthash].css'
      }
    )
  ],
  output: {
    filename: 'static/js/[name].[contenthash].js',
    // chunkFilename: 'static/js/[name].[contenthash].js',
    chunkFilename: 'static/js/[id].[contenthash].js',
  },
}