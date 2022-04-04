import { defineConfig } from "vite";
import ViteRestart from 'vite-plugin-restart';

export default defineConfig(({ command }) => ({
  base: command === "serve" ? "" : "/dist/",
  build: {
    manifest: true,
    outDir: "web/dist/",
    rollupOptions: {
      input: {
        app: "assets/app.js",
      },
    },
  },
  plugins: [
    ViteRestart({
      reload: [
        './templates/**/*',
      ],
    }),
  ],
}));
