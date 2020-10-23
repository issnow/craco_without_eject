let obj = {
  name: 'aa',
  sayName(...arr) {
    // console.log(this, params)
    console.log(this.name, this, arr)
  }
}
// console.log(obj.sayName())
let obj2 = {
  name: 'bb'
}
// console.log(obj.sayName.call(obj2,123))
let arr = [1,2,3,4,5]
// console.log(Math.max.apply(null, arr))
// console.log(Math.min.apply(null, arr))
let f = obj.sayName.bind(obj2, 1,2,3)
f()