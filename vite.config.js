import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import flowbiteReact from "flowbite-react/plugin/vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), flowbiteReact()],
  server: {
    headers: {
      "Cross-Origin-Opener-Policy": "same-origin-allow-popups",
    },
    proxy: {
      // All requests starting with /api will be proxied to the real API
      "/api": {
        target: "https://forum-istad-api.cheat.casa/api/v1",
        changeOrigin: true,
        secure: false,
      },
    },
  },
})