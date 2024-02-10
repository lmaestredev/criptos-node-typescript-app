import { CreateCriptoUseCase } from "../../../application/create-usecase/create-cripto-usecase";
import { Request, Response } from "express";

export class CriptoPostController {
    constructor(private readonly createCriptoUseCase: CreateCriptoUseCase){}

    async run(req: Request, res: Response){
        const { name, currentPrice } = req.body;
        await this.createCriptoUseCase.run({name, currentPrice})
        res.status(202).json({
            msg: "Cripto created successfully"
        })
    }
}