import React, { useState, useContext, useEffect, useCallback, useMemo } from 'react';

export default (props)=> {
  const [name, setName] = useState('小明');
  return (
    <div>
      <Son name={name}></Son>
    </div>
  )
}

function Son(props){
  const {name} = props
  return (
    <div>
      名字是{name}
    </div>
  )
}
