import React, { PureComponent } from 'react'

export default class index extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }
  render() {
    return (
      <div>
        <input value={this.state.value} onChange={(e)=>{
          this.setState({
            value: e.target.value
          })
        }}></input>
      </div>
    )
  }
}
