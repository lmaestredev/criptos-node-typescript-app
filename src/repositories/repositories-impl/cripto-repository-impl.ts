import { CriptoModel } from "../../connections/sequelize-models/cripto-model";
import { Cripto } from "../../entities/cripto";
import { CriptoRepository } from "../cripto-repository";

export class CriptoRepositoryImpl implements CriptoRepository {
  create(cripto: Cripto): Promise<Cripto> {
    return CriptoModel.create({ cripto });
  }

  getById(id: number): Promise<Cripto | null> {
    return CriptoModel.findByPk(id);
  }
}
