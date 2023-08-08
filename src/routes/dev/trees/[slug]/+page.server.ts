import { pb } from '$lib/server/pocketBase.js';

interface Tree {
	name: string;
}

export const load = async ({ params }) => {
	console.log(params.slug);
	const tree: Tree = await pb.collection('trees').getOne(params.slug);
	return { tree: structuredClone(tree) };
};
