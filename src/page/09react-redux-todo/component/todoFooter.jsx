import React, { Component } from 'react'
import { connect } from 'react-redux'

export default class TodoFooter extends Component {
  render() {
    return (
      <div>
        <nav className="nav nav-pills">
        <li role="presentation" className="active"><a href="#">全部</a></li>
        <li role="presentation"><a href="#">未完成</a></li>
        <li role="presentation"><a href="#">已完成</a></li>
        </nav>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

// export default connect(mapStateToProps, mapDispatchToProps)(TodoFooter)
