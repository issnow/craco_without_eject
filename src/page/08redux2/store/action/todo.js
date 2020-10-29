import * as types from '../action-types'
export const addTodo = (content) =>{
  return {
    type: types.ADD_TOOD,
    payload: content
  }
}