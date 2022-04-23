import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vitePluginWasmPack from '@zebing/vite-plugin-wasm-pack';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vitePluginWasmPack({
    crateDirectory: './my_crate'
  })]
})
