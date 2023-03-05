import adapter from '@sveltejs/adapter-static'
import preprocess from 'svelte-preprocess';
import {mdsvex} from 'mdsvex';

const config = {

	kit: {
		adapter: adapter(),
		paths: {
			base: '',
			assets: ''
		  },
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