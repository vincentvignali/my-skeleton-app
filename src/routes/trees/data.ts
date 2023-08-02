enum Season {
	Spring = 'Ete',
	Automn = 'Autonme',
	Winter = 'Hiver',
	Fall = 'Printemps'
}

export const trees = [
	{
		slug: '1',
		name: 'Pommier',
		averageSize: 3.5,
		seasonToCollect: Season.Fall,
		seasonToPlant: Season.Automn
	},
	{
		slug: '2',
		name: 'Poirier',
		averageSize: 2.0,
		seasonToCollect: Season.Spring,
		seasonToPlant: Season.Automn
	},
	{
		slug: '3',
		name: 'Bananier',
		averageSize: 1.25,
		seasonToCollect: Season.Fall,
		seasonToPlant: Season.Winter
	}
];
