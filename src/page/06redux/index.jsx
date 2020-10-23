import React from 'react';
import ReactDOM,{render} from 'react-dom'
import Compute from './component/compute'
import Counter from './component/counter'
render(
  <div>
    <Counter></Counter>
    <Compute></Compute>
  </div>,
  window.root
)
