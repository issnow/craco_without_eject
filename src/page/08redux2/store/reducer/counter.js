import * as types from '../action-types'
function counter(state={count: 100}, action) {
  switch (action.type) {
    case types.INCREMENT:
      return {count: state.count + action.payload}
    case types.DECREMENT: 
      return {count: state.count - action.payload}
    default:
      return state
  }
}
export default counter