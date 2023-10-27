import { pb } from '$lib/server/pocketBase';
import type { Tree } from '$lib/types/treeType';

export const load = async () => {
	const varieteList: Tree[] = await pb.collection('varietes').getFullList();
	const layoutData = {
		allVarietes: structuredClone(varieteList),
		today: new Date()
	};

	console.log(varieteList);
	return layoutData;
};
