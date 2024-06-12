import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.tsx"),
      formats: ["es"],
      name: "flint-plugin",
      fileName: "index",
    },
    rollupOptions: {
      // Externalize deps that shouldn't be bundled into the library.
      external: ["zustand", "rxdb", "react"],
      sourcemap: false,
    },
    // Reduce bloat from legacy polyfills.
    target: "esnext",
  },
  plugins: [dts({ rollupTypes: true })],
});
