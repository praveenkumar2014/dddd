import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // GitHub Pages serves project sites under /<repo>/. VITE_BASE lets the
  // deploy workflow set that prefix while local dev/preview stay at "/".
  base: process.env.VITE_BASE || "/",
  plugins: [react()],
  server: {
    host: true,
    allowedHosts: [".prod-runtime.all-hands.dev"],
  },
  preview: {
    host: true,
    allowedHosts: [".prod-runtime.all-hands.dev"],
  },
});
