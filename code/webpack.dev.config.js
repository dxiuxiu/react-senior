module.exports = {
    entry: {
        index: "./src/index.jsx"
    },
    devServer: {
        contentBase: './public',
        open: true,
        hot: true, // 让 devServer 开启 HMR 功能
        hotOnly: false, // true 表示即使 HMR 功能未生效浏览器也不自动刷新
        progress: true, // 显示打包进度条

        // 用自己的 ip 访问 devServer 启动的服务
        useLocalIp: true,
        host: '0.0.0.0'
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
      filename: 'static/js/[name].js', // 这里占位符 [name] 就是 entry 配置的 key 值
      chunkFilename: 'static/js/[name].chunk.js',
    },

}