import { User } from "../../../../entities/User";
import { CreateUserDTO } from "./create-user.dto";

export interface CreateUserContract {
  create(user: CreateUserDTO): Promise<User>;
}
