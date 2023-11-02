import { pb } from '$lib/server/pocketBase';
import type { Tree } from '$lib/types/treeType';
import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
	console.log('call route racine');
	const result: Tree[] = await pb.collection('trees').getFullList();
	return new Response(JSON.stringify(result));
};
