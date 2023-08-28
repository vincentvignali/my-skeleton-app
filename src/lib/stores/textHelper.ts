import { writable, type Writable } from 'svelte/store';
interface TextHelper {
	active: boolean;
	content: string;
	icon: string;
}

export const currentTextHelper: Writable<TextHelper> = writable({
	active: false,
	content: 'Découvrez le Piton du déhors.',
	icon: ''
});
