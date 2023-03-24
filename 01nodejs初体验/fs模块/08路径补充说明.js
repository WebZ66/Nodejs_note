const fs = require('fs')

//通过绝对路径  __dirname表示当前文件所在的绝对路径
fs.writeFileSync(__dirname + '/相对路径.txt', '相对路径', {}, () => {})
