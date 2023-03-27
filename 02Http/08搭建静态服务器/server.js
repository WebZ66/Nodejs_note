/* 
创建一个Http服务，端口为9000
*/

const http = require('http')
const fs = require('fs')
const path = require('path')
const server = http.createServer((req, res) => {
  let { pathname } = new URL(req.url, 'http://localhost')
  //拼接文件路径
  let filePath = path.resolve(__dirname, `./page/${pathname}`)
  //根据路径去读取文件
  fs.readFile(filePath, {}, (err, data) => {
    if (err) {
      res.statusCode = 500
      res.end('文件读取失败')
      return
    }
    //响应文件内容
    res.end(data)
  })
  /*  if (pathname === '/index.html') {
    //读取文件内容并返回
    let html = fs.readFileSync(path.resolve(__dirname, './page/index.html'))
    res.end(html)
  } else if (pathname === '/css/style.css') {
    let css = fs.readFileSync(path.resolve(__dirname, './page/css/style.css'))
    res.end(css)
  } */
})

server.listen(9000, () => {})
