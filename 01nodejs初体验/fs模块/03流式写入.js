const fs = require('fs')

//创建写入流对象，建立连接
const ws = fs.createWriteStream('./座右铭.txt')

//通过write进行写入
ws.write('帅气的郑大顺\r\n')
ws.write('很无语呀\r\n')

//关闭连接
ws.close()

