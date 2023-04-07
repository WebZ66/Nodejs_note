const express = require('express')

//创建应用对象
const app = express()
app.use((req, res, next) => {
  console.log(1)
  next()
  console.log(2)
})
app.use((req, res, next) => {
  console.log(3)
  next()
  console.log(4)
})
app.use((req, res, next) => {
  console.log(5)
  next()
  console.log(6)
})
app.use((req, res, next) => {
  console.log(7)
  next()
  console.log(8)
})

app.listen(9000, () => {})
