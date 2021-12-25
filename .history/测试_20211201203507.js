function Obj(name, type, blood) {
	this.name = name;
	this.type = type;
	this.blood = blood;
	this.attack = function(attack) {
		console.log('攻击：'+ attack);
	}
}

let obj = {
	name: 'coco',
	age: 18,
	skill: function() {
		console.log('play baskdetball');
	}
}

for (key in obj) {
	console.log(key);  // 输入的是变量 key，则得到对象 obj 的属性
	
	console.log(obj[key]);  // 输入的是对象[变量]，得到的是对象 obj 的属性值
}