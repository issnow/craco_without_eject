import React, { PureComponent } from 'react'
import { Input } from 'antd'
export default class Todo extends PureComponent {
  render() {
    return (
      <div style={{width: 200}}>
        <Input type='text'></Input>
      </div>
    )
  }
}
