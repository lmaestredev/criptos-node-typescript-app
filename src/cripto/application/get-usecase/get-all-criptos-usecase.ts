import { Cripto } from "../../domain/cripto";
import { CriptoRepository } from "../../domain/cripto-repository";

export class GetAllCriptosUseCase {
  constructor(private readonly criptoRepository: CriptoRepository) {}

  errorMessage = "Criptos list is empty";
  successMessage = "Criptos returned successfully";
  run(): Promise<Cripto[]> {
    return new Promise(async (resolve, reject) => {
      try {
        console.log(
          "--------------- Starting to getting criptos ---------------"
        );

        const criptos = await this.criptoRepository.getAll();
        if (criptos) {
          console.log(this.successMessage);
          resolve(criptos);
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
