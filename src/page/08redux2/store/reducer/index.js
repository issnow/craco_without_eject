import counter from './counter'
import todo from './todo'
import { combineReducers } from 'redux'

// 产生一个新的reducer
let reducer = combineReducers({
  counter,
  todo
})
export default reducer;