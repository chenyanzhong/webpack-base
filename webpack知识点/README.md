### webpack 相关架构总结

```
1.目录结构
  src/
  dist/
  webpack.common.js
  webpack.dev.js
  webpack.prod.js

2.实现开发环境
  实现热更新

3.实现生产环境
  实现热更新
  消除tree shaking
  实现懒加载
  实现缓存
  
4.公共资源管理
  使用module 进行css,js,react,图片加载
  
5.保持离线环境访问
  

5.额外支持 支持library
 
6.保持性能
  Loaders 减少必要模块
  多使用 include


```

