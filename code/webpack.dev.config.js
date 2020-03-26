const path = require('path');
const context = path.resolve(__dirname, 'src');
module.exports = {
  entry: {
    index: "./src/index.jsx"
  },
  devtool: 'cheap-module-source-map',
  devServer: {
    contentBase: './public',
    open: true,
    hot: true, // 让 devServer 开启 HMR 功能
    hotOnly: false, // true 表示即使 HMR 功能未生效浏览器也不自动刷新
    progress: true, // 显示打包进度条

    // 用自己的 ip 访问 devServer 启动的服务
    useLocalIp: true,
    host: '0.0.0.0',
    proxy: {
      '/test': {
        target: 'http://localhost:3000',
        secure: false
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader',
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
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: 'style-loader',
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
          },
          {
            loader: 'sass-loader'
          },
        ],
      },
      {
        test: /\.jsx$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        }
      },

      {
        test: /\.(jpe?g|png|gif|webp)$/,
        use: [{
          loader: "url-loader",
          options: {
            limit: 10 * 1024,
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
            name: 'static/media/[name].[hash:7].[ext]',
          }
        }]
      }
    ]
  },
  output: {
    filename: 'static/js/[name].js', // 这里占位符 [name] 就是 entry 配置的 key 值
    chunkFilename: 'static/js/[name].chunk.js',
  },

}