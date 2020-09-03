import React,{useState} from 'react'

import Text from '@component/text';
import './index.less';
export default (props)=> {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p className='text'>你猜我是谁</p>
      <p>{count}</p>
      <Text
        tit={'我是你爸爸1'}
      ></Text>
    </div>
  )
}
