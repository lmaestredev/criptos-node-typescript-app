import { Price } from "../connections/sequelize-models/price-model";

export interface UserRepository {
  getById(id: string): Promise<Price | null>;
  create(price: Price): Promise<Price>;
}
