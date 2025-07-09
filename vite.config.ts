import { defineConfig } from 'vite';
import aurelia from '@aurelia/vite-plugin';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
    base: '/d2r-reimagined-website/',
    server: {
        port: 9500,
        strictPort: true,
    },
    publicDir: 'static',
    build: {
        minify: false,
        target: 'es2022',
        emptyOutDir: false,
        rollupOptions: {
            plugins: [],
        },
        outDir: 'docs',
    },
    esbuild: {
        target: 'es2022',
    },
    plugins: [
        aurelia({ enableConventions: true, hmr: true }),
        viteStaticCopy({
            targets: [
                {
                    src: 'src/assets',
                    dest: ''
                },
                {
                    src: 'talonrage',
                    dest: ''
                }
            ]
        })
    ],
});
