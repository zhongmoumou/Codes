// 举例：
let date = new Date();

// console.log(date.getFullYear());  // 输出：2021（表示今年是2021年）
// console.log(date.getMonth());  // 输出：11（表示今天是12月）
// console.log(date.getDate());  // 输出：1（表示今天是1号）
// console.log(date.getDay());  // 输出：3（表示今天是星期三）
// console.log(date.getHours());  // 输出：23（表示此时是23点）
// console.log(date.getMinutes());  // 输出：40（表示此时是40分）
// console.log(date.getSeconds());  // 输出：（表示此时是29秒）


let year = date.getFullYear();
let month = date.getMonth() + 1;
let dates = date.getDate();

let week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
let day = date.getDay();

console.log('今天是' + year + '年' + month + '月' + dates + '日' + '星期' + ); 