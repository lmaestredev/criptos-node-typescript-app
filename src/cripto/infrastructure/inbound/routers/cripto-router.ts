import express from "express";

import {
  criptoGetController,
  criptoPostController,
  criptoPutController,
} from "../../dependencies";

const criptoRouter = express.Router();

criptoRouter.post(
  "/create",
  criptoPostController.run.bind(criptoPostController)
);
criptoRouter.put(
  "/update/:name",
  criptoPutController.run.bind(criptoPutController)
);
criptoRouter.get(
  "/get-all",
  criptoGetController.getAll.bind(criptoGetController)
);

export { criptoRouter };
