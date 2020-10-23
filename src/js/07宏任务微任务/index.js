/**
 * 而宏任务一般是：包括整体代码script，setTimeout，setInterval、setImmediate。
 * 微任务：原生Promise(有些实现的promise将then方法放到了宏任务中)、process.nextTick、
 * 顺序:先执行宏任务-->看有没有可执行的微任务,有的话执行微任务-->在执行宏任务
 * 名词:宏任务event Queue,微任务event Queue
 */
console.log('1');

setTimeout(function() {
    console.log('2');
    process.nextTick(function() {
        console.log('3');
    })
    new Promise(function(resolve) {
        console.log('4');
        resolve();
    }).then(function() {
        console.log('5')
    })
})
process.nextTick(function() {
    console.log('6');
})
new Promise(function(resolve) {
    console.log('7');
    resolve();
}).then(function() {
    console.log('8')
})

setTimeout(function() {
    console.log('9');
    process.nextTick(function() {
        console.log('10');
    })
    new Promise(function(resolve) {
        console.log('11');
        resolve();
    }).then(function() {
        console.log('12')
    })
})




















// 1,7,6,8,2,4,3,5,9,11,10,12 -->正确