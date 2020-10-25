import React from 'react'
import ReactDOM,{render} from 'react-dom'
import Counter from './components/counter';
import Todo from './components/todo';
render(<div>
  <Counter></Counter>
  <Todo></Todo>
</div>,window.root)