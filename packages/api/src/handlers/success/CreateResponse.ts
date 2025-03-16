import { SuccessResponse } from "./SuccessResponse";

export class CreateResponse extends SuccessResponse {
  constructor({ data }: SuccessResponse) {
    super({ data });

    this.status = 201;
  }
}
