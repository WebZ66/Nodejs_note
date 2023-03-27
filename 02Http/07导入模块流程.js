/* 
伪代码
*/
function require(file) {
  //将路径改为绝对路径
  let absolutePath = path.resolve(__dirname, file)
  //缓存检测
  if (caches[absolutePath]) {
    return caches[absolutePath]
  }
  //读取文件的代码
  let code = fs.readFileSync(absolutePath).toString()
  ;//包裹为一个函数执行
  (function () {})(exports, require, module)
}
