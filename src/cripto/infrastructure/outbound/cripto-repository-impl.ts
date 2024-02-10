import { Cripto } from "../../domain/cripto";
import { CriptoRepository } from "../../domain/cripto-repository";
import { CriptoModel } from "./cripto-model";

export class CriptoRepositoryImpl implements CriptoRepository {
  async create(cripto: Cripto): Promise<void> {
    // await PriceModel.create({
    //   price: price.price,
    //   criptoId: price.criptoId,
    // });
    await CriptoModel.create({
      name: cripto.name,
      currentPrice: cripto.currentPrice,
    });
  }

  getById(id: number): Promise<Cripto | null> {
    return CriptoModel.findByPk(id);
  }
}
