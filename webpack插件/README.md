### webpackc 插件整理

#### 1.代码压缩插件
tree shaking 是一个术语，通常用于描述移除 JavaScript 上下文中的未引用代码(dead-code)
下述插件可以移除无用的代码

```
UglifyJSPlugin 
BabelMinifyWebpackPlugin
ClosureCompilerPlugin

```

#### 2.设置生产环境常量插件
```
new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify('production')
})
```

#### 3.代码分离插件
```


```
