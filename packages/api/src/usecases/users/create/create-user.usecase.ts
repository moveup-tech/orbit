import * as z from "zod";

import { createUserSchema } from "./create-user.schema";

import { CreateUserRepo } from "repositories/postgres/user/create/create-user.repo";

export class CreateUserUseCase {
  constructor(private createUserRepo: CreateUserRepo) {}

  async execute(data: z.infer<typeof createUserSchema>) {
    const { name, email, password } = createUserSchema.parse(data);
    const result = await this.createUserRepo.create({ name, email, password });

    return result;
  }
}
