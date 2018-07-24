### babelrc 相关知识模块

目录
* [1. 配置文件 .babelrc ](#id1)
* [2. 命令行转码 babel-cli](#id2)
* [3. 运行 babel-node](#id3)
* [4. babel-register](#id4)
* [5. babel-polyfill ](#id5)

####  <h2 id="id1">配置文件 .babelrc </h2>
```
{
    // 转码规则
    "presets": [],
    // 插件
    "plugins": []
}
```

```
# ES2015转码规则
npm install --save-dev babel-preset-es2015

# react转码规则
npm install --save-dev babel-preset-react

# ES7不同阶段语法提案的转码规则（共有4个阶段），选装一个
npm install --save-dev babel-preset-stage-0
npm install --save-dev babel-preset-stage-1
npm install --save-dev babel-preset-stage-2
npm install --save-dev babel-preset-stage-3
```

####  <h2 id="id2">命令行转码 babel-cli</h2>
```
npm install --global babel-cli
```

```
# 转码结果输出到标准输出
babel example.js

# 转码结果写入一个文件
# --out-file 或 -o 参数指定输出文件
babel example.js --out-file compiled.js
# 或者
babel example.js -o compiled.js

# 整个目录转码
# --out-dir 或 -d 参数指定输出目录
babel src --out-dir lib
# 或者
babel src -d lib

# -s 参数生成source map文件
babel src -d lib -s
```

####  <h2 id="id3">运行 babel-node/h2>
工具自带一个babel-node命令
```
babel-node dev.js
```

可以修改 package.json 以运行es6 js
```
{
    "scripts": {
        "dev": "babel-node dev.js"
    }
}
```

#### <h2 id="id4"> babel-register </h2>
当使用require加载.js、.jsx、.es和.es6后缀名的文件，就会先用Babel进行转码

```
npm install --save-dev babel-register
```

#### <h2 id="id5"> babel-polyfill </h2>
Babel默认只转换新的JavaScript句法（syntax），而不转换新的API

```
npm install --save-dev babel-register
```

```
import 'babel-polyfill';
// 或者
require('babel-polyfill');
```

#### <h2 id="id6"> babel-polyfill </h2>
实例方法如" foobar".includes("foo")无法工作,需要引入 import 'babel-polyfill'</br>
但是每次都引入未免太麻烦,transform-runtime可以帮助程序引用该模块，</br>
babel-runtime以避免编译输出中的重复。运行时将编译到您的构建中

```
npm install --save-dev babel-plugin-transform-runtime
npm install --save babel-runtime
```

```
{
    "plugins": ["transform-runtime"]
}
```

</br>
</br>
</br>
</br>
相关参考资料:</br>
http://www.ruanyifeng.com/blog/2016/01/babel.html