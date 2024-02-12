import express from "express";

import {
  cryptoGetController,
  cryptoPostController,
  cryptoPutController,
} from "../../dependencies";

const cryptoRouter = express.Router();

cryptoRouter.post(
  "/create",
  cryptoPostController.run.bind(cryptoPostController)
);
cryptoRouter.put(
  "/update/:name",
  cryptoPutController.run.bind(cryptoPutController)
);
cryptoRouter.get(
  "/get-all",
  cryptoGetController.getAll.bind(cryptoGetController)
);

export { cryptoRouter as cryptoRouter };
