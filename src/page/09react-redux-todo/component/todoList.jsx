import React, { Component } from 'react'
import { connect } from 'react-redux'

export class TodoList extends Component {
  render() {
    return (
      <>
        <ul className="list-group">
          {
            this.props.todos.map(e=>(
              <li className="list-group-item" key={e.id}>
                <input type="checkbox" checked={e.isSelected} onChange={(e)=>{
                  console.log(e.target.value, e)
                }}/>
                {e.title}
                <button className="btn btn-xs pull-right">&times;</button>
              </li>
            ))
          }
        </ul>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  ...state
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
