import * as types from '../action-types'
export const addTodo = (payload)=>{
  // {
  //   isSelected: false,
  //   title: '今天吃药了吗?',
  //   id: 1
  // },
  return {
    type: types.ADD_TODO,
    payload
  }
}