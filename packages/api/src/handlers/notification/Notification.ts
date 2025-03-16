import { websocket } from "ws";

export class Notification {
  static async send<T = unknown>(event: string, data: T) {
    websocket.send(
      JSON.stringify({
        event,
        data,
      })
    );
  }
}
