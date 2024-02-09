import { User } from "../../models/user";
import { UserRepository } from "../../repositories/user-repository";
import userDatabase from "./user-database.json";

export class MySQLUserRepository implements UserRepository {
  async getById(id: string): Promise<User | null> {
    console.log("Using MySQL!");

    const rawUser = userDatabase.find((user) => user.id === id);

    return rawUser ? new User(rawUser.id, rawUser.name) : null;
  }
}
