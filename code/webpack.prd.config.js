
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
module.exports = {
  mode: "production",
  entry: {
    index: "./src/index.jsx"
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js|x$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.js|x$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            // loader: 'style-loader',
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[path][name]__[local]--[hash:base64:5]',
              }
            }
          },
          {
            loader: 'postcss-loader'
          }
        ],
      },
      {
        test: /\.(jpe?g|png|gif|webp)$/,
        use: [{
          loader: "url-loader",
          options: {
            limit: 10 * 1024,
            // path: path.resolve(__dirname, 'dist'),

            name: 'static/images/[hash:6].[ext]',
            fallback: 'file-loader',
            publicPath: '../'
          }
        }]
      },
      {
        test: /\.(wsv|ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        use: [{
          loader: "file-loader",
          options: {
            // path: path.resolve(__dirname, 'dist'),
            name: 'static/media/[name].[hash:7].[ext]',
          }
        }]
      }
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
        chunkFilename: 'style/[id].[contenthash].css',
        // path: path.resolve(__dirname, 'dist') // 默认值
      }
    )
  ],
  output: {
    filename: 'static/js/[name].[contenthash].js',
    // chunkFilename: 'static/js/[name].[contenthash].js',
    chunkFilename: 'static/js/[id].[contenthash].js',
    // path: path.resolve(__dirname, 'dist') // 默认值
  },
}