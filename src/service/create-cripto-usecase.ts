import { Cripto } from "../criptos/domain/cripto";
import { CriptoRepository } from "../criptos/domain/cripto-repository";

export class CreateCriptoUseCase {
  constructor(private readonly CriptoRepository: CriptoRepository) {}

  async run(cripto: Cripto): Promise<Cripto> {
    const Cripto = await this.CriptoRepository.create(cripto);
    return Cripto;
  }
}
