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

  async getByName(name: string): Promise<Cripto | null> {
    const cripto = await CriptoModel.getByName(name);
    return cripto;
  }

  async update(cripto: Cripto): Promise<Cripto | null> {
    const test = await CriptoModel.findByPk(cripto.id);

    if (test) {
      await test.update({
        name: cripto.name,
        currentPrice: cripto.currentPrice,
        previousPrice: cripto.previousPrice,
        id: cripto.id,
      });

      return new Cripto(
        test.name,
        test.currentPrice,
        test.previousPrice,
        test.id
      );
    } else {
      return null;
    }
  }

  async getAll(): Promise<Cripto[]> {
    const criptoModels = await CriptoModel.findAll();

    const criptos: Cripto[] = criptoModels.map((model) => {
      return new Cripto(
        model.name,
        model.currentPrice,
        model.previousPrice,
        model.id
      );
    });

    return criptos;
  }

  async getById(id: number): Promise<Cripto | null> {
    const cripto = await CriptoModel.findByPk(id);
    return cripto;
  }
}
