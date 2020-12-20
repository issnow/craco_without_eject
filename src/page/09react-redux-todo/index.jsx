import React from 'react'
import ReactDOM,{render} from 'react-dom'
import { Provider } from 'react-redux'
import App from './component/app.jsx'
import store from './store';
render(<Provider store={store}>
  <App></App>
</Provider>, document.querySelector('#root'))
