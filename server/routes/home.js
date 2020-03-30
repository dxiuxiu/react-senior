const router = require('koa-router')()

router.prefix('/home')

router.get('/', async (ctx, next) => {
    ctx.body = {
        data: [
            {
                title: '暑假5折',
                img: './images/暑假5折.png',
                link: 'https://blog.csdn.net/m0_37148591'
            },
            {
                title: '特价出国',
                img: './images/特价出国.png',
                link: 'https://blog.csdn.net/m0_37148591'
            },
            {
                title: '亮亮车',
                img: './images/亮亮车.png',
                link: 'https://blog.csdn.net/m0_37148591'
            },
            {
                title: '学钢琴',
                img: './images/学钢琴.png',
                link: 'https://blog.csdn.net/m0_37148591'
            },
            {
                title: '电影',
                img: './images/电影.png',
                link: 'https://blog.csdn.net/m0_37148591'
            },
            {
                title: '旅游热卖',
                img: './images/旅游热卖.png',
                link: 'https://blog.csdn.net/m0_37148591'
            }
        ]
    }
})

router.get('/list', async (ctx, next) => {
    ctx.body = {
        hasMore: true,
        data: [
            {
                img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201638030-473660627.png',
                title: '汉堡大大',
                subTitle: '叫我汉堡大大，还你多彩口味',
                price: '28',
                distance: '120m',
                mumber: '389',
                id: Math.random().toString().slice(2)
            },
            {
                img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201645858-1342445625.png',
                title: '北京开源饭店',
                subTitle: '[望京]自助晚餐',
                price: '98',
                distance: '140m',
                mumber: '689',
                id: Math.random().toString().slice(2)
            },
            {
                img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201652952-1050532278.png',
                title: '服装定制',
                subTitle: '原价xx元，现价xx元，可修改一次',
                price: '1980',
                distance: '160',
                mumber: '106',
                id: Math.random().toString().slice(2)
            },
            {
                img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201700186-1351787273.png',
                title: '婚纱摄影',
                subTitle: '免费试穿，拍照留念',
                price: '2899',
                distance: '160',
                mumber: '58',
                id: Math.random().toString().slice(2)
            },
            {
                img: 'http://images2015.cnblogs.com/blog/138012/201610/138012-20161016201708124-1116595594.png',
                title: '麻辣串串烧',
                subTitle: '双人免费套餐等你抢购',
                price: '0',
                distance: '160',
                mumber: '1426',
                id: Math.random().toString().slice(2)
            }
        ]
    }
})


module.exports = router
