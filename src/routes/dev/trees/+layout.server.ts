import { pb } from '$lib/server/pocketBase';
import type { Tree } from '$lib/types/treeType';

export const load = async () => {
	const treeList: Tree[] = await pb.collection('trees').getFullList();
	const layoutData = {
		allTrees: structuredClone(treeList),
		today: new Date()
	};
	return layoutData;
};
