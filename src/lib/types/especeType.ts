import type { Record } from 'pocketbase';

export interface Espece {
	name: string;
	href: string;
	collectionId: string;
	collectionName: string;
	expand: {
		[key: string]: Record | Record[];
	};
	id: string;
	picture: string;
	created: string;
	updated: string;
}
