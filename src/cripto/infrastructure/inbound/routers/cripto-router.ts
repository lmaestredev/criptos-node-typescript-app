import express from "express";
import { criptoPostController } from "../../dependencies";

const criptoRouter = express.Router();

criptoRouter.post("/", criptoPostController.run.bind(criptoPostController));

export { criptoRouter };
