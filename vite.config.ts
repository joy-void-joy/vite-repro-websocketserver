import { defineConfig } from "vite";
import { websocket } from "./src/plugins/websocket";

export default defineConfig({
  plugins: [websocket],
});
