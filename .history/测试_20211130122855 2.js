function Obj(name, type, blood) {
	this.name = name;
	this.type = type;
	this.blood = blood;
	this.attack = function(attack) {
		console.log('攻击：'+ attack);
	}
}

let hero1 = new Obj('廉颇', '力量型', '500血量');
console.log(hero1.name);
console.log(hero1.type);
console.log(hero1.blood);
hero1.attack('近战');

let hero2 = new Obj('后裔, '射手型', '100血量');
console.log(hero1.name);
console.log(hero1.type);
console.log(hero1.blood);
hero1.attack('近战');