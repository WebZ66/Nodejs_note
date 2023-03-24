const fs = require('fs')

fs.unlink('./复制文件.txt', err => {
  if (!err) {
    console.log('删除成功')
  }
})

/* 调用rm方法 */
fs.rm('./a.txt', err => {
  if (!err) {
    console.log('删除成功')
  }
})
