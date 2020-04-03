const router = require('koa-router')()

router.prefix('/orderList')


let data = [
    {
        id: 001452,
        img: './images/汉堡大王.png',
        title: '汉堡大王',
        count: 3,
        price: '167',
        commentState: 0
    },
    {
        id: 001453,
        img: './images/麻辣香锅.png',
        title: '麻辣香锅',
        count: 1,
        price: '188',
        commentState: 0
    },
    {
        id: 001454,
        img: './images/自助餐.png',
        title: '好吃自出餐',
        count: 2,
        price: '110',
        commentState: 2
    }
]

router.get('/', async (ctx, next) => {
    const { userName } = ctx.query
    ctx.body = {
        data
    }
})


router.post('/submitComment', async (ctx, next) => {
    const postData = ctx.request.body
    // console.log(postData)
    const {id,comment,count} = postData
    console.log(postData)
    data = data.map((item) => {
        if (item.id === id) {
            item.commentState = 2
            item.count = count
            return item
        }
        return item
    })
    ctx.body = {
        data:true
    }
})
module.exports = router