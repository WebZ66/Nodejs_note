const express = require('express')

const app = express()

app.get('/get', (req, res, next) => {
  
  res.json({
    data: 200,
    status: 200
  })
})

app.listen(9999, () => {
  console.log('9999端口启用')
})
