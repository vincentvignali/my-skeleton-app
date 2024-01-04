import { pb } from '$lib/server/pocketBase';
import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
	const result: any[] = await pb.collection('espece').getFullList();
	return new Response(JSON.stringify(result));
};
