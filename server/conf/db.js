const env = process.env.NODE_ENV // 环境参数(变量)
let MYSQL_CONF 
let REDIS_CONF

// 配置
if (env === 'dev') {
    MYSQL_CONF = {
        host: 'localhost',
        user: 'root',
        password: 'password',
        port: '3306', // 默认端口 3306
        database: 'myblog' // 相当于在可视化解面先执行 use myblog 语句的效果是一样的
    }
    REDIS_CONF = {
        host: '127.0.0.1',
        port: 6379,
    }
}

if (env === 'production') {
    MYSQL_CONF = {
        host: 'localhost',
        user: 'root',
        password: 'password',
        port: '3306',
        database: 'myblog'
    }
    REDIS_CONF = {
        host: '127.0.0.1',
        port: 6379,
    }
}

module.exports = {
    MYSQL_CONF,
    REDIS_CONF
}