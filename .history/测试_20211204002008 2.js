let str = 'abcoefoxyozzopp';

let index = str.indexOf('o');  // 查找到第一个 o 的位置：3
let num = 0;  // 设置初始查找元素的次数为 0

while (index !== -1) {  // 当查找的元素存在时（即不为 -1），则继续循环查找
	console.log('"o" 出现的位置为（索引）：' + index);  
  // 每找到一次需要查找的元素时，打印一下该位置
	
  num++;  // 每找到一次需要查找的元素时，记录次数，
	index = str.indexOf('o', index + 1);  
  // 查找到元素之后，需要继续向后查找的话，则需要把下一次查找的位置设定为此次查找到的位置 +1，那么下次查找就会从 +1 处开始
}

console.log('"o" 出现的总次数为：' + num);