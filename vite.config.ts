
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import alias from '@rollup/plugin-alias'
import { configAliases } from './src/shared/lib/aliases/index';
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    alias({
      entries: [
        configAliases("shared"),
        configAliases("widgets"),
        configAliases("app"),
        configAliases("pages"),
        configAliases("entities"),
        configAliases("features")
      ]
    }),
    svgr()
  ],
})
