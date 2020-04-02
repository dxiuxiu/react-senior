const router = require('koa-router')()

router.prefix('/search')

router.get('/', async (ctx, next) => {
    const {cityName,category,keyword,page} = ctx.query
    console.log(cityName)
    ctx.body = {
        hasMore: true,
        data: [
            {
                img: './images/汉堡.png',
                title: `${category}-${keyword}${page*5+1}`,
                subTitle: `我是类别为${category},搜索关键字为${keyword}的测试结果1`,
                price: '28',
                distance: '120m',
                mumber: '389',
                id: 1
            },
            {
                img: './images/自助餐.png',
                title: `${category}-${keyword}${page*5+2}`,
                subTitle: `我是类别为${category},搜索关键字为${keyword}的测试结果2`,
                price: '98',
                distance: '140m',
                mumber: '689',
                id: 2
            },
            {
                img: './images/服装定制.png',
                title: `${category}-${keyword}${page*5+3}`,
                subTitle: `我是类别为${category},搜索关键字为${keyword}的测试结果3`,
                price: '1980',
                distance: '160',
                mumber: '106',
                id: 3
            },
            {
                img: './images/婚纱摄影.png',
                title: `${category}-${keyword}${page*5+4}`,
                subTitle: `我是类别为${category},搜索关键字为${keyword}的测试结果4`,
                price: '2899',
                distance: '160',
                mumber: '58',
                id: 4
            },
            {
                img: './images/烧烤.png',
                title: `${category}-${keyword}${page*5+5}`,
                subTitle: `我是类别为${category},搜索关键字为${keyword}的测试结果5`,
                price: '0',
                distance: '160',
                mumber: '1426',
                id: 5
            }
        ]
    }
})



module.exports = router
