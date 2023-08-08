import type { Record } from 'pocketbase';

export interface Tree {
	name: string;
	href: string;
	collectionId: string;
	collectionName: string;
	expand: {
		[key: string]: Record | Record[];
	};
	id: string;
	created: string;
	updated: string;
}
