import { pb } from '$lib/server/pocketBase';
import type { Espece } from '$lib/types/especeType';
import type { Variete } from '$lib/types/varieteType';

export const load = async () => {
	const fetchedEspeces: Espece[] = await pb.collection('espece').getFullList();
	const fetchedVarietes: Variete[] = await pb
		.collection('variete')
		.getFullList({ expand: 'espece' });
	return {
		especeList: structuredClone(
			fetchedEspeces.map((espece) => {
				return {
					...espece,
					picture: pb.files.getUrl(espece, espece.picture, { thumb: '400x175' })
				};
			})
		),
		varieteList: structuredClone(fetchedVarietes)
	};
};
