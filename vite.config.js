import { defineConfig } from "vite"

export default defineConfig({
  server: {
    // Vercel Sandbox assigns a new sb-*.vercel.run hostname per preview.
    allowedHosts: true,
  },
})
