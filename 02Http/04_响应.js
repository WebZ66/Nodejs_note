const http = require('http')
const fs = require('fs')
const server = http.createServer((request, response) => {
  //读取文件内容 ,读出来的是buffer。response.end()可以发送buffer
  let data = fs.readFileSync('./index.html')
  response.end(data)
})

server.listen(9000, () => {
  console.log('服务启动')
})
