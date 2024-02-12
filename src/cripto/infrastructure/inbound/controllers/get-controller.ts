import { Request, Response } from "express";

import { GetAllCriptosUseCase } from "../../../application/get-usecase/get-all-criptos-usecase";

export class CriptoGetController {
  constructor(private readonly getAllCriptosUseCase: GetAllCriptosUseCase) {}

  async getAll(req: Request, res: Response) {
    try {
      const useCaseRes = await this.getAllCriptosUseCase.run();
      res.status(200).json({
        criptos: useCaseRes,
      });
    } catch (error) {
      console.log((error as Error).message || "An unknown error occurred.");
      res.status(404).json({
        error: (error as Error).message || "An unknown error occurred.",
      });
    }
  }
}
