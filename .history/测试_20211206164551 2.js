/* 
要求：
查找字符串 'abcoefoxyozzopp' 中出现最多的字符，并统计其次数；

核心算法：
利用 charAt(index) 遍历字符串 'abcoefoxyozzopp’ ；
把遍历出来的每个字符串赋值给一个对象（strs）；
把每个字符都存储给对象，如果对象没有该属性，就为 1，如果存在了就 +1；
遍历对象，得到最大值和该字符； */

let str = 'abcoefoxyozzopp';

let obj = {};

for (let i = 0; i < str.length; i++) {  // 输出：
    let strs = str.charAt(i);  // 输出：

    if (obj[strs]) {
        obj[strs]++;   // 输出：
    } else {
        obj[strs] = 1;  // 输出：
    }
}

let max = 0;  // 输出：
let maxChar = '';  // 输出：

for (key in obj) {
    if (obj[key] > max) {  // 输出：
        max = obj[key];
        maxChar = key;
    }
}
console.log('出现最多的字符是：' + maxChar);  // 输出：出现最多的字符是：o
console.log('出现最多的字符的次数是：' + max);  // 输出：出现最多的字符的次数是：4
