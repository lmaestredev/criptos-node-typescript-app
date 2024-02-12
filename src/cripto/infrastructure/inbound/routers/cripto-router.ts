import express from "express";

import { criptoPostController, criptoPutController } from "../../dependencies";

const criptoRouter = express.Router();

criptoRouter.post(
  "/create",
  criptoPostController.run.bind(criptoPostController)
);
criptoRouter.put(
  "/update/:name",
  criptoPutController.run.bind(criptoPutController)
);

export { criptoRouter };
