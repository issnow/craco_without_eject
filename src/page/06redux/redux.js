function createStore(reducer) {
  let state,listeners = []
  function subscribe (fn) {
    listeners.push(fn)
    return ()=>{
      listeners.filter(e=>e!==fn)
    }
  }
  function dispatch(action) {
    state = reducer(state, action)
    listeners.forEach(e=>e())
  }
  dispatch({})
  function getState (){
    return JSON.stringify(JSON.parse(state))
  }
  return {
    getState,
    dispatch,
    subscribe
  }
}

export default createStore

function combineReducers(reducers) {
  return (state={},action)=>{
    let obj = {}
    for(let key in reducers) {
      obj[key] = reducers[key](state[key], action)
    }
    return obj
  }
}