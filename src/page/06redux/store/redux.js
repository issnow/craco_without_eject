function createStore (reducer) {
  let state,listeners = []
  function dispatch(action) {
    state = reducer(state, action)
    listeners.forEach(e=>e())
  }
  function subscribe(fn) {
    listeners.push(fn)
    return () =>{
      listeners.filter(e=>e!==fn)
    }
  }
  dispatch({})
  const getState = ()=>JSON.parse(JSON.stringify(state))
  return {
    dispatch,
    getState,
    subscribe
  }
}
// 返回一个新的reducer
let combineReducers = (reducers)=>{// reducers: {counter:counter,todo: todo}
  return (state={},action)=>{
    let obj = {}//最终的状态 {counter:{count:0}, todo: []}
    for(let key in reducers) {
      obj[key] = reducers[key](state[key], action)
    }
    return obj
  }
}

export {createStore,combineReducers}