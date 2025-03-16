export class ServerError extends Error {
  public status: number = 500;

  constructor(message: string) {
    super(message);

    this.name = "ServerError";
  }
}
