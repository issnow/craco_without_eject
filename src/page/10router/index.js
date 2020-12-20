import React from 'react'
import ReactDOM,{render} from 'react-dom'
import App from './routers/app.js'
import Home from './routers/home'
import Profile from './routers/profile'
import User from './routers/user'

// 一般在index中而配置路由
/**
 * switch: 
 * exact: 是否精准匹配
 * Redirect: 
 */
import { HashRouter as Router, 
  Route, 
  NavLink,
  Switch,//用于渲染与路径匹配的第一个子 Route 或 Redirect。
  Redirect,//重定向

} from 'react-router-dom'

render(<Router>
  <App>
    <Switch>
      <Route path='/' exect component={Home}></Route>
      <Route path='/profile' component={Profile}></Route>
      <Route path='/user' component={User}></Route>

      {/* 重定向,上面都匹配不到 */}
      <Redirect to='/'></Redirect>
    </Switch>
  </App>
</Router>,window.root)
