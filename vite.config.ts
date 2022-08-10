import { defineConfig } from "vite";

import vue from "@vitejs/plugin-vue";
import typescript2 from "rollup-plugin-typescript2";
import { fileURLToPath, URL } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    {
      ...typescript2({
        check: false,
        include: ["src/components/*.vue"],
        tsconfigOverride: {
          exclude: ["vite.config.ts", "**/*.stories.ts"],
          compilerOptions: {
            sourceMap: true,
            declaration: true,
            declarationMap: true,
          },
        },
      }),
      apply: "build",
    },
  ],
  build: {
    cssCodeSplit: false,
    lib: {
      entry: "./src/ViewerPlugin.ts",
      formats: ["es", "cjs"],
      fileName: (format) => (format === "es" ? "index.js" : "index.cjs"),
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  test: {
    include: ["./tests/**/**.spec.ts"],
    coverage: {
      reporter: ["text", "json", "html"],
    },
  },
  define: {
    __VUE_I18N_FULL_INSTALL__: true,
    __VUE_I18N_LEGACY_API__: false,
    __INTLIFY_PROD_DEVTOOLS__: false,
  },
});
