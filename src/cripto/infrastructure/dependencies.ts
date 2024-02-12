import { CreatePriceUseCase } from "../../price/application/create-price-usecase";
import { PriceRepositoryImpl } from "../../price/infrastructure/outbound/price-repository-impl";
import { CreateCriptoUseCase } from "../application/create-usecase/create-cripto-usecase";
import { CriptoPostController } from "./inbound/controllers/post-controller";
import { CriptoRepositoryImpl } from "./outbound/cripto-repository-impl";

const criptoRepository = new CriptoRepositoryImpl();
const priceRepository = new PriceRepositoryImpl();
const createPriceUseCase = new CreatePriceUseCase(priceRepository);
const createCriptoUseCase = new CreateCriptoUseCase(
  criptoRepository,
  createPriceUseCase
);

export const criptoPostController = new CriptoPostController(
  createCriptoUseCase
);
