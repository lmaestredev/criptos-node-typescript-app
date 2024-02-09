import { User } from "../models/user";

export interface UserRepository {
  getById(id: string): Promise<User | null>;
}
