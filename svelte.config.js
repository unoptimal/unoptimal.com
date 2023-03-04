import adapter from '@sveltejs/adapter-static'
import preprocess from 'svelte-preprocess';
import {mdsvex} from 'mdsvex';

const config = {

	kit: {
		adapter: adapter()
		},
	
	extensions: ['.svelte', '.md'],

	preprocess: [
		preprocess(),
		mdsvex({
			extensions: ['.md']
		})
	]


	};

export default config;