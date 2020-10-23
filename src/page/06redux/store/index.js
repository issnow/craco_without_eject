import { createStore } from './redux'
function reducer(state={count: 0}, action) {
  switch (action.type) {
    case 'ADD':
      return {count: state.count + action.payload}
    case 'MINUS':
      return {count: state.count - action.payload}
    default:
      return state
  }
}
let store = createStore(reducer)
export default store;