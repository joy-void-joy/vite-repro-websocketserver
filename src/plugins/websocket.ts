import { WebSocketServer } from "ws";

import type { ViteDevServer } from "vite";

export function configureServer(server: ViteDevServer) {
  if (!server.httpServer) {
    throw new Error("No httpServer found");
  }

  const webSocketServer = new WebSocketServer({
    server: server.httpServer,
  });

  // Can be commented out, the server will still crash
  webSocketServer.on("connection", (socket) => {
    console.log("connection");
    socket.on("error", console.error);
    socket.send("Hello from WebSocket server");
  });
}

export const websocket = {
  name: "websocket",
  configureServer,
};
