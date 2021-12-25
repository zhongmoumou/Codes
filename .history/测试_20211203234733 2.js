let str = 'helloworld';

console.log(str.lastIndexOf('l'));  // 输出：8（索引号），从后往前查找，找到第一个为止

console.log(str.lastIndexOf('l', 7));  // 输出：3（索引号），从后往前查找，找到第一个为止

console.log(str.lastIndexOf('k'));  // 输出：-1（没有该元素返回 -1）