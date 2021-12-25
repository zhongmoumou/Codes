let str = 'helloworld';

console.log(str.indexOf('l'));  // 输出：2（索引号），从前往后查找，找到第一个为止

console.log(str.indexOf('o', 5));  // 输出：6，从索引号1开始查找

console.log(str.indexOf('k'));  // 输出：-1（没有该元素返回 -1）