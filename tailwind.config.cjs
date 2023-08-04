import { join } from 'path';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import skeleton from '@skeletonlabs/skeleton/tailwind/skeleton.cjs';

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {
			backgroundImage: () => ({
				'blob-1': "url('blobs/blob-haikei-reversed.svg')",
				'blob-1-reversed': "url('blobs/blob-haikei-reversed.svg')"
			}),
			fontFamily: {
				schoolBell: ['Schoolbell', 'sans-serif']
			}
		}
	},
	plugins: [forms, typography, ...skeleton()]
};
