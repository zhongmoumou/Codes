let str = 'abcoefoxyozzopp';

let index = str.indexOf('o');  // 查找到第一个 o 的位置：3

while (index !== -1) {  // 当
	console.log(index);
	
	index = str.indexOf('o', index + 1);
}