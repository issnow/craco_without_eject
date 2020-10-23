import React, { useState, useContext, createContext } from 'react';
const styleContext = createContext({
  // 默认值
  color: '',
  fontSize: ''
})
// provider 组件名首字母大写
function StyleProvider(props) {
  const [style, setStyle] = useState({
    color: '#008000',
    fontSize: '18px'
  });
  return (
    <styleContext.Provider value={style}>
      {props.children}
    </styleContext.Provider>
  )
}
// 函数组件
export default (props) => {
  return (
    <StyleProvider>
      <Son></Son>
    </StyleProvider>
  )
}
// son组件
function Son(props){
  const style = useContext(styleContext)
  return (
    <div>
      <h3>son组件</h3>
      <div style={style}>hello world</div>
    </div>
  )
}