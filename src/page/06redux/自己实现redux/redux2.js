function createStore(reducer) {
  let state,listeners = []
  function dispatch(action) {
    state = reducer(state, action)
    for(let i = 0; i < listeners.length;i++) {
      listeners[i]()
    }
  }
  function subscribe(cb) {
    listeners.push(cb)
    return ()=>{
      listeners = listeners.filter(e=>e!==cb)
    }
  }
  dispatch({})// 初始化
  let getState = ()=>JSON.parse(JSON.stringify(state))
  return {
    dispatch,
    subscribe,
    getState
  }
}
// const CHANGE_TITLE = Symbol()
// function reducer (state={count: 1}, action) { // {type: '',payload: ''}
//   switch (action.type) {
//     case CHANGE_TITLE:
//       return {...state, count: state.count+ 1}
//     default:
//       return state
//   }
  
// }
// let store = createStore(reducer)
// let unsubscribe = store.subscribe(()=>{
//   console.log(`${store.getState().count}-count`)
// })
// setTimeout(() => {
//   store.dispatch({
//     type: CHANGE_TITLE,
//   })
//   unsubscribe()
// }, 1000);
// setTimeout(() => {
//   store.dispatch({
//     type: CHANGE_TITLE,
//   })
// }, 2000);