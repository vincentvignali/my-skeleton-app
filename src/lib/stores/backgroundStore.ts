import { writable, type Writable } from 'svelte/store';

export const backgroundReversed: Writable<boolean> = writable(false);
