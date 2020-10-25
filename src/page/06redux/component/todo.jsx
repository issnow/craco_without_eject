import React, { PureComponent } from 'react'
import store from '../store'

export default class Todo extends PureComponent {
  componentDidMount() {
    store.subscribe(()=>{

    })
  }
  render() {
    return (
      <div>
        <input type="text" onKeyDown={(e)=>{
          store.dispatch({
            type: 'ADDTODO',
            payload: e.target.value
          })
        }}/>
      </div>
    )
  }
}
