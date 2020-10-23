
// github上面的redux教程 https://github.com/brickspert/blog/issues/22
/**
 * dispatch就是changeState,要怎么改状态
 * reducer就是plan计划,对state的修改有一定的约束,不能随便改
 *   制定一个 state 修改计划，告诉 store，我的修改计划是什么。
 */
// createStore
// 创建 store 对象，包含 getState, dispatch, subscribe, replaceReducer
// reducer
// reducer 是一个计划函数，接收旧的 state 和 action，生成新的 state
// action
// action 是一个对象，必须包含 type 字段
// dispatch
// dispatch( action ) 触发 action，生成新的 state
// subscribe
// 实现订阅功能，每次触发 dispatch 的时候，会执行订阅函数
// combineReducers
// 多 reducer 合并成一个 reducer
// replaceReducer
// 替换 reducer 函数
// middleware
// 扩展 dispatch 函数！


let initState = {
  counter: {
    count: 0
  },
  info: {
    name: '前端九部',
    description: '我们都是前端爱好者！'
  }
}
// 创建一个容器
function createStore(reducer,initState) {
  let state = initState
  let listeners = []
  // 订阅
  function subscribe (listener) {
    listeners.push(listener)
  }
  // 通知
  function dispatch(action) {
    // 按照我的计划修改state
    state = reducer(state, action)
    /*当 state 改变的时候，我们要去通知所有的订阅者*/
    for(let i = 0; i < listeners.length; i++) {
      listeners[i]()
    }
  }
  const getState = ()=>state
  return {
    getState,
    dispatch,
    subscribe
  }
}
// 就是计划
// function reducer(state, action) {// {type: '',payload: ''}
//   switch(action.type) {
//     case 'ADD':
//       return {...state, count: state.count+1}
//     case 'MINUS': 
//       return {...state, count: state.count-1}
//     default:
//       return state
//   }
// }
function countReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return {
        count: state.count + 1
      }
    case "MINUS":
      return {
        count: state.count - 1
      }
    default:
      return state
  }
}
function infoReducer (state, action) {
  switch (action.type) {
    case 'SET_NAME':
      return {
        ...state,
        name: action.payload
      }
    case 'SET_DECRIPTION':
      return {
        ...state,
        description: action.payload
      }
    default:
      return state
  }
}
const reducer = combineReducers({
  counter: countReducer,
  info: infoReducer
})
let store = createStore(initState)
function combineReducers (reducers) {
  // reducer keys ['counter','info']
  const reducerKeys = Object.keys(reducers)
  // 返回合并后的新的reducer函数
  return function combination(state={},action) {
    // 生成新的state
    const nextState = {}
    // 遍历所有reducer,合并成一个新的state
    for(let i = 0; i < reducerKeys.length; i++) {
    }
  }
}

