import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import VitePluginStyleInject from "vite-plugin-style-inject";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VitePluginStyleInject()],
  build: {
    rollupOptions: {
      // 请确保外部化那些你的库中不需要的依赖
      external: ["vue"],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: "Vue",
        },
      },
    },
    lib: {
      entry: "./packages/index.js",
      name: "form-layout",
    },
  },
});
