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

export {createStore}