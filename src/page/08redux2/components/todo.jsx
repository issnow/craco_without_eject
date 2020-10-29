import React, { PureComponent } from 'react'
import { Input } from 'antd'
import * as todoAction from '../store/action/todo'
import { connect } from 'react-redux';
class Todo extends PureComponent {
  render() {
    return (
      <div style={{width: 200}}>
        <Input onKeyUp={(e)=>{
          if(e.keyCode == 13) {
            // store.dispatch(addTodo(e.target.value))
            this.props.addTodo(e.target.value)
            e.target.value = ''
          }
        }}></Input>
        {
          this.props.todos.map((e,i)=>(<li key={i}>{e}</li>))
        }
      </div>
    )
  }
}
export default connect(state=>({todos: state.todo}), todoAction)(Todo)