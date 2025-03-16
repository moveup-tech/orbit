import { Notification } from "handlers/notification/Notification";
import pm2 from "pm2";

export class Pm2 {
  async run() {
    pm2.connect(() => {
      console.log("PM2 connected...");
    });

    pm2.launchBus((err, bus) => {
      if (err) {
        console.error("Erro ao iniciar o Event Bus:", err);
        return;
      }

      bus.on("process:event", (data) => {
        if (data.event === "error") {
          // console.log(data);
        }
      });

      bus.on("process:exception", async (data) => {
        const { name, pm_id: id } = data.process;
        const message = data.data?.message || "Erro desconhecido";

        await Notification.send("error", {
          id,
          name,
          message,
        });
      });

      bus.on("log:err", (data) => {
        const { process, data: lg } = data;
      });

      console.log("🎯 Monitoramento em tempo real ativado!");
    });
  }
}
