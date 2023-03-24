const fs = require('fs')

fs.readdir('../fs模块', (err, data) => {
  if (err) return
  console.log(data)
})
