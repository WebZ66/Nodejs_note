const Router = require('koa-router')
const router = new Router()
const fs = require('fs')
const path = require('path')

router.get('/api', (ctx, next) => {
  ctx.type = 'html'
  const html = fs.readFileSync(path.resolve(__dirname, './index.html'))
  ctx.body = html

})

module.exports = router
