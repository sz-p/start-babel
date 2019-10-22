
## babel入门
### 本文主要内容
一些babel基础知识、一个可工作的极简babel案例、一个简单的babel插件案例、以及对应的资源。
### babel是什么
**本质上:**babel是一个JavaScript的编译器,输入一些code将这些code进行编译，输出一些code。
**主要工作:**将`ES2015及更新版本`解析成浏览器可执行的低版本代码，将jsx等自定义的编码规范解析成浏览器通用的代码。
**原理:**babel 利用 babylon 解析器进行语法解析。解析成 AST（抽象语法树）后，经过一定的规则对这个树进行处理后再生成新的语法树。最终新的语法树在生成对应的合法的 Javascript 语法。

### babel主要工作流程
![](https://img.sz-p.cn/babel-01.jpg)
#### AST(Abstract Syntax Tree)
AST，就是编译时常说的抽象语法树。树状结构可以帮助我们更好的索引和操作数据结构。例如我们前端三板斧 HTML/CSS/Javascript，而我们平常认知最深的 HTML DOM 树，通过一棵树就可以表达整个页面结构，而 CSS 和 Javascript 都可以通过编译器将语法解析成 AST 抽象语法树。

代码生成 AST 需要进行词法分析和语法分析。

我们可以看一个最简单的程序语法来管中窥豹一下，我们利用 AST Expoler 看看下面这段语法的 AST 到底是长什么样的。
```javascript
if(3 > 5) {
  console.log('3 大于 5')
} else {
  console.log('5 大于等于 3')
}
```
简单画个示意图，部分属性也精简了一下。
![](https://img.sz-p.cn/babel-02.jpg)
我们可以看到，所有的 AST 树的根结点都是 Program 节点。但即使一个非常简单的 if 判断语法对应的都是一支比较复杂的树结构。而 if 语句对应的最重要的三个属性就是 consequent/test/alternate。判断分支内是一个 BinaryExpression（二元表达式），而在 ture/false 分支内则是 CallExpression（函数调用表达式），而调用的函数来自 MemberExpression（成员表达式）。

涉及到的一些常用属性及描述

| 属性                | 描述           |
| ------------------- | -------------- |
| BlockStatement      | 块级表达式     |
| BinaryExpression    | 二元表达式     |
| CallExpression      | 函数调用表达式 |
| MemberExpression    | 成员表达式     |
| Literal             | 文字           |
| Identifier          | 标识符         |
| FunctionExpression  | 函数表达式     |
| ExpressionStatement | 声明表达式     |

更多详细的 AST 类型都可以查看 Babylon 提供的 [Spec 文档](https://github.com/babel/babylon/blob/master/ast/spec.md)。

### babel案例

```javascript
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
```

以上就用babe完成了一个最简单的l工作，将source目录下es6的代码解析为了dist目录下的es5代码。

### babel配置

以上代码没有引入任何的babel配置项、babel其实是将代码原地解析生成了一遍没有对代码进行修改。babel本身有几种[配置方式]( https://babeljs.io/docs/en/configuration )以`babel.config.js`为例引入了简单的配置

```javascript
module.exports = function (api) {
  api.cache(true);
  // 现在来引入一些预设配置(presets)
  const presets = ["@babel/preset-env"]; 
  // 现在来引入一个简单插件
  const plugins = ['./pluginTest/babel-plugin-logFunctionName'];
  return {
    presets,
    plugins
  };
} 
```

In

```javascript
// 箭头函数 arrow-functions
const arrowFunctions = () => {
  console.log('arrowFunctions');
}
```

Out

```javascript
var arrowFunctions = function arrowFunctions() {
  console.log('arrowFunctions');
};
```

以上就是一个可工作的babel案例

### babel插件

接下来构建一个“给一些function插入一行log使其打印自身函数名”的小插件。

```javascript
// 插件主体 定义了一个接收了当前babel对象作为参数的 function
exports.default = function (babel) {
  // 引入当前babel对象的types访问器
  const t = babel.types;
  return {
    // 返回AST访问器
    visitor: {
      // 函数访问器
      Function(path) {
        // 一些判断条件
        if (path.node.id &&
          path.node.id.name &&
          path.node.id.type === 'Identifier' &&
          path.node.id.name[0] !== '_' &&
          (path.node.id.name !== 'get' || path.node.id.name !== 'set')) {
          // 获取主体
          path.get('body')
            // 向容器插入内容
            .unshiftContainer('body',
              // 插入声明表达式
              t.expressionStatement(
                // 函数调用表达式
                t.callExpression(
                  //成员表达式
                  t.memberExpression(
                    //插入两个标识符
                    t.identifier('console'), t.identifier('log')
                  ),
                  // 插入文字内容
                  [t.stringLiteral('function_working:' + path.node.id.name)]
                )
              )
            );
        }
      }
    }
  };
};
module.exports = exports["default"];
```

至此这个简单插件就算构建完毕。

### 资源

[ https://github.com/sz-p/start-babel ]( https://github.com/sz-p/start-babel )

启动

```javascript
yarn install
yarn transform
```

## 参考 & 引用

https://babeljs.io/
https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/plugin-handbook.md
https://www.cnblogs.com/YikaJ/p/10073540.html
https://github.com/jamiebuilds/babel-handbook 