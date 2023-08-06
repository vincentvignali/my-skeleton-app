import type { Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { pb } from '$lib/server/pocketBase';

export const load: PageServerLoad = async () => {
	const items = await pb.collection('trees').getFullList();
	return { items: structuredClone(items) };
};

export const actions: Actions = {
	create: async () => {
		await pb.collection('trees').create({
			name: 'Fake tree created'
		});
	},

	delete: async ({ request }) => {
		const { id } = Object.fromEntries(await request.formData());
		await pb.collection('trees').delete(id.toString());
	}
};
