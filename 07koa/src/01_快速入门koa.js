const Koa = require('koa')

const app = new Koa()

app.use(async (ctx, next) => {
  console.log(1)
  await next()
  console.log(2)
})
app.use((ctx, next) => {
  console.log(3)
  next()
  console.log(4)
})
app.use((ctx, next) => {
  console.log(5)
  next()
  console.log(6)
})
app.use((ctx, next) => {
  console.log(7)
  next()
  console.log(8)
})

app.listen(9000, () => {})
