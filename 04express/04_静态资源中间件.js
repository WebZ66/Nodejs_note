const express = require('express')

//创建应用对象
const app = express()
//静态资源中间件设置   
app.use(express.static(__dirname+'/public'))
app.get('/home', (req, res) => {
  res.send('hello express')
})

app.listen(9000, () => {})
