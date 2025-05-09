import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(() => {
  return {
    plugins: [
      react(),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@shared": path.resolve(__dirname, "../shared"),
        "@assets": path.resolve(__dirname, "../attached_assets"),
      }
    },
    root: path.resolve(__dirname, "./"),
    build: {
      outDir: path.resolve(__dirname, "../dist/public"),
      emptyOutDir: true,
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, "index.html")
        }
      }
    },
    server: {
      port: 5173,
      strictPort: true
    },
    optimizeDeps: {
      esbuildOptions: {
        tsconfig: "./tsconfig.json"
      }
    }
  };
});
