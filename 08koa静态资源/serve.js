const Koa = require('koa')
const serve = require('koa-static')
const app = new Koa()
const router = require('./router/router')

function routerResponse(option = {}) {
  return async function (ctx, next) {
    ctx.success = function (data, msg) {
      ctx.type = option.type || 'json'
      ctx.body = {
        code: option.successCode || 0,
        msg: msg,
        data: data
      }
    }

    ctx.fail = function (msg, code) {
      ctx.type = option.type || 'json'
      ctx.body = {
        code: code || option.failCode || 99,
        msg: msg || option.successMsg || 'fail'
      }
      console.log(ctx.body)
    }

    await next()
  }
}
app.use(serve(__dirname + '/public'))
app.use(routerResponse())
app.use(router.routes())
app.use((ctx, next) => {
  console.log('下一个中间件')
})
app.listen(9000, () => {})
