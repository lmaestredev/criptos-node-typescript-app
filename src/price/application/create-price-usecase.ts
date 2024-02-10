import { Price } from "../domain/price";
import { PriceRepository } from "../domain/price-repository";

export class CreatePriceUseCase {
  constructor(private readonly priceRepository: PriceRepository) {}

  async run(price: Price): Promise<void> {
    await this.priceRepository.create(price);
  }
}
