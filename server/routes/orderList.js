const router = require('koa-router')()

router.prefix('/orderList')

router.get('/', async (ctx, next) => {
    const { userName } = ctx.query
    ctx.body = {
        data: [
            {
                id: Math.random(),
                img: './images/汉堡大王.png',
                title: '汉堡大王',
                count: 3,
                price: '167',
                commentState: 0
            },
            {
                id: Math.random(),
                img: './images/麻辣香锅.png',
                title: '麻辣香锅',
                count: 1,
                price: '188',
                commentState: 0
            },
            {
                id: Math.random(),
                img: './images/自助餐.png',
                title: '好吃自出餐',
                count: 2,
                price: '110',
                commentState: 2
            }
        ]
    }
})

module.exports = router