import { Cripto } from "../../domain/cripto";
import { CriptoRepository } from "../../domain/cripto-repository";
import { CreateCriptoDto } from "./create-cripto-dto";

export class CreateCriptoUseCase {
  constructor(private readonly criptoRepository: CriptoRepository) {}

  async run(createCriptoDto: CreateCriptoDto): Promise<void> {
    try {
      const cripto = new Cripto(
        createCriptoDto.name,
        createCriptoDto.currentPrice,
        undefined,
        undefined
      );
      console.log(JSON.stringify(cripto));
      await this.criptoRepository.create(cripto);
    } catch (error) {
      console.error("Has ocurred an error creating cripto");
      throw new Error("Has ocurred an error creating cripto");
    }
  }
}
