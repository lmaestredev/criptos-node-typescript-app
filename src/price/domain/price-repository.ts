import { Price } from "../infrastructure/outbound/price-model";

export interface UserRepository {
  getById(id: string): Promise<Price | null>;
  create(price: Price): Promise<Price>;
}
