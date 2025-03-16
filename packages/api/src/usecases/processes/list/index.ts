import { ListProcessesController } from "./list-processes.controller";
import { ListProcessesUseCase } from "./list-processes.usecase";

export const listProcessesUsecase = new ListProcessesUseCase();
export const listProcessesController = new ListProcessesController(
  listProcessesUsecase
);
