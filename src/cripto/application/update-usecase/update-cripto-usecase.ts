import { CreatePriceUseCase } from "../../../price/application/create-price-usecase";
import { Cripto } from "../../domain/cripto";
import { CriptoRepository } from "../../domain/cripto-repository";
import { UpdateCriptoDto } from "./update-cripto-dto";

export class UpdateCriptoUseCase {
  constructor(
    private readonly criptoRepository: CriptoRepository,
    private readonly createPriceUseCase: CreatePriceUseCase
  ) {}

  errorMessage = "Doesn't exists a Cripto with name: "
  successMessage = "Cripto updated successfully";
  run(criptoDto: UpdateCriptoDto): Promise<string> {
    return new Promise(async (resolve, reject) => {
      try {
        console.log(
          "--------------- Starting to update a Cripto ---------------"
        );
        console.log(JSON.stringify(criptoDto));
        console.log("--------------- Searching cripto by name ---------------");
        const exists = await this.criptoRepository.getByName(criptoDto.name);
        if (exists) {
          exists.previousPrice = exists.currentPrice;
          exists.currentPrice = criptoDto.newPrice;
          const criptoToUpdate = new Cripto(
            exists.name,
            exists.currentPrice,
            exists.previousPrice,
            exists.id
          );

          const updatedCripto = await this.criptoRepository.update(
            criptoToUpdate
          );
          console.log(JSON.stringify(updatedCripto));
          if (updatedCripto) {
            await this.createPriceUseCase.run({
              price: updatedCripto.currentPrice,
              criptoId: updatedCripto.id,
            });
          }
          console.log(this.successMessage);
          resolve(this.successMessage);
        } else {
          reject(
            new Error(this.errorMessage + criptoDto.name)
          );
        }
      } catch (error) {
        console.error(this.errorMessage + criptoDto.name);
        reject(new Error(this.errorMessage + criptoDto.name));
      }
    });
  }
}
