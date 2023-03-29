const express = require('express')
const fs = require('fs')
const app = express()
const path = require('path')

//声明全局中间件函数
function recordMiddleWare(req, res, next) {
  //next():内部函数，执行以后才会继续执行
  let { url, ip } = req
  //将信息保存文件中,不断追加
  fs.appendFileSync(path.resolve(__dirname, './access.log'), `${url} ${ip}\r\n`)
  //中间件执行完毕，调用next
  next()
}
//使用中间件函数
app.use(recordMiddleWare)

app.get('/home', (req, res) => {
  //获取url和ip

  res.send('前端首页')
})

app.get('/admin', (req, res) => {
  res.send('后台首页')
})

app.listen(9000, () => {})
