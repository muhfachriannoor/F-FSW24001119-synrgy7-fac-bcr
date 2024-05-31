import { UsersModel } from "@Models/Users/UsersModel";
import { RegisterAuth } from "@Interfaces/Auth/AuthInterface";
import { Exception } from "@Exceptions/exception";

export class AuthRepository {
  public async checkLogin(email: string): Promise<UsersModel | undefined> {
    const checkUser = await UsersModel.query().where("email", email).first();

    if (checkUser === undefined) {
      throw new Exception("Email not found", 404, {});
    }

    if (checkUser.deleted_at !== null) {
      throw new Exception("Your account is inactive", 403, {});
    }

    return checkUser;
  }

  public async register(data: RegisterAuth): Promise<any> {
    return await UsersModel.query().insert({
      name: data.name,
      email: data.email,
      password: data.password,
      role: data.role,
      created_at: data.created_at,
    });
  }
}
