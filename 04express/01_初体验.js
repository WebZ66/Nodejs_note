const express = require('express')

//创建应用对象
const app = express()

app.get('/:id.html', (req, res) => {
  res.send('hello express')
})

app.listen(9000, () => {})
