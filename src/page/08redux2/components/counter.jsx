import React, { PureComponent } from 'react'
import { Button } from 'antd';
import store from '../store';
import * as types from '../store/action-types';
// actionCreator
export default class Counter extends PureComponent {
  constructor() {
    super()
    this.state={
      count: store.getState().counter.count
    }
  }
  componentDidMount() {
    store.subscribe(()=>{
      this.setState({
        count: store.getState().counter.count
      })
    })
  }
  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <Button type='primary' onClick={()=>{
          store.dispatch({
            type: types.INCREMENT,
            payload: 10
          })
        }}>+</Button>
        <Button type='primary' onClick={()=>{
          store.dispatch({
            type: types.DECREMENT,
            payload: 10
          })
        }}>-</Button>
      </div>
    )
  }
}
