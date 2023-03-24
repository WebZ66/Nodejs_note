const fs = require('fs')
const path = require('path')

fs.writeFileSync(path.resolve(__dirname,'./README.md'),'nodejs',{},()=>{})
