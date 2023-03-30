const express = require('express')
const router = express.Router()
const path = require('path')
const fs = require('fs')
router.get('/home', (req, res, next) => {
  res.sendFile(path.resolve(__dirname, '../views/home.html'))
})
router.get('/admin', (req, res, next) => {
  const html = fs.readFileSync(path.resolve(__dirname, '../views/admin.html'))
  res.end(html)
})
module.exports = router
