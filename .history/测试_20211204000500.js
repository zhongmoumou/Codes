let str = 'abcoefoxyozzopp';

let index = str.indexOf('o');

while (index != -1) {
	alert(str.indexOf('o'));
	
	index = str.indexOf('o', index + 1);
}

