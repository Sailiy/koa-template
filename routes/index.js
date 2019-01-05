const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

function testable(isTestable) {
  return function(target) {
    target.isTestable = isTestable
  }
}

@testable(true)
class MyTestableClass {}
console.log(MyTestableClass.isTestable)

export default router
