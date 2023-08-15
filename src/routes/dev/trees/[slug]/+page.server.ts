import { pb } from '$lib/server/pocketBase.js';
import type { Tree } from '$lib/types/treeType.js';

export const load = async ({ params }) => {
	const tree: Tree = await pb.collection('trees').getOne(params.slug);
	return { tree: structuredClone(tree) };
};
