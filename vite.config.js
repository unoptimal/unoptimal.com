import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite'

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()]
};

export default config;
