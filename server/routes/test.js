const router = require('koa-router')()

router.prefix('/test')

router.get('/t1', async function (ctx, next) {
  ctx.body = {
    data: 't1-get-data'
  }
})

router.post('/t2', async function (ctx, next) {
  ctx.body = {
      data: 't2-post-data'
  }
})

module.exports = router
