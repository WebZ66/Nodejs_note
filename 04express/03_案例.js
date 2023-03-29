const express = require('express')
const app = express()

//路由中间件  路由判断前进行处理
const checkCodeMiddleWare = (req, res, next) => {
  const { path } = req
  if (req.query.code == '521') {
    //满足条件，调剩余的路由回调
    next()
  } else {
    res.send('暗号错误')
  }
}

app.get('/home', checkCodeMiddleWare, (req, res) => {
  res.send('前端首页')
})

app.get('/admin', checkCodeMiddleWare, (req, res) => {})

app.get('/setting', checkCodeMiddleWare, (req, res) => {
  res.send('设置页面')
})
app.listen(9000, () => {})
