import React,{StrictMode} from 'react'
import ReactDOM,{render} from 'react-dom'
import App from './page/app'
import 'antd/dist/antd.css';
import './app.less'

console.log(process.env.NODE_ENV, 'node_env')
console.log(123)
render(<App></App>,document.querySelector('#root'))