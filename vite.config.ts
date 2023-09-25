import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import * as path from "path";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";
import tsconfigPaths from "vite-tsconfig-paths";
import generatePackageJson from "rollup-plugin-generate-package-json";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    dts({
      insertTypesEntry: true,
    }),
    viteStaticCopy({
      targets: [
        {
          src: "src/styles/libs",
          dest: "styles",
        },
        {
          src: "src/styles/_libs.scss",
          dest: "styles",
        },
      ],
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.tsx"),
      name: "junyeol-components",
      formats: ["es", "umd"],
      fileName: "index",
    },

    rollupOptions: {
      external: ["react", "react-dom"],
      plugins: [
        generatePackageJson({
          outputFolder: "dist/library",
          baseContents: (pkg) => ({
            ...pkg,
            module: "./index.js",
            main: "./index.js",
            types: "./index.d.ts",
            scripts: undefined,
            optionalDependencies: {},
            eslintConfig: undefined,
          }),
        }),
      ],
    },
    commonjsOptions: {
      esmExternals: ["react"],
    },
  },
});
