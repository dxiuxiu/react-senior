# React 基础整理及注意点汇总

## JSX

JavaScript XML 的简称
jsx 是 React 中的一种文件格式，可以支持变量和元素混写的形势，可读性更好
它是 React.createElement() 的语法糖

JSX 只能允许一个父节点

### 样式注意点

class 变为 className

style = {{}}

style 中的 font-size -> fontSize

## 事件

+ 驼峰写法

+ 注意 this 指向问题

## props 与 state

React 会实时监听 props 和 state，一旦更新就更新组件将更新结果渲染到页面

## 智能组件与木偶组件

木偶组件 - components - 会被复用的代码(组件)内容，别人给了怎样的内容就展示怎样的内容

智能组件 -container - 掌握数据调用相关组件做展示，并且不会被复用

## 组件分层

+ containers
    + page subPage

+ components
    + component - 会被复用的代码(组件)内容

## 生命周期函数

## 性能优化方案

### React 性能优化

+ React 性能优化工具

+ shouldUpdate 做优化

### webpack 性能优化

## react-router 路由

监听路由更新次数可以统计 pv

<Router></Router>

## 页面跳转及传参

### 页面跳转

标签形式的

<Link to='/'>

js 形式的
import {hashHistory} from 'react-router'
hashHistory.push('path')

### 传参

<Router path = 'detail/:id/:type'></Router>

this.props.param.id
this.props.param.type

## redux

单页面程序的组件间共享信息非常庞大

redux-demo

+ 定义规则 - reducer

+ 根据规则生成store - createStore(reducer)

+ 定义数据变化的监听函数 - store.subscribe(() => {}) - 数据一旦变化这里就能监听到

触发数据变化 - store.dispatch(action)

## react 与 redux

借助 react-redux

+ 定义规则 - reducer

+ 根据规则生成store - createStore(reducer)

+ Provider 做 store 注入

+ connect 做 store 数据向 组件中的注入


生效过程

+ 页面操作触发action - dispitch(action)

+ action 触发 state 更新

+ state 更新后自动触发页面重新渲染

+ 最终完成效果

## 结合 react 的使用场景

## fetch

yarn add fetch

## 数据 Mock

使用 koa2 做模拟接口

```shell
$ npm install koa-generator -g
$ Koa2 server

$ cd server
$ yarn install
$ yarn dev
```

http://localhost:3000/

## webpack-dev-server 的 proxy