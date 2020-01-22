
var item_types = ['Potion', 'Ring', 'Rod', 'Scroll', 'Staff', 'Wand', 'Wondrous item'];

/*
Armor (chain shirt)
Armor (light
Armor (medium or heavy
Armor (plate)
Armor (scale mail)
Armor (shield)
Armor (studded leather)

Weapon (any)
Weapon (any ammunition)
Weapon (any axe)
Weapon (any axe or sword)
Weapon (any sword)
Weapon (any sword that deals slashing damage)
Weapon (arrow)
Weapon (dagger)
Weapon (javelin)
Weapon (longbow)
Weapon (longsword)
Weapon (mace)
Weapon (maul)
Weapon (scimitar)
Weapon (trident)
Weapon (warhammer)


any
any ammunition
any axe
any axe or sword
any sword
any sword that deals slashing damage
arrow
dagger
javelin
longbow
longsword
mace
maul
scimitar
trident
warhammer


*/

var raw = require('./items_raw.js');
var items = [];

for(i in raw) {
// 	console.log(i + ':');
	if(raw[i].ignore === true) continue; // irregular or special items
	
	for(j in raw[i]) {
		var jj = raw[i][j];
		if(j != 'content') continue;
		
		
		for(k in jj) { // loop the content
			var kk = jj[k]; 
			
			if(kk[0] == '*' && kk[1] != '*') {
// 				console.log(i + ': ' + kk)
// 				if(m) console.log(i + ': ' + m[1] + ' | ' + m[2]);
// 				if(m) console.log( m[1] );
				
				var item = {
					name: i,
					magic_item: true,
					requires_attunement: false,
				};
				
				var m = kk.match(/^\*Weapon \(([^)]*)\)/);
				if(m) {
// 					console.log(m[1]);
					
					continue;
				}
				
				var m = kk.match(/^\*Armor \(([^)]*)\)/);
				if(m) {
// 					console.log(i + ': ' + m[1]);
					
					continue;
				}
				
				var m = kk.match(/^\*([^,]*), ([^*]*)\*$/);
// 				if(!m) console.log(i + ': ' + kk)
				
				if(-1 == item_types.indexOf(m[1])) {
					console.log('empty: '+ m[1])
				}
				
				item.category = m[1];
				
				var m2 = m[2].match(/^(rare|very rare|uncommon|common|legendary)\s*(.*)$/);
				
				item.rarity = m2[1];
				
				if(m2[2] != '') {
					if(m2[2] ==  "(requires attunement)") {
						item.requires_attunement = true;
					}
					else {
						var m3 = m2[2].match(/\(requires attunement by a ([^)]*)\)/);
						item.requires_attunement = m3[1];
					}
				}
				
				item.content = jj.slice(1);
				
				items.push(item);
				
			}
			
		}
		
		
	}
}

for(i in raw) {
	var ii = raw[i];
	if(ii.ignore !==  true) continue;
	
// 	console.log(i);
}


// return;



console.log("var item_list = {");

for(var n of items) {
	var atn = '[atn: none]';
	if(n.requires_attunement === true) {
		atn = '[atn: any]';
	}
	else if(n.requires_attunement !== false) {
		atn = '[atn: '+n.requires_attunement+']';
	}
	
// 	console.log(n.name +'; ' +n.category+  ' (' + n.rarity + ') '+ atn + ': '); 
	
	console.log('\t"' +n.name+ '": '+JSON.stringify(n) + ',');
}

console.log("};");
console.log("if(module && module.exports) module.exports = item_list;");
