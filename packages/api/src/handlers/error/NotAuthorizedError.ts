import { ServerError } from "./ServerError";

export class NotAuthorized extends ServerError {
  constructor(message: string) {
    super(message);

    this.status = 403;
    this.name = "NotAuthorizedError";
  }
}
