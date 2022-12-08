import {defineConfig} from "vite";
import ViteRestart from 'vite-plugin-restart';
import svgLoader from 'vite-svg-loader';
import critical from 'rollup-plugin-critical';
import 'dotenv/config';

const BASE_URL = process.env.PRIMARY_SITE_URL;

export default defineConfig(({command}) => ({
    base: command === "serve" ? "" : "/dist/",
    server: {
        origin: 'http://localhost:8080',
        port: 8080,
    },
    build: {
        manifest: true,
        outDir: "web/dist/",
        rollupOptions: {
            input: {
                app: "assets/app.js",
            },
            plugins: [
                critical({
                    criticalUrl: BASE_URL,
                    criticalBase: './web/dist/critical-css',
                    criticalPages: [
                        {uri: '', template: 'landing/index'},
                    ],
                    criticalConfig: {
                        width: 1400,
                        height: 1000,
                    },
                }),
            ],
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData:
                    `@import "./assets/scss/variables";
                     @import "./assets/scss/breakpoints";`
            }
        }
    },
    plugins: [
        svgLoader(),
        ViteRestart({
            reload: [
                './templates/**/*',
            ],
        }),
    ],
}));
