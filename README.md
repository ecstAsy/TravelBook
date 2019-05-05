# 前言

**Taro** 是一套遵循 [React](https://reactjs.org/) 语法规范的 **多端开发** 解决方案。现如今市面上端的形态多种多样，Web、React-Native、微信小程序等各种端大行其道，当业务要求同时在不同的端都要求有所表现的时候，针对不同的端去编写多套代码的成本显然非常高，这时候只编写一套代码就能够适配到多端的能力就显得极为需要。

使用 **Taro**，我们可以只书写一套代码，再通过 **Taro** 的编译工具，将源代码分别编译出可以在不同端（微信/百度/支付宝/字节跳动小程序、H5、React-Native 等）运行的代码。

该项目基于Taro，构建了一个时装衣橱的项目演示，涉及了一个电商平台完整的业务逻辑和功能点，如果这个项目能驾驭的了，相信大部分公司的其他React项目也就不在话下。


# 技术栈

React + Taro + Dva + Sass + ES6/ES7

## 项目运行

```

git clone git@github.com:ecstAsy/TravelBook.git
# 国内镜像加速节点:git@gitee.com:ecstAsy/TravelBook.git

# 全局安装taro脚手架
npm install -g @tarojs/cli@1.2.2

# 项目依赖为1.2.2版本，如要升级，请同时升级项目依赖
# 如用1.2.2版本，请忽略这句
taro update project

# 安装项目依赖
npm install

# 微信小程序
npm run dev:weapp

<!-- # 支付宝小程序
npm run dev:alipay

# 百度小程序
npm run dev:swan

# 字节跳动小程序
npm run dev:tt

# H5
npm run dev:h5

# React Native
npm run dev:rn -->

# pages模版快速生成
npm run tep `文件名`

```

## 项目说明

**git分支说明：**

  init：框架整体结构，不涉及任何业务逻辑

  master：项目的稳定版本
  
  feature：项目开发分支


## 适配进度

- [x] H5 -- 完美适配
- [x] 微信小程序 -- 完美适配
- [x] 支付宝小程序 -- 95%适配
- [x] 百度小程序 -- 95%适配
- [ ] 字节跳动小程序 -- 适配中
- [ ] React Native -- 适配中
- [ ] 快应用 -- 适配中

## 目标功能

- [x] 热门游记 -- 完成
- [x] 游记详情 -- 完成
- [x] 日记详情 -- 完成
- [x] 个人中心 -- 完成
- [ ] 个人提交 -- 开发中

# 业务介绍

目录结构

    ├── .temp                  // H5编译结果目录
    ├── .rn_temp               // RN编译结果目录
    ├── dist                   // 小程序编译结果目录
    ├── config                 // Taro配置目录
    │   ├── dev.js                 // 开发时配置
    │   ├── index.js               // 默认配置
    │   └── prod.js                // 打包时配置
    ├── screenshots            // 项目截图，和项目开发无关
    ├── site                   // H5静态文件（打包文件）
    ├── src                    // 源码目录
    │   ├── components             // 组件
    │   ├── config                 // 项目开发配置
    │   ├── images                 // 图片文件
    │   ├── models                 // redux models
    │   ├── pages                  // 页面文件目录
    │   │   └── home
    │   │       ├── index.js           // 页面逻辑
    │   │       ├── index.scss         // 页面样式
    │   │       ├── model.js           // 页面models
    │   │       └── service.js        // 页面api
    │   ├── styles             // 样式文件
    │   ├── utils              // 常用工具类
    │   ├── app.js             // 入口文件
    │   └── index.html
    ├── package.json
    └── template.js            // pages模版快速生成脚本,执行命令 npm run tep `文件名`

# 说明

>  如果对您有帮助，您可以点右上角 "Star" 支持一下 谢谢！ ^_^

>  或者您可以 "follow" 一下，我会不断开源更多的有趣的项目

>  如有问题请直接在 Issues 中提，或者您发现问题并有非常好的解决方案，欢迎 PR 👍


# 文档

### Taro开发文档

> https://nervjs.github.io/taro/docs/README.html

### dva开发文档地址

> https://dvajs.com/

### 微信小程序官方文档

> https://mp.weixin.qq.com/debug/wxadoc/dev/

### 百度智能小程序官方文档

> https://smartprogram.baidu.com/docs/introduction/register/index.html

### 支付宝小程序官方文档

> https://docs.alipay.com/mini/developer/getting-started

### 字节跳动小程序官方文档

> https://microapp.bytedance.com/

# License

[MIT](LICENSE)
