const INCREMENT = Symbol()
const DECREMENT = Symbol()
const initState = {
  count: 0
}
function reducer (state = initState, action) {
  switch (action.type) {
    case INCREMENT:
      return {count: state.count + action.payload}
    case DECREMENT:
      return {count: state.count - action.payload}
    default:
      return state
  }
}
let store = createStore(reducer)
function render () {
  let count = document.querySelector('.count')
  count.innerHTML = store.getState().count
}
// 状态一变就render页面
store.subscribe(render)
function init() {
  render()
  let add = document.querySelector('.add')
  let minus = document.querySelector('.minus')
  add.addEventListener('click', ()=>{
    store.dispatch({
      type: INCREMENT,
      payload: 2
    })
  })
  minus.addEventListener('click', ()=>{
    store.dispatch({
      type: DECREMENT,
      payload: 1
    })
  })
}
init()