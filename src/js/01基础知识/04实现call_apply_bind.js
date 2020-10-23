let obj = {
  name: 'aa',
  sayName(...arr) {
    console.log(this.name, this, arr)
  }
}
let obj2 = {
  name: 'bb'
}