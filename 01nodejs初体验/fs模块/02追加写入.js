const fs = require('fs')

//调用appendFile
fs.appendFile('./座右铭.txt', '追加的内容', {}, () => {})
