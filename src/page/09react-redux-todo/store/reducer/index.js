import * as types from '../action-types'
let initState = {
  todos:[
    {
      isSelected: false,
      title: '今天吃药了吗?',
      id: 1
    },
    {
      isSelected: false,
      title: '今天吃药了吗?',
      id: 2
    }
  ]
}

function reducer(state = initState, action) {
  switch (action.type) {
    case types.ADD_TODO:
      return {todos: [...state.todos, action.payload]}
    default:
      return state
  }
}

export default reducer