import React from 'react';
import ReactDOM,{render} from 'react-dom'
import Compute from './component/compute'
import Counter from './component/counter'
import Todo from './component/todo'
render(
  <div>
    <Counter></Counter>
    <Compute></Compute>
    <Todo></Todo>
  </div>,
  window.root
)
