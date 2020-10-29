import React, { PureComponent } from 'react'
import { Button } from 'antd';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
// import store from '../store';
import {
  add,
  minus
} from '../store/action/counter';
import * as counter from '../store/action/counter';
import * as todo from '../store/action/todo';
class Counter extends PureComponent {
  // constructor() {
  //   super()
  //   this.state={
  //     count: store.getState().counter.count
  //   }
  // }
  // componentDidMount() {
  //   store.subscribe(()=>{
  //     this.setState({
  //       count: store.getState().counter.count
  //     })
  //   })
  // }
  render() {
    console.log(this.props);
    return (
      <div>
        {/* <p>{this.state.count}</p> */}
        <p>{this.props.count}</p>
        <Button type='primary' onClick={()=>{
          // store.dispatch(add(10))
          this.props.add(11)
        }}>+</Button>
        <Button type='primary' onClick={()=>{
          // store.dispatch(minus(10))
          this.props.minus(11)
        }}>-</Button>
      </div>
    )
  }
}
// reduxmap 生成mapStateToProps 
// rcredux 生成class组件带connect

// 将redux状态映射成属性 this.props
// const mapStateToProps = (state) => ({
//   n1: state.counter.count
// })

const mapStateToProps = state=>({...state.counter})

/**
 * mapDispatchToProps作用-->将dispatch映射成属性 this.props
 * ! 注意mapDispatchToProps有多种用法
 * 
 */
// 1.注入 todos 并把所有的 todoActionCreators 和 counterActionCreators 作为 props 注入到组件中
// 打印this.props --> {n1: 100, add: ƒ, minus: ƒ, addTodo: ƒ}
const mapDispatchToProps = dispatch =>{
  return bindActionCreators(Object.assign({}, counter, todo), dispatch)
}

// 2.注入 todos 并把 todoActionCreators 与 counterActionCreators 一同作为 actions 属性注入到组件中
// this.props --> {n1: 100, actions: {add: ƒ, minus: ƒ, addTodo: ƒ}}
// const mapDispatchToProps = dispatch => {
//   return {
//     actions: bindActionCreators(Object.assign({}, counter, todo), dispatch)
//   }
// }

// 3.注入 todos 并把 todoActionCreators 作为 todoActions 属性、counterActionCreators 作为 counterActions 属性注入到组件中
// this.props --> {n1: 100, counterActions: {add: ƒ, minus: ƒ}, todoActions: {addTodo: ƒ}}
// const mapDispatchToProps = dispatch => {
//   return {
//     counterActions: bindActionCreators(counter, dispatch),
//     todoActions: bindActionCreators(todo, dispatch)
//   }
// }

// 4.注入 todos 并把所有 action creator (add, minus) 作为 actions 属性也注入组件中
// this.props --> {n1: 100, actions: {add: ƒ, minus: ƒ}}
// const mapDispatchToProps = dispatch=>{
//   return {
//     actions: bindActionCreators(counter, dispatch)
//   }
// }

// 5.简单用法
// const mapDispatchToProps = dispatch =>({
//   add(v) {
//     dispatch(counter.add(v))
//   },
//   minus(v) {
//     dispatch(counter.minus(v))
//   }
// })

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
// --> 简单的用法, 直接传一个counter{add(){},minus(){}}
// export default connect(mapStateToProps, counter)(Counter)

// !bindActionCreators实现
// function bindActionCreators (actions){// 为什么可以直接传入一个actions,在内部会用这个函数进行包装
//   return (dispatch)=>{
//     let obj = {}
//     for(let key in actions) {
//       obj[key] = (...args)=>{
//         dispatch(actions[key](...args))
//       }
//     }
//     return obj
//   }
// }



