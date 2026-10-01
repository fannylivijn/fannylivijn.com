import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base: "" keeps asset paths relative so the build works on any host or subpath.
// The dev server uses $PORT when the preview tool assigns one, otherwise 5174.
export default defineConfig({
  plugins: [react()],
  base: "",
  server: { port: Number(process.env.PORT) || 5174 },
});
