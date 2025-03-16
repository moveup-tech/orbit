export class SuccessResponse<T = unknown> {
  public data: T;
  public ok?: boolean = true;
  public status?: number = 200;

  constructor({ status, data }: SuccessResponse<T>) {
    this.status = status;
    this.data = data;
  }
}
