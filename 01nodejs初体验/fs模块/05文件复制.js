const fs = require('fs')
const rs = fs.createReadStream('./座右铭.txt')
//创建写入流对象
const ws = fs.createWriteStream('./复制文件.txt')

//为读取流绑定data事件,读一部分就写一部分
rs.on('data', chunk => {
  ws.write(chunk)
})
