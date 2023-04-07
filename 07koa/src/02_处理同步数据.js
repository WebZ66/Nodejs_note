const Koa = require('koa')
const server = new Koa()
server.use(async (ctx, next) => {
  ctx.message = 'aa'

  await next()
  ctx.body = ctx.message
})
server.use(async (ctx, next) => {
  console.log(ctx)
  ctx.message += 'bb'
  await next()
})
server.use(async (ctx, next) => {
  //它会认为所有同步代码执行完了，没有执行异步，直接next()
  const res = await Promise.resolve('cc')
  ctx.body += 'res'
  await next()
})
server.listen(9000, () => {})
