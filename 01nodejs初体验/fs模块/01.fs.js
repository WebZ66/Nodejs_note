const fs = require('fs')

fs.writeFileSync('./座右铭.txt', '帅气的同步任务', {}, err => {
  if (!err) {
    console.log('写入成功')
  }
})
console.log('12')
