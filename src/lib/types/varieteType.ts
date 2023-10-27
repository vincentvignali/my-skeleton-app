import type { Record } from 'pocketbase';

export interface Variete {
	id: string;
	name: string;
	expand: {
		[key: string]: Record | Record[];
	};
	href: string;
	collectionId: string;
	collectionName: string;
	created: string;
	updated: string;
}
