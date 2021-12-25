let str = 'abcoefoxyozzopp';

let index = str.indexOf('o');  // 查找到第一个 o 的位置

while (index !== -1) {
	console.log(index);
	
	index = str.indexOf('o', index + 1);
}