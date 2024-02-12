import express from "express";

import { priceGetController } from "../../dependencies";

const priceRouter = express.Router();

priceRouter.get(
  "/get-by-cryptoId/:cryptoId",
  priceGetController.getByCryptoId.bind(priceGetController)
);

export { priceRouter };
