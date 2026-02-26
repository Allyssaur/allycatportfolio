import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://allyssaur.github.io/allycatportfolio/",
  optimizeDeps: {
    include: ["react", "react-dom" ],
  },
});
