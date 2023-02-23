const { defineConfig } = require("vite");
const reactPlugin = require("@vitejs/plugin-react");
import { resolve } from "node:path";

export default defineConfig({
  plugins: [reactPlugin()],
  resolve: {
    alias: [{ find: "@", replacement: resolve(__dirname, "./src") }],
  },
  server: {
    host: "localhost",
    port: 3000,
  },
  css: {
    devSourcemap: true,
  },
});
