import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,        // This makes the server listen on all IP addresses, including your local network IP
    port: 5173,        // Ensure this matches the port your app is running on
  }
})
