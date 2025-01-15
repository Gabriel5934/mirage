import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		fontFamily: {
			display: ['Fira Sans', 'serif']
		},
		extend: {}
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: ['light']
	}
} satisfies Config;
