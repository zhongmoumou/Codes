function Person(name) {
	this.name = name;
}

function fn(x) {
	console.log(x.name);  // 输出：hello

	x.name = 'world';

	console.log(x.name);  // 输出：world
}

var p = new Person('hello')

console.log(p.name);  // 输出：hello

fn(p);

// console.log(p.name);  // 输出：world