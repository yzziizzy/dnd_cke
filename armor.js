var armor_list = {
	{name: 'padded', category: 'light', cost: '5 gp', ac: {fixed: 11, dex_max: 99999},effects: [{what: 'disadvantage', on: 'stealth'}], weight: '8 lb.'},
	{name: 'leather', category: 'light', cost: '10 gp', ac: {fixed: 11, dex_max: 99999}, weight: '10 lb.'},
	{name: 'studded leather', category: 'light', cost: '45 gp', ac: {fixed: 12, dex_max: 99999}, weight: '13 lb.'},

	{name: 'hide', category: 'medium', cost: '10 gp', ac: {fixed: 12, dex_max: 2}, weight: '12 lb.'},
	{name: 'chain shirt', category: 'medium', cost: '50 gp', ac: {fixed: 13, dex_max: 2}, weight: '20 lb.'},
	{name: 'scale mail', category: 'medium', cost: '50 gp', ac: {fixed: 14, dex_max: 2}, effects: [{what: 'disadvantage', on: 'stealth'}], weight: '45 lb.'},
	{name: 'breastplate', category: 'medium', cost: '400 gp', ac: {fixed: 14, dex_max: 2}, weight: '20 lb.'},
	{name: 'half plate', category: 'medium', cost: '750 gp', ac: {fixed: 15, dex_max: 2}, effects: [{what: 'disadvantage', on: 'stealth'}], weight: '40 lb.'},

	{name: 'ring mail', category: 'heavy', cost: '30 gp', ac: 14, effects: [{what: 'disadvantage', on: 'stealth'}], weight: '40 lb.'},
	{name: 'chain mail', category: 'heavy',  cost: '75 gp', ac: 16, requires: [{what: 'str', min: 13}], effects: [{what: 'disadvantage', on: 'stealth'}], weight: '55 lb.'},
	{name: 'splint', category: 'heavy', cost: '200 gp', ac: 17, requires: [{what: 'str', min: 15}], effects: [{what: 'disadvantage', on: 'stealth'}], weight: '60 lb.'},
	{name: 'full plate', category: 'heavy', cost: '1500 gp', ac: 18,  requires: [{what: 'str', min: 15}], effects: [{what: 'disadvantage', on: 'stealth'}], weight: '65 lb.'},

	{name: 'shield', cost: '10 gp', ac: '+2', weight: '6 lb.'},
};
