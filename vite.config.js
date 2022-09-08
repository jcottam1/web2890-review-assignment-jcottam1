const path = require('path')
const glob = require('glob')
import { defineConfig } from 'vite'

let input = {}

glob.sync('./src/**/*.html').map(file => {
  return [file.substring(`.${path.sep}src${path.sep}`.length), file]
}).forEach( f => {
    input[f[0]] = f[1]
})

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input
    }
  },
  server: {
    port: 8080,
    open: true
  },
  plugins: []
})