
react+webpack 开发环境
已配置好文件，开发环境热加载

使用方法：
开发模式 npm start
打包构建 npm run build
打包JS库 npm run dll

dist文件夹由构建生成，如果为空。
先在当前目录运行
npm run dll 生成vender.js 运行库。

项目运行切换，在config文件下的webpack-dev.config.js里面替换
appPath = '/app-zhihu/';  app-zhihu为文件夹名
然后npm start即可。