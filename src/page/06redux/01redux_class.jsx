import React, { PureComponent } from 'react'
import { Button } from 'antd';
import './index.less';
/**
 * redux是一种状态管理的解决方案
 * store:数据仓库
 * action:1个动作,触发数据改变的方法
 * dispatch:将动作触发成方法
 * reducer:是一个函数,接受action对象,改变数据,生成一个新的state,从而改变页面
 */
export default class Index extends PureComponent {
  render() {
    return (
      <div className='wrap'>
        <p>0</p>
        <Button type='primary'>increase</Button>
        <Button type='primary'>decrease</Button>
      </div>
    )
  }
}
