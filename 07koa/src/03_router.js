const Koa = require('koa')
const app = new Koa()
const fs = require('fs')
const Router = require('koa-router')
//实例化路由对象
const router = new Router()
//编写路由规则
router.get('/', (ctx, next) => {
  ctx.type = 'html'
  ctx.body = fs.readFileSync('./index.html')
})
//注册路由中间件
app.use(router.routes())
app.listen(9000, () => {})
