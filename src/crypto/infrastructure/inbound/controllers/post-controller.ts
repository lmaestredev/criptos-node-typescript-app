import { Request, Response } from "express";

import { CreateCryptoUseCase } from "../../../application/create-usecase/create-crypto-usecase";

export class CryptoPostController {
  constructor(private readonly createCryptoUseCase: CreateCryptoUseCase) {}
  async run(req: Request, res: Response) {
    const { name, currentPrice } = req.body;
    try {
      const useCaseRes = await this.createCryptoUseCase.run({
        name,
        currentPrice,
      });
      res.status(202).json({
        msg: useCaseRes,
      });
    } catch (error) {
      console.log((error as Error).message || "An unknown error occurred.");
      res.status(409).json({
        error: (error as Error).message || "An unknown error occurred.",
      });
    }
  }
}
