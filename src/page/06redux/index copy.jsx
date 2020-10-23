import React from 'react'
import ReactDOM from 'react-dom'
// import App from './01redux_class'
import {
  createStore
} from 'redux'
import './index.less'
import { Button } from 'antd';

const INCREMENT = Symbol()
const DECREMENT = Symbol()
let store = createStore(reducer)
function reducer (state={count: 0}, action) {
  const {type,payload} = action
  switch (type) {
    case INCREMENT:
      return {count: state.count+payload}
    case DECREMENT:
      return {count: state.count - payload}
    default:
      return state
  }

}
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      count: store.getState().count
    }
  }
  componentDidMount() {
    this.unsubscribe = store.subscribe(()=>{
      this.setState({
        count: store.getState().count
      })
    })
  }
  componentWillUnmount() {
    this.unsubscribe()
  }
  render() {
    return (
      <div className='wrap'>
        <p>{store.getState().count}</p>
        <Button type='primary' onClick={()=>{store.dispatch({type: INCREMENT,payload: 3})
        }}>+</Button>
        <Button type='primary' onClick={()=>{store.dispatch({type: DECREMENT,payload:2})}}>-</Button>
      </div> 
    )
  }
}

ReactDOM.render(
  <App></App>,
  window.root
)