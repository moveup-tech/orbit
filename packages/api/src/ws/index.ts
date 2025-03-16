import { FastifyInstance } from "fastify";
import { WebSocket } from "@fastify/websocket";

export let websocket: WebSocket | null;

export function ws(app: FastifyInstance) {
  app.get("/notification", { websocket: true }, (socket) => {
    console.log("Cliente conectado...");

    websocket = socket;

    // socket.socket.on("close", () => {
    //   websocket.delete(socket.socket);
    // });
  });
}
