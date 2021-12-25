let str = 'abcoefoxyozzopp';

let index = str.indexOf('o');

while (index != -1) {
	console.log(str.indexOf('o'));
	
	index = indexOf('o', index+1);
}

