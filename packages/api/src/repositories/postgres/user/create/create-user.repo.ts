import { User } from "entities/User";

import { CreateUserContract } from "./create-user.contract";

import { CreateUserDTO } from "./create-user.dto";

export class CreateUserRepo implements CreateUserContract {
  async create(data: CreateUserDTO): Promise<User> {
    const result = new User(data);

    return result;
  }
}
