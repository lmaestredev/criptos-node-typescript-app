import { Request, Response } from "express";

import { GetPricesByCriptoIdUseCase } from "../../../application/get-usecase/getPrices-by-cripto-usecase";

export class PriceGetController {
  constructor(
    private readonly getPricesByCriptoId: GetPricesByCriptoIdUseCase
  ) {}

  async getByCriptoId(req: Request, res: Response) {
    try {
      const { criptoId } = req.params;
      const useCaseRes = await this.getPricesByCriptoId.run(Number(criptoId));
      res.status(200).json({
        cripto: criptoId,
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
