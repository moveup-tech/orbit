export class User {
  public id?: string;
  public name: string;
  public email: string;
  public password: string;
  public isEmailVerified?: boolean = false;

  constructor(data: User) {
    this.id = data.id;
    this.name = data.name;
    this.email = data.email;
    this.isEmailVerified = data.isEmailVerified;
  }
}
