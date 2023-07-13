import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import VueMacros from "unplugin-vue-macros/dist/rollup";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueMacros({
      setupComponent: false,
      setupSFC: false,
      plugins: {
        vue: vue({
          isProduction: true,
        }),
      },
    }),
  ],
});
