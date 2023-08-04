import PocketBase from 'pocketbase';

const url = 'https://pocket-piton.pockethost.io';

export const pb = new PocketBase(url);
await pb.admins.authWithPassword('vincent.vignali@hotmail.fr', 'Ythppu123!');

export const createRecord = async () => {
	await pb.collection('trees').create({
		name: 'Fake tree created'
	});
};
export const getAllRecords = async () => {
	return await pb.collection('trees').getFullList();
};
