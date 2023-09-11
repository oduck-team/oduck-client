/// <reference types="vitest" />
import { fileURLToPath, URL } from "node:url";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    host: "0.0.0.0",
    port: 5173,
    proxy: {
      "/api": {
        target: "http://localhost:8000",
      },
    },
  },
  test: {
    include: ["**/*.test.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    environment: "happy-dom",
    setupFiles: ["./vitest.setup.ts"],
  },
});
