import { Price } from "../../domain/price";
import { PriceRepository } from "../../domain/price-repository";
import { PriceModel } from "./price-model";

export class PriceRepositoryImpl implements PriceRepository {
  async create(price: Price): Promise<void> {
    
      // await PriceModel.create({
      //   price: price.price,
      //   criptoId: price.criptoId,
      // });

      await PriceModel.create({price});
    
  }
}
