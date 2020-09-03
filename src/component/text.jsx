import React, { useState, useContext, useEffect, useCallback, useMemo } from 'react';

import { Button } from 'antd';
export default (props)=> {
  const {tit} = props
  return (
    <div>
      <p>{tit}</p>
      <Button type='primary'>click</Button>
      <Button type="primary">Primary Button</Button>
    </div>
  )
}
