import { FastifyReply, FastifyRequest } from "fastify";
import { ListProcessesUseCase } from "./list-processes.usecase";

export class ListProcessesController {
  constructor(private listProcessesUseCase: ListProcessesUseCase) {}
  public async execute(
    request: FastifyRequest,
    reply: FastifyReply
  ): Promise<FastifyReply> {
    const processes = await this.listProcessesUseCase.execute();

    return reply.send({});
  }
}
