// for (var i = 0; i < 5; i++) {
//   setTimeout(function() {
//       console.log(new Date, i);
//   }, 1000);
// }


// console.log(new Date, i);
for(var i = 0; i< 5; i++) {
  ((i)=>{
    setTimeout(() => {
      console.log(new Date, i)
    }, 1000);
  })(i)
  
}
console.log(new Date, i)