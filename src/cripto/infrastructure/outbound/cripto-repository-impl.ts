import { Cripto } from "../../domain/cripto";
import { CriptoRepository } from "../../domain/cripto-repository";
import { CriptoModel } from "./cripto-model";

export class CriptoRepositoryImpl implements CriptoRepository {
  create(cripto: Cripto): Promise<Cripto> {
    return CriptoModel.create({ cripto });
  }

  getById(id: number): Promise<Cripto | null> {
    return CriptoModel.findByPk(id);
  }
}
