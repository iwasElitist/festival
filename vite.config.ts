import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import viteCompression from 'vite-plugin-compression'

export default defineConfig({
    build: {
        minify: 'terser'
    },
	plugins: [
        sveltekit(),
        viteCompression()
    ]
});
