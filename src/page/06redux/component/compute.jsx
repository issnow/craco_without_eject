import store from '../store';
import React, { Component } from 'react'

export default class compute extends Component {
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
        <div>{this.state.count%2 === 0 ? '偶数':'奇数'}</div>
      </>
    )
  }
}
