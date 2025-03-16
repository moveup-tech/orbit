import { ServerError } from "./ServerError";

export class Forbidden extends ServerError {
  constructor(message: string) {
    super(message);

    this.status = 403;
    this.name = "ForbiddenError";
  }
}
