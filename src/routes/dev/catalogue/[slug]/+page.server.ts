import { pb } from '$lib/server/pocketBase';
import type { Variete } from '$lib/types/varieteType';
import type { PageServerLoad } from './$types';
export const load: PageServerLoad = async ({ params }) => {
	const varieteEntity: Variete = await pb.collection('variete').getOne(params.slug);
	return { entity: structuredClone(varieteEntity) };
};
