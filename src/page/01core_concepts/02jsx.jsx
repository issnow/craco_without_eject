import React, { useState, useContext, useEffect, useCallback, useMemo, Component } from 'react';
/**
 * 教你jsx的原理
 * 1.基于babel中的语法解析模块,把jsx语法编译为react.createElement()结构
 * 2.执行react.createElement(type,props,children),创建一个对象(虚拟dom),比如有以下属性
 * type: 'h1'
 * props: {
 *  children: "郭成"
 *  className: "title"
 *  id: "titleBox"
 *  style: {color: "red"}
 * }
 * ref: null
 * key: null
 * ...
 * __proto__: Object
 * 3.ReactDOM.reander(jsx语法最后生成的对象,容器),基于render方法把生成的对象动态创建为dom元素,插入到制定的容器中
 * 
 * 
 */
// export default ()=> {
//   const styleObj = {color: 'red'}
//   const ele = <h1 id='titleBox' className='title' style={{color: 'red'}}>郭成</h1>
//   const ele3 = (<div className='a' id='wrap' ref='aa' key='101'>
//     hello world
//     <p className='b'>content1</p>
//     <span className='c'>content2</span>
//   </div>)
//   const ele2 = React.createElement('h1', {id: 'titleBox',ref: 'aa', key: 12}, '老陈')
//   console.log(ele, 'ele');
//   console.log(ele2, 'ele2');
//   console.log(ele3, 'ele3');
//   return (
//     <div>
//       {ele2}
//     </div>
//   )
// }

// import React, { Component } from 'react'
let ref1
const styleObj = {color: 'red'}
const ele = <div className='a' onClick={()=>{
  console.log('123123')
}} style={{color: 'red'}} id='wrap' ref={x=>ref1=x} key='101'>
  hello world
  <p className='b'>content1</p>
  <span className='c'>content2</span>
</div>
console.log(ele, 'ele')
const ele2 = React.createElement("div", {
  className: "a",
  id: "wrap",
  ref(x){ref1 = x},
  key: "101"
}, "hello world",React.createElement("p", {
  className: "b"
}, "content1"),React.createElement("span", {
  className: "c"
}, "content2"));
console.log(ele2, 'ele2')
let ele3 = 'hello world'
export default class jsx extends Component {
  
  render() {
    return (
      <div>
        {ele}
      </div>
    )
  }
}

