const { defineConfig } = require("vite");
const reactPlugin = require("@vitejs/plugin-react");
import { resolve } from "node:path";

/** @type {import('vite').UserConfig} */
module.exports = defineConfig({
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
