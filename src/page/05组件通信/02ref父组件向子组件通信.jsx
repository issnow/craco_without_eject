import React, { PureComponent } from 'react'

class Son extends React.Component {
  constructor() {
    super()
    this.state = {
      name: ''
    }
  }
  getName=(v)=> {
    this.setState({
      name: v
    })
  }
  render () {
    return (
      <div>
        name: <span>{this.state.name}</span>
      </div>
    )
  }
}
export default class Index extends PureComponent {
  constructor () {
    super()
    this.sonRef = React.createRef()
    this.state = {
      name: '小明'
    }
  }
  render() {
    return (
      <div>
        <button onClick={()=>{
          //调用子组件的方法，并传递数据
          this.sonRef.current.getName(this.state.name)
        }}>click</button>
        {/* 给子组件设置ref属性 */}
        <Son ref={this.sonRef}></Son>
      </div>
    )
  }
}
