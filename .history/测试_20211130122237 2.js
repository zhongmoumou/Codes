function Obj(name, type, blood) {
	this.name = name;
	this.type = type;
	this.blood = blood;
	this.attack = function(attack) {
		console.log(attack);
	}
}

let hero1 = new Obj('廉颇', '力量型', '500血量');
let hero2 = new Obj();