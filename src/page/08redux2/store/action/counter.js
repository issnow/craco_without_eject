import * as types from '../action-types';
// actionCreator
export const add = (v)=>({
  type: types.INCREMENT,
  payload: v
})

export const minus = v=>({
  type: types.DECREMENT,
  payload: v
})