import React, { useState, useContext, useEffect, useCallback, useMemo,useRef } from 'react';
import moment from 'moment';
export default (props)=> {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('123');
  }, [])

  // moment.js用法
  // subtract()减法,第一个参数是数字,第二个是单位
  console.log(moment().subtract(1,'months').format('YYYYMMDD'),'---');
  console.log(moment().subtract(1,'week').format('YYYYMMDD'),'---');

  // add()加法,第一个参数是数字,第二个是单位
  console.log(moment().add(1,'months').format('YYYYMMDD'),'---');
  console.log(moment().add(1,'week').format('YYYYMMDD'),'---');

  const mounted = useRef();
  console.log(mounted.courrent, 'ref');
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
  console.log(mounted.courrent, 'ref');
    } else {
      console.log('I am didUpdate')
    }
  });

  return (
    <div>
      <p>{count}</p>
      <button onClick={()=>setCount(count+ 1)}>click</button>
      hello world
    </div>
  )
}
