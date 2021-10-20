import react from "@vitejs/plugin-react"
import { UserConfig, UserConfigFn } from "vite"

const config: UserConfigFn = async () => {
  const config: UserConfig = {
    plugins: [
      // The all-in-one Vite plugin for React projects.
      react(),
    ],

    server: {
      port: 3000,
      open: false,
    },

    build: {
      outDir: "./build/",
    },
  }

  return config
}

export default config
