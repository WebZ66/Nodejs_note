var express = require('express')
var router = express.Router()
const fs = require('fs')
const path = require('path')
/* GET home page. */
router.get('/account', (req, res, next) => {
  res.sendFile(path.resolve(__dirname, '../views/list.html'))
})
router.get('/account/create', (req, res, next) => {
  res.send('添加记录')
})
module.exports = router
