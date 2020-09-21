import React,{StrictMode} from 'react'
import ReactDOM,{render} from 'react-dom'
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom'
import App from '@page'
import App2 from '@page/02echarts/02demo'
import 'antd/dist/antd.css';
import './app.less'


/**
 * 热更新
 * 再修改代码，不会造成整个页面的刷新
 */
if(module && module.hot) {
  module.hot.accept()
}

console.log(process.env.NODE_ENV, 'node_env')
console.log(123)
render(<HashRouter>
  <Switch>
    <Route path='/home' component={App}></Route>
    <Route path='/home2' component={App2}></Route>
    <Redirect from='/' to='/home'></Redirect>
  </Switch>
</HashRouter>,document.querySelector('#root'))