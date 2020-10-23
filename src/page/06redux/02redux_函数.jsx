import React from 'react'
import './index.less';
import { Button } from 'antd'
import { ADD,MINUS } from './index'
import { connect } from 'react-redux'

export default connect(state=>(state))((props)=> {
  console.log(props, 'props');
  const add = ()=>{
    // dispatch
    props.dispatch({
      type: ADD,
      payload: 2
    })
  }
  const decrement = ()=>{
    // dispatch
    props.dispatch({
      type: MINUS,
      payload: 1
    })
  }
  return (
    <div className='wrap'>
      <p>{props.n}</p>
      <Button type='primary' onClick={add}>increase</Button>
      <Button type='primary' onClick={decrement}>decrease</Button>
    </div>
  )
})
