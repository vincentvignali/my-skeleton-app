import { POCKETBASE } from '$env/static/private';
import PocketBase from 'pocketbase';

export const pb = new PocketBase(POCKETBASE);
await pb.admins.authWithPassword('vincent.vignali@hotmail.fr', 'Ythppu123!');
