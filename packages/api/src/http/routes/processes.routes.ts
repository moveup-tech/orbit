import { FastifyInstance } from "fastify";
import { listProcessesController } from "../../usecases/processes/list";

export function processesRoutes(app: FastifyInstance) {
  app.get("/processes", listProcessesController.execute);
}
