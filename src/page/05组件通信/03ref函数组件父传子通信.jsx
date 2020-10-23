import React, { useState, useImperativeHandle,forwardRef, useRef } from 'react';

function Son (props, ref) {
  const [name, setName] = useState('');
  useImperativeHandle(ref, ()=>({
    cb(v) {
      console.log(v);
      setName(v)
    }
  }))
  return (
    <div>
      name: {name}
    </div>
  )
}
Son = forwardRef(Son)
export default (props)=> {
  const sonRef = useRef(null)
  const [name, setName] = useState('小明')
  return (
    <div>
      <button onClick={()=>{
        sonRef.current.cb(name)
      }}>click2</button>
      <Son ref={sonRef}></Son>
    </div>
  )
}
