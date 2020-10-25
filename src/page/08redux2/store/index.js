import { createStore } from 'redux'
import reducer from './reducer'

// 创建一个store
let store = createStore(reducer)
export default store;