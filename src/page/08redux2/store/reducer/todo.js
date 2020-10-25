import * as types from '../action-types'
function todo(state=[], action) {
  switch (action.type) {
    case types.ADD_TOOD:
      return [...state, action.payload]
    default:
      return state
  }
}
export default todo;