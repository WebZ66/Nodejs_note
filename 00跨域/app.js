const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.resolve(__dirname, './public')))

app.listen(9000, () => {
  console.log('6666端口启用')
})
