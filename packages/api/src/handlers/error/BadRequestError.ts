import { ServerError } from "./ServerError";

export class BadRequestError extends ServerError {
  constructor(message: string) {
    super(message);

    this.status = 400;
    this.name = "BadRequestError";
  }
}
