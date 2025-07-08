// @ts-ignore: Node.js modules are available in Vite config
import { defineConfig } from "vite";
// @ts-ignore: Node.js modules are available in Vite config
import react from "@vitejs/plugin-react-swc";
// @ts-ignore: Node.js modules are available in Vite config
import path from "path";
// @ts-ignore: Node.js modules are available in Vite config
import { fileURLToPath } from 'url';

// https://vitejs.dev/config/
export default defineConfig(({ mode }: { mode: string }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      // @ts-ignore: import.meta.url is available in ESM
      "@": path.resolve(path.dirname(fileURLToPath(import.meta.url)), "./src"),
    },
  },
}));
