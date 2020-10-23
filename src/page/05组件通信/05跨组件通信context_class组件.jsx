import React, { PureComponent,createContext,Component } from 'react'
const toggleContext = createContext({
  toggle: true,
  handleToggle(){}
})
class ToggleProvider extends Component {
  constructor () {
    super()
    this.state = {
      toggle: true,
      handleToggle:this.handleToggle
    }
  }
  handleToggle=()=>{
    this.setState({
      toggle: !this.state.toggle
    })
  }
  render() {
    return (
      <toggleContext.Provider value={this.state}>
        {this.props.children}
      </toggleContext.Provider>
    )
  }
}
 /**
   * 子组件具体使用context两种用法:
   * 1.contextType
   * 2.Consumer
   */
class Son1 extends Component {
  static contextType = toggleContext
  constructor() {
    super()
  }
  render () {
    const {toggle,handleToggle} = this.context
    return (
      <>
        <h3>son1组件</h3>
        <h3 style={{color: toggle? 'red': 'green'}}>{toggle?'true': 'false'}</h3>
        <button onClick={handleToggle}>click</button>
      </>
    )
  }
}
class Son2 extends Component {
  render () {
    return (
      <>
        <h3>son2组件</h3>
        <toggleContext.Consumer>
          {
            context=>{
              const {toggle,handleToggle} = context
              return (
                <>
                  <h2 style={{color: toggle?'red': 'green'}}>{toggle?'hello':'world'}</h2>
                  <button onClick={handleToggle}>click</button>
                </>
              )
            }
          }
        </toggleContext.Consumer>
      </>
    )
  }
}
export default class Index extends PureComponent {
  render() {
    return (
      <ToggleProvider>
        <Son1></Son1>
        <Son2></Son2>
      </ToggleProvider>
    )
  }
}
