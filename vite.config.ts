import tailwindcss from '@tailwindcss/vite';
import { sveltekit, sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path';
import svelteSVG from '@hazycora/vite-plugin-svelte-svg';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit(),
		svelteSVG({
			svgoConfig: {}, // See https://github.com/svg/svgo#configuration
			requireSuffix: true // Set false to accept '.svg' without the '?component'
		})
	],
	resolve: { alias: { $lib: path.resolve('./src/lib') } }
});
