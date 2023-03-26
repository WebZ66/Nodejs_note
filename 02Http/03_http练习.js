const http = require('http')
const serve = http.createServer((request, response) => {
  const url = request.url
  response.setHeader('content-type', 'text/html;charset=utf-8')
  if (url == '/login') {
    response.end('登录界面')
  } else {
    response.end('注册界面')
  }
})

serve.listen(9000, () => {
  console.log('服务启动')
})
