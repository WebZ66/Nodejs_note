# Node.js
[掘金笔记链接](https://juejin.cn/flash-note/list?note_id=7214005409902755895&from=6)
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

| 方法             | 说明                             |
| ---------------- | -------------------------------- |
| writeFile        | 异步写入                         |
| writeFileSync    | 同步写入                         |
| createWriteSteam | 流式写入(建立连接，进行连续写入) |



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

const res=fs.writeFileSync('./座右铭.txt', '帅气的同步任务', {})
//返回值res是undefined
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





## 文件读取

| 方法            | 说明                             |
| --------------- | -------------------------------- |
| readFile        | 异步读取                         |
| readFileSync    | 同步读取                         |
| createReadSteam | 流式读取(建立连接，进行连续读取) |



### readFile 异步读取

语法:`fs.readFile(path,options,callback)`

- path 文件路径
- options配置选项
- callback回调函数   (错误信息，读取到的内容)=>{}

返回值：`undefined`

```js
const fs = require('fs')

//1.异步读取
fs.readFile('./座右铭.txt', {}, (err, data) => {
    //data是buffer序列，需要通过toString转化
  console.log(data.toString())
})

```



### readFileSync 同步读取

语法： `let data=readFileSync('路径')`

**它只需要传入路径即可，返回值是读取到的buffer序列**

```js
let data = fs.readFileSync('./座右铭.txt')
console.log(data)
```



### createReadSteam 流式读取

**建立读取流对象，通过on绑定data事件，每次读取64KB的数据**

```js
//创建读取流对象，建立连接
const rs = fs.createReadStream('./座右铭.txt')

//绑定data事件，需要用on方法
rs.on('data', chunk => {
  //从文件中读取出来一块文件后，就会执行  每次会读取64KB的数据
  console.log(chunk.length)
})
//end是可选事件 结束读取时触发
rs.on('end',()=>{})
```





## 案例：复制文件

```js
方式①：
//复制座右铭.txt
const fs = require('fs')
//读取文件内容
const data = fs.readFileSync('./座右铭.txt')
//重新写入一个新文件
const res=fs.writeFileSync('./复制文件.js', data, {})
console.log(res)
console.log('12')

----
方式②：流式读取和写入
const fs = require('fs')
//创建读取流对象
const rs = fs.createReadStream('./座右铭.txt')
//创建写入流对象
const ws = fs.createWriteStream('./复制文件.txt')
//为读取流绑定data事件,读一部分就写一部分
rs.on('data', chunk => {
  ws.write(chunk)
})


```



## 文件重命名和移动

语法: `fs.rename(oldPath,newPath,callback)`

​		  `fs.renameSync(oldPath,newPath)`



## 文件删除

语法： `fs.unlink(path,callback)`

​			 `fs.unlinkSync(path)`

```js
const fs = require('fs')

fs.unlink('./复制文件.txt', err => {
  if (!err) {
    console.log('删除成功')
  }
})

```



第二种方式: `fs.rm(path,callback)`

​					 `fs.rmSync(path)`

```js
/* 调用rm方法 */  node 14版本新增的
fs.rm('./a.txt', err => {
  if (!err) {
    console.log('删除成功')
  }
})

```



## 文件夹操作

| 操作       | 异步                               | 同步                    |
| ---------- | ---------------------------------- | ----------------------- |
| 创建文件夹 | mkdir(path,options,callback)       | mkdirSync(path,options) |
| 读取文件夹 | readdir(path,(err，data)=>{})      | readdirSync(path)       |
| 删除文件夹 | rmdir(path,callback)//需要目录为空 | rmdirSync(path)         |

### 创建文件夹

```js
const fs = require('fs')

fs.mkdir('./文件夹', {}, err => {
  if (!err) console.log('文件夹创建成功')
})

```

#### 递归创建文件夹

**需要配置 `{recursive:true}`**

```js
const fs = require('fs')

//递归创建多个文件夹，需要配置项{recursive:true}
fs.mkdir('./a/b/c', { recursive: true }, err => {
  if (err) {
    console.log('失败')
  }
})

```

### 

### 读取文件夹

```js
const fs = require('fs')

fs.readdir('../fs模块', (err, data) => {
  if (err) return
  console.log(data)
})

```

![image-20230324154405025](C:\Users\szdrz\AppData\Roaming\Typora\typora-user-images\image-20230324154405025.png)





### 删除文件夹  

**必须目录为空才能删除**

语法：`fs.rmdir('./',(err)=>)`







## 路径补充说明



**相对路径的bug:**

如果不在对应的目录下，node  .\代码\08路径补充.js，那么相对路径就会当命令行的当前目录下创建。(即工作目录)

```js
const fs = require('fs')
//通过相对路径写入文件
fs.writeFileSync('./相对路径.txt', '相对路径', {}, () => {})
```



**__dirname (可以理解为一个''全局变量'')**

`它代表所在文件所在路径的绝对路径`

```js
const fs = require('fs')

//通过绝对路径  __dirname表示当前文件所在的绝对路径
fs.writeFileSync(__dirname + '/相对路径.txt', '相对路径', {}, () => {})

```

![image-20230324155417314](C:\Users\szdrz\AppData\Roaming\Typora\typora-user-images\image-20230324155417314.png)



# path模块



**path模块提供了 `操作路径的功能`**

| API           | 说明                          |
| ------------- | ----------------------------- |
| path.resolve  | 拼接规范的绝对路径 `最常使用` |
| path.sep      | 获取操作系统的路径分隔符      |
| path.parse    | 解析路径并返回对象            |
| path.basename | 获取路径的基础名称            |
| path.dirname  | 获取路径的目录名              |
| path.extname  | 获取路径的扩展名              |



> 之前通过绝对路径创建文件的时候，那个绝对路径是不规范的，需要通过path.resolve进行拼接

```js
const fs = require('fs')
const path = require('path')

//resolve  拼接绝对路径
fs.writeFileSync(path.resolve(__dirname, './index.js'), '绝对路径', {}, () => {})

```

