import { Request, Response } from "express";

import { GetPricesByCryptoIdUseCase } from "../../../application/get-usecase/getPrices-by-crypto-usecase";

export class PriceGetController {
  constructor(
    private readonly getPricesByCryptoId: GetPricesByCryptoIdUseCase
  ) {}

  async getByCryptoId(req: Request, res: Response) {
    try {
      const { cryptoId } = req.params;
      const useCaseRes = await this.getPricesByCryptoId.run(Number(cryptoId));
      res.status(200).json({
        crypto: cryptoId,
        prices: useCaseRes,
      });
    } catch (error) {
      console.log((error as Error).message || "An unknown error occurred.");
      res.status(404).json({
        error: (error as Error).message || "An unknown error occurred.",
      });
    }
  }
}
