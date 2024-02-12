import { GetCriptoByIdUseCase } from "../../../cripto/application/get-usecase/get-cripto-by-id-usecase";
import { Price } from "../../domain/price";
import { PriceRepository } from "../../domain/price-repository";

export class GetPricesByCriptoIdUseCase {
  constructor(
    private readonly priceRepository: PriceRepository,
    private readonly getCriptoByIdUseCase: GetCriptoByIdUseCase
  ) {}

  errorMessage = "Prices list is empty";
  successMessage = "Cripto prices returned successfully";
  run(criptoId: number): Promise<Price[]> {
    return new Promise(async (resolve, reject) => {
      try {
        console.log(
          "--------------- Starting to getting cripto prices ---------------"
        );
        console.log("--------------- Verifying cripto's name ---------------");
        const cripto = await this.getCriptoByIdUseCase.run(criptoId);
        if (cripto) {
          const prices = await this.priceRepository.getPricesByCriptoId(
            criptoId
          );
          console.log(this.successMessage);
          resolve(prices);
        } else {
          reject(new Error(this.errorMessage));
        }
      } catch (error) {
        console.error((error as Error).message || "An unknown error occurred.")
        reject(new Error(this.errorMessage));
      }
    });
  }
}
