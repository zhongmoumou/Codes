let str = {
	a: 1,
	b: 1,
	c: 1,
	e: 1,
	f: 1,
	o: 4,
	p: 2,
	x: 1,
	y: 1,
	z: 2
}

let max = 0;
let maxChar = '';

for (key in obj) {
	if (obj[key] > max) {
		max = obj[key];
		maxChar = key;
	}
}

console.log(maxChar);
console.log(max);