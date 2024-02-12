import { Price } from "./price";

export interface PriceRepository {
  // getById(id: string): Promise<Price | null>;
  create(price: Price): Promise<void>;
  getPricesByCriptoId(id: number): Promise<Price[]>;
}
