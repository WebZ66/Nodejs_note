const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const homeRouter = require('./routes/homeRouter')
app.use(homeRouter)
// create application/json parser
//解析JSON类型的请求体
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
/* 解析queryString格式请求体的中间件 */
var urlencodedParser = bodyParser.urlencoded({ extended: false })

//设置静态资源中间件
app.post('/login', urlencodedParser, (req, res) => {
  //直接返回html内容。
  //当中间件执行完毕后，就会往req中添加一个body属性
  console.log(req.body.username)
  res.sendFile(__dirname + '/pages/index.html')
})

app.listen(9000, () => {})
