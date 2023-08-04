import { trees } from '../data.js';

export const load = ({ params }) => {
	const tree = trees.find((tree) => tree.slug === params.slug);
	return tree;
};
