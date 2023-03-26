//1、导入Http模块
const http = require('http')

//2.创建服务对象
//request:封装的请求报文对象
//response:封装的响应报文对象
const server = http.createServer((request, response) => {
  //设置响应体
  response.setHeader('content-type', 'text/html;charset=utf-8')
  //设置响应体
  response.end('你好')
})

//监听9000端口，启动服务器
server.listen(9000, () => {
  console.log('服务已经启动')
})
