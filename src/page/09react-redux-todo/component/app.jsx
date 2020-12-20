import React, { Component } from 'react'
// import { connect } from 'react-redux'
import Footer from './todoFooter';
import Header from './todoHeader';
import List from './todoList';
export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className="col-md-6 col-md-offset-3">
            <div className="panel panel-danger">
              <div className="panel-heading">
                <Header></Header>
              </div>
              <div className="panel-body">
                <List></List>
              </div>
              <div className="panel-footer">
                <Footer></Footer>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

// export default connect(mapStateToProps, mapDispatchToProps)(App)
