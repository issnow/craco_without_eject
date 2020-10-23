import React, { useState, useContext, useEffect, useCallback, useMemo } from 'react';

function Son (props) {
  const {cb} = props
  const [num, setNum] = useState(10);
  return (
    <div>
      <button onClick={()=>{
        cb(num)
      }}>click</button>
    </div>
  )
}
export default (props)=> {
  const [num, setNum] = useState();
  const getNum = (v)=>{
    console.log(v);
    setNum(v)
  }
  return (
    <div>
      <Son cb={getNum}></Son>
      <p>子组件传过来的值为:{num}</p>
    </div>
  )
}
