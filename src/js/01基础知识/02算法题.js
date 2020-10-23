// 1.在一个数组中 找出里面其中两项相加后的和为num，如果存在就返回两个数的索引位置，否则false
// let arr = [1,2,3,4,5],num = 5
// function fn(arr, total) {
//   for(let i = 0; i < arr.length; i++) {
//     let gap = total - arr[i]
//     let gapIndex = arr.indexOf(gap)
//    if(![-1, i].includes(gapIndex)) {
//      return [i, gapIndex]
//    }
//   }
//   return false
// }
// console.log(fn(arr, num))

// 2.将两个有序数组合并为一个排好序的大数组
// let arr = [1,3,5,7],arr2 = [2,4,6,8]
// function fn(arr, arr2) {
//   let res = []
//   while(arr.length && arr2.length) {
//     res.push(arr[0] <= arr2[0] ? arr.shift() : arr2.shift())
//   }
//   return res = res.concat(arr, arr2)
// }
// console.log(fn(arr, arr2))

// 3.在数组中找到三个不同元素 其中两项的和等于第三项 arr[x] + arr[y] = arr[z] 如果数组中存在返回true 否则返回false
// let arr = [1,2,3,4,5]
// function fn(arr) {
//   arr.sort((a,b)=>a-b)
//   for(let i = 0; i < arr.length; i++) {
//     let cur = arr[i]
//     for(let j = i+1; j < arr.length; j++) {
//       let next = arr[j]
//       let diff = next - cur
//       if(![cur,next].includes(diff) && arr.includes(diff)) {
//         return true
//       }
//     }
//   }
//   return false
// }
// console.log(fn(arr))

// 4.字符串repeat实现
// 原生repeat
// 'ni'.repeat(3); // 'ninini'
// String.prototype.repeatString1 = function (n) {
//   return Array(n + 1).join(this);
// }
// console.log('ni'.repeatString1(3));