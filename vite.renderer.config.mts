import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  root: resolve(import.meta.dirname, "src/screens/main"),

  // input: resolve(import.meta.dirname, "src/screens/main/index.html"),

  plugins: [react({ include: /\.(mdx|js|jsx|ts|tsx)$/ })],

  html: {
    cspNonce: "csp-nonce-placeholder",
  },

  build: {
    outDir: resolve(import.meta.dirname, ".vite/renderer/main_window"),
  },
});
