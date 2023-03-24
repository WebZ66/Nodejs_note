const fs = require('fs')
const path = require('path')

//resolve

fs.writeFileSync(path.resolve(__dirname, './index.js'), '绝对路径', {}, () => {})
