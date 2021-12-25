let str = 'abcoefoxyozzopp';

let index = str.indexOf('o');  // 查找到第一个 o 的位置：3

while (index !== -1) {  // 当查找的元素不为 0，则循环查找
	console.log(index);
	
	index = str.indexOf('o', index + 1);
}