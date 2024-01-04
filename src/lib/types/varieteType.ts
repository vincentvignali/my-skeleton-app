import type { Record } from 'pocketbase';
import type { Espece } from './especeType';

export interface Variete {
	id: string;
	name: string;
	expand: {
		espece: Espece;
	};
	href: string;
	collectionId: string;
	collectionName: string;
	created: string;
	updated: string;
}
