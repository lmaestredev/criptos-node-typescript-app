import { Cripto } from "../domain/model/Cripto";
import { CriptoRepository } from "../domain/repository/CriptoRepository";

export class CreateCriptoUseCase {
  constructor(private readonly CriptoRepository: CriptoRepository) {}

  async run(cripto: Cripto): Promise<Cripto> {
    const Cripto = await this.CriptoRepository.create(cripto);
    return Cripto;
  }
}
