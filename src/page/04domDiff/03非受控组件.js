import React, { PureComponent } from 'react'

export default class index extends PureComponent {
  constructor(props) {
    super(props)
    this.inputRef = React.createRef()
  }
  render() {
    return (
      <div>
        <form onSubmit={(e)=>{
          e.preventDefault()
          console.log(this.inputRef.current.value)
        }}>
          <input type='text' ref={this.inputRef}></input>
          <input type='submit' value='submit'></input>
        </form>
      </div>
    )
  }
}
