import { Request, Response } from "express";

import { CreateUserUseCase } from "./create-user.usecase";

import { CreateResponse } from "handlers/success/CreateResponse";
import { createUserSchema } from "./create-user.schema";

export class CreateUserController {
  constructor(private createUser: CreateUserUseCase) {}

  async execute(req: Request, res: Response): Promise<Response> {
    const body = createUserSchema.parse(req.body);
    const data = await this.createUser.execute(body);
    const response = new CreateResponse({ data });

    return res.status(response.status).json(response);
  }
}
