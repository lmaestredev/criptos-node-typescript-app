import { Cripto } from "../../domain/cripto";
import { CriptoRepository } from "../../domain/cripto-repository";

export class GetCriptoByIdUseCase {
  constructor(private readonly criptoRepository: CriptoRepository) {}

  errorMessage = "Cripto not found";
  successMessage = "Cripto founded successfully";
  run(id: number): Promise<Cripto> {
    return new Promise(async (resolve, reject) => {
      try {
        console.log(
          "--------------- Starting to finding cripto by id ---------------"
        );
        const cripto = await this.criptoRepository.getById(id);
        if (cripto) {
          console.log(this.successMessage);
          resolve(cripto);
        } else {
          reject(new Error(this.errorMessage));
        }
      } catch (error) {
        console.error(this.errorMessage);
        reject(new Error(this.errorMessage));
      }
    });
  }
}
