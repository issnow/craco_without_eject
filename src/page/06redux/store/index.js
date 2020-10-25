import { createStore,combineReducers } from './redux'
function counter(state={count: 0}, action) {
  switch (action.type) {
    case 'ADD':
      return {count: state.count + action.payload}
    case 'MINUS':
      return {count: state.count - action.payload}
    default:
      return state
  }
}
function todo(state = [], action) {
  switch (action.type) {
    case 'ADDTODO':
      return [...state, action.payload]
    default:
      return state
  }
}
// 返回一个新的reducer
// let combineReducers = (reducers)=>{// reducers: {counter:counter,todo: todo}
//   return (state={},action)=>{
//     let obj = {}//最终的状态 {counter:{count:0}, todo: []}
//     for(let key in reducers) {
//       obj[key] = reducers[key](state[key], action)
//     }
//     return obj
//   }
// }
let reducer = combineReducers({counter,todo})
let store = createStore(reducer)
export default store;