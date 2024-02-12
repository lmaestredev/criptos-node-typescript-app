import express from "express";

import { priceGetController } from "../../dependencies";

const priceRouter = express.Router();

priceRouter.get(
  "/get-by-criptoId/:criptoId",
  priceGetController.getByCriptoId.bind(priceGetController)
);

export { priceRouter };
