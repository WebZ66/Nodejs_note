const http = require('http')
const fs = require('fs')
const path = require('path')
const server = http.createServer((request, response) => {
  let url = new URL(request.url, 'http://127.0.0.1')
  let { pathname } = url
  //找到当前目录的pages文件夹 同时拼接传递来的pathname，从而找到对应的静态文件
  let filePath = path.resolve(__dirname, '/page' + pathname)
  //读取对应的静态文件，并返回
  fs.readFileSync(filePath, (err, data) => {
    if (err) {
      response.end('读取静态文件失败')
    } else {
      response.end(data)
    }
  })
})
server.listen(9000, () => {
  console.log('服务器启动')
})
