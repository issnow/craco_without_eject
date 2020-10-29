import React,{Fragment} from 'react'
import ReactDOM,{render} from 'react-dom'
import Counter from './components/counter';
import Todo from './components/todo';
import { Provider } from 'react-redux'
import store from './store'


render(<Provider store={store}>
  <Counter></Counter>
  <Todo></Todo>
</Provider>,window.root)