
if(module) {
	var class_list = require('./classes.js');
}


function abilityToMod(ab) {
	return Math.floor((Math.max(ab, 0) - 10) / 2);
}
/*

var points = { 8: 0, 9: 1, 10: 2, 11: 3, 12: 4, 13: 5, 14: 7, 15: 9, };
function p(a) { return points[a] }
var o = {};
for(var a = 8; a <= 15; a++) {
for(var b = 8; b <= 15; b++) {
for(var c = 8; c <= 15; c++) {
for(var d = 8; d <= 15; d++) {
for(var e = 8; e <= 15; e++) {
for(var f = 8; f <= 15; f++) {
	
	var sum = p(a) + p(b) + p(c) + p(d) + p(e) + p(f); 
	if(sum == 27) {
		var x = [a,b,c,d,e,f];
		o[x.join('-')] = x;
	}
} } } } } }
for(var z in o) {
	console.log(JSON.stringify(o[z])+',');
}
*/

function has_prof_for_armor(prof, armor) {
	if(!(prof instanceof Array)) return false;
	
	for(var p of prof) {
		if(p == 'heavy armor' && armor.category == 'heavy') return true;
		if(p == 'medium armor' && armor.category == 'medium') return true;
		if(p == 'light armor' && armor.category == 'light') return true;
		if(p == armor.name) return true;
	}
	
	return false;
}



function get_armor_for_proficiencies(prof) {
	var out = {};
	
	for(var i in prof) {
		var p = prof[i];
		if(p == 'heavy armor') {
			for(var j in armor_list) {
				if(armor_list[j].category == "heavy") out[j] = armor_list[j];
			}
		}
		else if(p == 'medium armor') {
			for(var j in armor_list) {
				if(armor_list[j].category == "medium") out[j] = armor_list[j];
			}
		}
		else if(p == 'light armor') {
			for(var j in armor_list) {
				if(armor_list[j].category == "light") out[j] = armor_list[j];
			}
		}
		else {
			out[p] = armor_list[p];
		}
	}
	
	return out;
}




function Player(class_name, moral_alignment, practical_alignment) {
	
	this.moral_alignment = moral_alignment; // good, neutral, evil
	this.practical_alignment = practical_alignment; // lawful, neutral, chaotic
	this.class_name = class_name;
	this.class_subname = '';
	this.class_data = class_list[class_name];
	this.class_details = {};
	
	this.spell_attack = 0;
	this.spell_save = 0;
	this.level = 0;
	
	this.proficiency = {
		armor: {},
		weapon: {},
		tool: {},
	};
	
	this.abilities = {
		str: 0,
		dex: 0,
		con: 0,
		int: 0,
		wis: 0,
		cha: 0,
	};
	this.saving_throws = {
		str: 0,
		dex: 0,
		con: 0,
		int: 0,
		wis: 0,
		cha: 0,
	};
	
	
	this.items = {};
	this.attunements = 0;
	
	return this;
}


Player.prototype.setAbilities = function(ab) {
	this.abilities = {
		str: ab[0],
		dex: ab[1],
		con: ab[2],
		int: ab[3],
		wis: ab[4],
		cha: ab[5],
	};
}

Player.prototype.damage_with_weapon = function(w, hands) {
	var [dice, t] = w.damage.split(' ');
	var [n, d] = dice.split('d');
	
	var is_versatile = w.attrs.indexOf('versatile') !== -1;
	var is_finesse = w.attrs.indexOf('finesse') !== -1;
	
	return {
		dice: [{n: n, d: d}],
		fixed: this.abilities.str,
		type: t,
		max: n * d + this.abilities.str,
	};
}

Player.prototype.is_proficient_with_weapon = function(item) {
	
}

Player.prototype.can_attune_item = function(item) {
	if(item.requires_attunement === false) return true;
	
	if(item.requires_attunement === true) {
		if(this.attunements < 3) return true;
	}
	
// 	for(var i in item.requires_attunement) {
// 		
// 	}
	
}



Player.prototype.test = function(test) {
	if(typeof test.prop == 'string') {
		return this[test.prop] == test.val;
	}
	
	// ability scores
	if(typeof test.ability == 'string') {
		if(test.min) {
			if(this.abilities[test.ability] < test.min) return false;
		}
		if(test.max) {
			if(this.abilities[test.ability] > test.max) return false;
		}
		if(test.eq) {
			if(this.abilities[test.ability] != test.eq) return false;
		}
		
		return true;
	}
	
	// class
	if(typeof test.class_name == 'string') {
		if(this.class_name != test.class_name) return false;
		if(test.sub && this.class_subname != test.sub) return false;
		
		return true;
	}
	
	// proficiency
	if(typeof test.prof == 'string') {
		var x = test.prof.split(":");
		if(this.proficiency[x[0]][x[1]] === true) return true;
		return false;
	}
	
	
	console.log("unknown test", test);
	
	return false;
}




function parseCoinString(a) {
	var x = a.split(' ');
	
	var c = 0;
	var s = 0;
	var g = 0;
	var p = 0;
	
	if(x[1] == 'cp') c += x[0];
	if(x[1] == 'sp') s += x[0];
	if(x[1] == 'gp') g += x[0];
	if(x[1] == 'pp') p += x[0];
	
	// fuck electrum
	if(x[1] == 'ep') s += x[0] * 5;
	
	return {c: c, s: s, g: g, p: p, total: c + s*10 + g*100 + p*1000};
}

function mulCoins(a, b) {
	var num, coin;
	if(typeof b == 'object') {
		num = a|0;
		coin = b;
	}
	else {
		num = b|0;
		coin = a;
	}
	
	return {
		c: coin.c * num,
		s: coin.s * num,
		g: coin.g * num,
		p: coin.p * num,
		total: coin.total * num,
	};
}


function addCoins(a, b) {
	if(typeof a == 'string') a = parseCoinString(a);
	if(typeof b == 'string') b = parseCoinString(b);
	
	return {
		c: a.c + b.c,
		s: a.s + b.s,
		g: a.g + b.g,
		p: a.p + b.p,
		total: a.total + b.total,
	};
}

function minimizeCoins(a, no_platinum) {
	// TODO: handle fractionals or negatives 
	
	if(Math.log10(a.c) > 1) {
		a.s += Math.floor(a.c / 10);
		a.c = a.c % 10;
	}
	if(Math.log10(a.s) > 1) {
		a.g += Math.floor(a.s / 10);
		a.s = a.s % 10;
	}
	if(no_platinum !== true) {
		if(Math.log10(a.g) > 1) {
			a.p += Math.floor(a.g / 10);
			a.g = a.g % 10;
		}
	}
	
	// total does not change
	
	return a;
}

function newCoins(c,s,g,p) {
	return {c: c, s: s, g: g, p: p, total: c + s*10 + g*100 + p*1000};
}

function printCoins(a) {
	var s = [];
	if(a.p > 0) s.push(a.p + ' pp');
	if(a.g > 0) s.push(a.g + ' gp');
	if(a.s > 0) s.push(a.s + ' sp');
	if(a.c > 0) s.push(a.c + ' cp');

	return s.join(', ');
}









if(module && module.exports) {
	module.exports = {
		Player: Player,
	}
}




