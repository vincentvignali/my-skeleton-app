import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	console.log('Hook Server Triggered');
	return resolve(event);
};
