import { Request, Response } from "express";

import { CreateCriptoUseCase } from "../../../application/create-usecase/create-cripto-usecase";

export class CriptoPostController {
  constructor(private readonly createCriptoUseCase: CreateCriptoUseCase) { }

  async run(req: Request, res: Response) {
    const { name, currentPrice } = req.body;
    try {
      const useCaseRes = await this.createCriptoUseCase.run({ name, currentPrice });
      res.status(202).json({
        msg: useCaseRes,
      });
    }catch(error){
      res.status(409).json({
        error: (error as Error).message || 'An unknown error occurred.'})
    }
    
  }
}
