import { Cripto } from "../../domain/cripto";
import { CriptoRepository } from "../../domain/cripto-repository";
import { CriptoModel } from "./cripto-model";

export class CriptoRepositoryImpl implements CriptoRepository {

  async create(cripto: Cripto): Promise<Cripto> {
    const created = await CriptoModel.create({
      name: cripto.name,
      currentPrice: cripto.currentPrice,
    });

    return new Cripto(
      created.name,
      created.currentPrice,
      created.previousPrice,
      created.id
    );
  }

  getById(id: number): Promise<Cripto | null> {
    return CriptoModel.findByPk(id);
  }

  async getByName(name: string): Promise<Boolean>{
    const cripto = await CriptoModel.getByName(name);
    return cripto ? true : false;
  }

}
