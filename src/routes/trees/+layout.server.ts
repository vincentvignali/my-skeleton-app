import { trees } from './data';

export const load = () => {
	const layoutData = { totalLength: trees.length, today: new Date() };
	console.log('LayoutData has Sendt : ', layoutData);
	return layoutData;
};
