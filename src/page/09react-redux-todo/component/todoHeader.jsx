import React, { Component } from 'react'
import { act } from 'react-dom/test-utils';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../store/action';
export class TodoHeader extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  getUnfinishCount= ()=>{
    return this.props.todos.filter(e=>!e.isSelected).length
  }
  render() {
    return (
      <div>
        <h3>亲 你有{this.getUnfinishCount()}件事没完成</h3>
        <input type="text" className="form-control" onKeyUp={e=>{
          if(e.keyCode === 13) {
            this.props.addTodo({
              id: Math.random(),
              title: e.target.value,
              isSelected: false
            })
          }
        }}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state
})

const mapDispatchToProps = dispatch=>bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoHeader)
