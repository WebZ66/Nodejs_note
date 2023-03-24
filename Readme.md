# Node.js
`nodejs是什么`
nodejs是一个支持js运行的一个运行环境



## nodejs注意点

nodejs中是不能使用DOM和BOM的api的。

但是**console**和**定时器**是可以使用的。



## 顶级对象 global 

nodejs中的顶级对象是**global**，类似于`window`对象，但是nodejs环境下是没有window的





# Buffer

buffer是缓冲区，类似于Array的对象。换句话说，它是一段固定长度的内存空间，用来处理二进制数据。



# 进程与线程

进程：是资源分配的最小单位。运行中的程序可以理解为进程，可以通过任务管理器查看进程。

线程：是cpu调度的最小单位，也是实际的工作单位。进程是由一个或多个线程组成的。进程中的任意一个线程崩溃都会导致整个进程的崩溃。进程中的所有线程共享进程中的数据。进程之间相互独立互不干扰。



# fs模块  



## 文件写入

###  writeFile 异步写入 (宏任务)

语法：`fs.writeFile(file,data,options,callback)`

- file 文件(要写入的文件路径，如果不存在会创建)
- data待写入的数据
- options配置选项
- callback写入的回调   //写入完成后会触发  写入成功参数是null，失败是个err对象

```javascript
/* 
创建一个文件，写入内容
*/
/* 导入fs模块 */
const fs = require('fs')

/* 
写入文件
*/
fs.writeFile('./座右铭.txt', '三人行', {}, err => {
  if (!err) {
    console.log('写入成功')
  } else {
    console.log('写入失败')
  }
})
console.log(1)   //输出 1 
                 //   写入成功
```



### writeFileSync 同步写入

**它会先进行写入文件，然后再输出‘12’**

```js
const fs = require('fs')

fs.writeFileSync('./座右铭.txt', '帅气的同步任务', {}, err => {
  if (!err) {
    console.log('写入成功')
  }
})
console.log('12')

```



### appendFile/appendFileSync 追加写入

**appendFile作用是再文件尾部追加内容，语法与writeFile完全相同**

`fs.appendFile('文件路径','追加内容',options,callback)`



### createWriteStream 流式写入

语法: `const ws = fs.createWriteStream(path,options)`

- path 文件路径
- options 选项配置(可选)

**适用于频繁写入的情景，writeFile是一次性写入的。**

```js
const fs = require('fs')

//创建写入流对象，建立连接
const ws = fs.createWriteStream('./座右铭.txt')

//通过write进行写入
ws.write('帅气的郑大顺\r\n')
ws.write('很无语呀\r\n')

//关闭连接  (它会自动关闭的所以写不写都行)
ws.close()

```

