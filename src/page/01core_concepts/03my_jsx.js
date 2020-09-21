import React from 'react'

/**
 * 1.createElement返回一个对象:element(默认有四个属性:type,props,ref,key)
 * 2.根据传递的值修改这个对象
 *   type --> type
 *   props --> props中的ref和key赋值给element.ref和element.key,
 *             然后把props中的ref和key删掉,同时添加children属性
 */
function createElement(type, props, children) {
  let obj = {
    type: type,
    props: {
      children: ''
    },
    ref: null,
    key: null
  }
  obj = {...obj, type, props: {...props, children}}
  'key' in props ? (obj.key = props['key'],obj.props.key = undefined) : null
  'ref' in props ? (obj.ref = props['ref'],obj.props.ref = undefined) : null


  return obj
}

let res = createElement('h1', {id: 'titleBox', className: 'title', style: styleObj,ref: 'aa', key: 12}, '老陈')

console.log(res)

// 生成这个对象(虚拟dom)
// let obj = {
//   type: 'h1',
//   props: {id: 'titleBox', className: 'title',style: styleObj,children},
//   ref: null,
//   key: null,
// }