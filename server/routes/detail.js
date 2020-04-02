const router = require('koa-router')()

router.prefix('/detail')

router.get('/', async (ctx, next) => {
    const { id } = ctx.query
    ctx.body = {
        data: {
            img: './images/火锅.png',
            title: `天下第一锅 - ${id}`,
            star: 4,
            price: '88',
            subTitle: `重庆 & 四川 麻辣火锅 - 我是列表中 id 为 ${id} 的测试数据`,
            desc: '营业时间 11:00 - 21:00 <br> 电话订购 11:00 - 19:00 <br> 网络订购 11:00 - 19:00'
        }
    }
})

router.get('/comment', async (ctx, next) => {
    const { id, page } = ctx.query
    console.log(id, page)
    ctx.body = {
        hasMore: true,
        data: [
            {
                username: `133****3355 - ${page*7+1}`,
                comment: '非常好吃，棒棒的，下次再来',
                star: 5
            },
            {
                username: `135****3452 - ${page*7+2}`,
                comment: '羊肉够分量，不错',
                star: 4
            },
            {
                username: `137****1242 - ${page*7+3}`,
                comment: '有自助的水果，非常喜欢',
                star: 4
            },
            {
                username: `131****3980 - ${page*7+4}`,
                comment: '桌子环境有点糟糕，不喜欢',
                star: 2
            },
            {
                username: `135****3565 - ${page*7+5}`,
                comment: '基本还可以，中规中矩吧，虽然没有啥惊喜',
                star: 3
            },
            {
                username: `130****9879 - ${page*7+6}`,
                comment: '感觉很棒，服务员态度非常好',
                star: 5
            },
            {
                username: `186****7570 - ${page*7+7}`,
                comment: '要是能多给开点发票就好了，哈哈啊',
                star: 4
            }
        ]
    }
})


module.exports = router
