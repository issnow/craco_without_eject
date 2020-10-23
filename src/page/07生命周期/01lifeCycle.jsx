import React, { Component,Fragment } from 'react'

export default class Index extends Component {
  constructor(props) {
    super(props)
    console.log('constructor');
    this.state = {
      name: 'guocheng'
    }
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
  render() {
    console.log('render');
    return (
      <>  
        <p>name: {this.state.name}</p>
        <button onClick={()=>{
          this.setState({
            name: 'xiao'
          })
        }}>click</button>
      </>
    )
  }
}
