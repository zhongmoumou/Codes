let arr = ['blue', 'yellow', 'blue'];

console.log(arr.lastIndexOf('blue'));  // 输出：0（索引号），从后往前查找，找到第一个为止

console.log(arr.lastIndexOf('blue', 2));  // 输出：0（索引号），从后往前查找，找到第一个为止

console.log(arr.lastIndexOf('pink'));  // 输出：-1（没有该元素返回 -1）