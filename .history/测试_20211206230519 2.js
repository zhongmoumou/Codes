let str = 'coagoosogsodfoadoasod';

while (str.indexOf('o') !== -1) {
	str = str.replace('o', '*');
}

console.log(str);  // 输出：