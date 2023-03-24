const fs = require('fs')

/* //1.异步读取
fs.readFileSync('./座右铭.txt', {}, (err, data) => {
  console.log(data.toString())
})

let data = fs.readFileSync('./座右铭.txt')
console.log() */

//创建读取流对象，建立连接
const rs = fs.createReadStream('./座右铭.txt')

//绑定data事件，需要用on方法
rs.on('data', chunk => {
  //从文件中读取出来一块文件后，就会执行  每次会读取64KB的数据
  console.log(chunk.length)
})
