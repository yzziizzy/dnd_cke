var weapon_list = {
	{name: 'club',         cost: '1 sp', damage: '1d4 bl', weight: '2 lb.',  category: 'simple', attrs: ['light'], uses: [{what: 'hand', amt: 1}],},
	{name: 'dagger',       cost: '2 gp', damage: '1d4 pi', weight: '1 lb.',  category: 'simple', ranged: true, attrs: ['finesse', 'light', 'thrown'], range: {min: 20, max: 60}, uses: [{what: 'hand', amt: 1}],},
	{name: 'dagger',       cost: '2 gp', damage: '1d4 pi', weight: '1 lb.',  category: 'simple', attrs: ['finesse', 'light', 'thrown'], uses: [{what: 'hand', amt: 1}],},
	{name: 'greatclub',    cost: '2 sp', damage: '1d8 bl', weight: '10 lb.', category: 'simple', attrs: ['twohanded'], uses: [{what: 'hand', amt: 2}],},
	{name: 'handaxe',      cost: '5 gp', damage: '1d6 sh', weight: '2 lb.',  category: 'simple', attrs: ['light', 'thrown'], range: {min: 20, max: 60}, uses: [{what: 'hand', amt: 1}],},
	{name: 'javelin',      cost: '5 sp', damage: '1d6 pi', weight: '2 lb.',  category: 'simple', ranged: true, attrs: ['thrown'], range: {min: 30, max: 120}, uses: [{what: 'hand', amt: 1}],},
	{name: 'javelin',      cost: '5 sp', damage: '1d6 pi', weight: '2 lb.',  category: 'simple', attrs: ['thrown'], uses: [{what: 'hand', amt: 1}],},
	{name: 'light hammer', cost: '2 gp', damage: '1d4 bl', weight: '2 lb.',  category: 'simple', ranged: true, attrs: ['light', 'thrown'], range: {min: 20, max: 60}, uses: [{what: 'hand', amt: 1}],},
	{name: 'light hammer', cost: '2 gp', damage: '1d4 bl', weight: '2 lb.',  category: 'simple', attrs: ['light', 'thrown'], uses: [{what: 'hand', amt: 1}],},
	{name: 'mace',         cost: '5 gp', damage: '1d6 bl', weight: '4 lb.',  category: 'simple', attrs: ['none'], uses: [{what: 'hand', amt: 1}],},
	{name: 'quarterstaff', cost: '2 sp', damage: '1d6 bl', weight: '4 lb.',  category: 'simple', attrs: ['versatile'], uses: [{what: 'hand', amt: 1}],},
	{name: 'quarterstaff', cost: '2 sp', damage: '1d8 bl', weight: '4 lb.',  category: 'simple', attrs: ['versatile'], uses: [{what: 'hand', amt: 2}],},
	{name: 'sickle',       cost: '1 gp', damage: '1d4 sh', weight: '2 lb.',  category: 'simple', attrs: ['light'], uses: [{what: 'hand', amt: 1}],},
	{name: 'spear',        cost: '1 gp', damage: '1d6 pi', weight: '3 lb.',  category: 'simple', ranged: true, attrs: ['thrown', 'versatile'], range: {min: 20, max: 60}, uses: [{what: 'hand', amt: 1}],},
	{name: 'spear',        cost: '1 gp', damage: '1d6 pi', weight: '3 lb.',  category: 'simple', attrs: ['thrown', 'versatile'], uses: [{what: 'hand', amt: 1}],},
	{name: 'spear',        cost: '1 gp', damage: '1d8 pi', weight: '3 lb.',  category: 'simple', attrs: ['thrown', 'versatile'], uses: [{what: 'hand', amt: 2}],},

	{name: 'light crossbow', cost: '25 gp', damage: '1d8 pi', weight: '5 lb.',   category: 'simple', ranged: true, attrs: ['ammunition', 'loading', 'twohanded'], range: {min: 80, max: 320}, uses: [{what: 'hand', amt: 2}],},
	{name: 'dart',           cost: '5 cp',  damage: '1d4 pi', weight: '1/4 lb.', category: 'simple', ranged: true, attrs: ['finesse', 'thrown'], range: {min: 20, max: 60}, uses: [{what: 'hand', amt: 1}],},
	{name: 'dart',           cost: '5 cp',  damage: '1d4 pi', weight: '1/4 lb.', category: 'simple', attrs: ['finesse', 'thrown'], uses: [{what: 'hand', amt: 1}],},
	{name: 'shortbow',       cost: '25 gp', damage: '1d6 pi', weight: '2 lb.',   category: 'simple', ranged: true, attrs: ['ammunition', 'twohanded'], range: {min: 80, max: 320}, , uses: [{what: 'hand', amt: 1}],},
	{name: 'sling',          cost: '1 sp',  damage: '1d4 bl', weight: '0 lb.',   category: 'simple', ranged: true, attrs: ['ammunition'], range: {min: 30, max: 120}, uses: [{what: 'hand', amt: 1}],},

	{name: 'battleaxe',   cost: '10 gp', damage: '1d8 sh',  weight: '4 lb.',  category: 'martial', attrs: ['versatile'], uses: [{what: 'hand', amt: 1}],},
	{name: 'battleaxe',   cost: '10 gp', damage: '1d10 sh', weight: '4 lb.',  category: 'martial', attrs: ['versatile'], uses: [{what: 'hand', amt: 2}],},
	{name: 'flail',       cost: '10 gp', damage: '1d8 bl',  weight: '2 lb.',  category: 'martial', attrs: ['none'], uses: [{what: 'hand', amt: 1}],},
	{name: 'glaive',      cost: '20 gp', damage: '1d10 sh', weight: '6 lb.',  category: 'martial', attrs: ['heavy', 'reach', 'twohanded'], uses: [{what: 'hand', amt: 2}],},
	{name: 'greataxe',    cost: '30 gp', damage: '1d12 sh', weight: '7 lb.',  category: 'martial', attrs: ['heavy', 'twohanded'], uses: [{what: 'hand', amt: 2}],},
	{name: 'greatsword',  cost: '50 gp', damage: '2d6 sh',  weight: '6 lb.',  category: 'martial', attrs: ['heavy', 'twohanded'], uses: [{what: 'hand', amt: 2}],},
	{name: 'halberd',     cost: '20 gp', damage: '1d10 sh', weight: '6 lb.',  category: 'martial', attrs: ['heavy', 'reach', 'twohanded'], uses: [{what: 'hand', amt: 2}],},
	{name: 'lance',       cost: '10 gp', damage: '1d12 pi', weight: '6 lb.',  category: 'martial', attrs: ['reach', 'special'], uses: [{what: 'hand', amt: 1}],},
	{name: 'longsword',   cost: '15 gp', damage: '1d8 sh',  weight: '3 lb.',  category: 'martial', attrs: ['versatile'], uses: [{what: 'hand', amt: 1}],},
	{name: 'longsword',   cost: '15 gp', damage: '1d10 sh', weight: '3 lb.',  category: 'martial', attrs: ['versatile'], uses: [{what: 'hand', amt: 2}],},
	{name: 'maul',        cost: '10 gp', damage: '2d6 bl',  weight: '10 lb.', category: 'martial', attrs: ['heavy', 'twohanded'], uses: [{what: 'hand', amt: 2}],},
	{name: 'morningstar', cost: '15 gp', damage: '1d8 pi',  weight: '4 lb.',  category: 'martial', attrs: ['none'], uses: [{what: 'hand', amt: 1}],},
	{name: 'pike',        cost: '5 gp',  damage: '1d10 pi', weight: '18 lb.', category: 'martial', attrs: ['heavy', 'reach', 'twohanded'], uses: [{what: 'hand', amt: 2}],},
	{name: 'rapier',      cost: '25 gp', damage: '1d8 pi',  weight: '2 lb.',  category: 'martial', attrs: ['finesse'], uses: [{what: 'hand', amt: 1}],},
	{name: 'scimitar',    cost: '25 gp', damage: '1d6 sh',  weight: '3 lb.',  category: 'martial', attrs: ['finesse' 'light'], uses: [{what: 'hand', amt: 1}],},
	{name: 'shortsword',  cost: '10 gp', damage: '1d6 pi',  weight: '2 lb.',  category: 'martial', attrs: ['finesse', 'light'], uses: [{what: 'hand', amt: 1}],},
	{name: 'trident',     cost: '5 gp',  damage: '1d6 pi',  weight: '4 lb.',  category: 'martial', ranged: true, attrs: ['thrown', 'versatile'], range: {min: 20, max: 60}, uses: [{what: 'hand', amt: 1}],},
	{name: 'trident',     cost: '5 gp',  damage: '1d6 pi',  weight: '4 lb.',  category: 'martial', attrs: ['thrown', 'versatile'], uses: [{what: 'hand', amt: 1}],},
	{name: 'trident',     cost: '5 gp',  damage: '1d8 pi',  weight: '4 lb.',  category: 'martial', attrs: ['thrown', 'versatile'], uses: [{what: 'hand', amt: 2}],},
	{name: 'war pick',    cost: '5 gp',  damage: '1d8 pi',  weight: '2 lb.',  category: 'martial', attrs: ['none'], uses: [{what: 'hand', amt: 1}],},
	{name: 'warhammer',   cost: '15 gp', damage: '1d8 bl',  weight: '2 lb.',  category: 'martial', attrs: ['versatile'], uses: [{what: 'hand', amt: 1}],},
	{name: 'warhammer',   cost: '15 gp', damage: '1d10 bl', weight: '2 lb.',  category: 'martial', attrs: ['versatile'], uses: [{what: 'hand', amt: 2}],},
	{name: 'whip',        cost: '2 gp',  damage: '1d4 sh',  weight: '3 lb.',  category: 'martial', attrs: ['finesse', 'reach'], uses: [{what: 'hand', amt: 1}],},

	{name: 'blowgun',        cost: '10 gp', damage: '1 pi',    weight: '1 lb.',  category: 'martial', ranged: true, attrs: ['ammunition', 'loading'], range: {min: 25, max: 100}, uses: [{what: 'hand', amt: 1}],},
	{name: 'hand crossbow',  cost: '75 gp', damage: '1d6 pi',  weight: '3 lb.',  category: 'martial', ranged: true, attrs: ['ammunition', 'light', 'loading'], range: {min: 30, max: 120}, uses: [{what: 'hand', amt: 1}],},
	{name: 'heavy crossbow', cost: '50 gp', damage: '1d10 pi', weight: '18 lb.', category: 'martial', ranged: true, attrs: ['ammunition', 'heavy', 'loading', 'twohanded'], range: {min: 100, max: 400}, uses: [{what: 'hand', amt: 2}],},
	{name: 'longbow',        cost: '50 gp', damage: '1d8 pi',  weight: '2 lb.',  category: 'martial', ranged: true, attrs: ['ammunition', 'heavy', 'twohanded'], range: {min: 150, max: 600}, uses: [{what: 'hand', amt: 2}],},
	{name: 'net',            cost: '1 gp',  damage: '0d4 fo',  weight: '3 lb.',  category: 'martial', ranged: true, attrs: ['special', 'thrown'], range: {min: 5, max: 15}, uses: [{what: 'hand', amt: 1}],},
};