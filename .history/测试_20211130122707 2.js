function Obj(name, type, blood) {
	this.name = name;
	this.type = type;
	this.blood = blood;
	this.attack = function(a) {
		console.log(a);
	}
}

let hero1 = new Obj('廉颇', '力量型', '500血量');
console.log(hero1);
hero1.attack('近战');

let hero2 = new Obj();