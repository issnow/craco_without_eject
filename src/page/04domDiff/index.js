import React, { Component } from 'react'
import reducer from 'immer'
export default class Index extends Component {
  constructor(props) {
    super(props)
    this.state = {
      arr: [1,2,3]
    }
  }
  handleDelete = (i)=>{
    let arr = reducer(this.state.arr, d=>{
      d.splice(i, 1)
    })
    this.setState({
      arr
    }, ()=>{
      console.log(this.state.arr, 'arr')
    })
  }
  render() {
    return (
      <div style={{width: 300,margin: '0 auto'}}>
        {
          this.state.arr.map((e,i)=>(
            <div key={i}>
              {i}
              <input></input>
              <button onClick={this.handleDelete.bind(null, i)}>delete</button>
            </div>
          ))
        }
      </div>
    )
  }
}
