let str = 'abcoefoxyozzopp';

let index = str.indexOf('o');

while (index !== -1) {
	console.log(index);
	
	index = str.indexOf('o', index + 1);
}