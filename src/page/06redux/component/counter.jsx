import React, { Component } from 'react'
import store from '../store';
import { Button as Btn } from 'antd';
export default class counter extends Component {
  constructor() {
    super()
    this.state = {
      count: store.getState().counter.count
    }
  }
  componentDidMount() {
    this.un = store.subscribe(()=>{
      this.setState({
        count: store.getState().counter.count
      })
    })
  }
  componentWillUnmount() {
    this.un()
  }
  render() {
    return (
      <>
        <Btn type='primary' onClick={()=>{
          store.dispatch({
            type: 'ADD',
            payload: 1
          })
        }}>+</Btn>
        <span>{this.state.count}</span>
        <Btn type='primary' onClick={()=>{
          store.dispatch({
            type: 'MINUS',
            payload: 1
          })
        }}>-</Btn>
      </>
    )
  }
}
