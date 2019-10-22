// 引入babel核心
const babel = require('@babel/core');
// 引入操作模块
const fs = require('fs');
// 获取当前路径
const basePath = process.cwd();
const decodefilePath = basePath + '/source/Es6.js';
const encodefilePath = basePath + '/dist/Es5.js'
// 读取文件
const fileValue = fs.readFileSync(decodefilePath);
// 解析代码
const enCode = babel.transform(fileValue);
// 写入新文件
fs.writeFileSync(encodefilePath, enCode.code);
