import { CreatePriceUseCase } from "../../../price/application/create-price-usecase";
import { Cripto } from "../../domain/cripto";
import { CriptoRepository } from "../../domain/cripto-repository";
import { CreateCriptoDto } from "./create-cripto-dto";

export class CreateCriptoUseCase {
  constructor(
    private readonly criptoRepository: CriptoRepository,
    private readonly createPriceUseCase: CreatePriceUseCase
  ) {}

  errorMessage = "Has ocurred an error creating cripto";
  successMessage = "Cripto created successfully";
  run(createCriptoDto: CreateCriptoDto): Promise<string> {
    return new Promise(async (resolve, reject) => {
      try {
        console.log(
          "--------------- Starting to create a new Cripto ---------------"
        );
        const cripto = new Cripto(
          createCriptoDto.name,
          createCriptoDto.currentPrice,
          undefined,
          undefined
        );
        console.log(JSON.stringify(cripto));

        console.log("--------------- Verifying cripto name ---------------");
        const exists = await this.criptoRepository.getByName(cripto.name);
        if (!exists) {
          const createdCripto = await this.criptoRepository.create(cripto);
          console.log(JSON.stringify(createdCripto));
          await this.createPriceUseCase.run({
            price: createdCripto.currentPrice,
            criptoId: createdCripto.id,
          });
          console.log(this.successMessage);
          resolve(this.successMessage);
        } else {
          reject(
            new Error(`Already exists a cripto whit name: ${cripto.name}`)
          );
        }
      } catch (error) {
        console.error(this.errorMessage);
        reject(new Error(this.errorMessage));
      }
    });
  }
}
