import { CreatePriceUseCase } from "../../price/application/create-price-usecase";
import { PriceRepositoryImpl } from "../../price/infrastructure/outbound/price-repository-impl";
import { CreateCriptoUseCase } from "../application/create-usecase/create-cripto-usecase";
import { UpdateCriptoUseCase } from "../application/update-usecase/update-cripto-usecase";
import { CriptoPostController } from "./inbound/controllers/post-controller";
import { CriptoPutController } from "./inbound/controllers/put-controller";
import { CriptoRepositoryImpl } from "./outbound/cripto-repository-impl";

//repositories
const criptoRepository = new CriptoRepositoryImpl();
const priceRepository = new PriceRepositoryImpl();

//usecases
const createPriceUseCase = new CreatePriceUseCase(priceRepository);
const createCriptoUseCase = new CreateCriptoUseCase(
  criptoRepository,
  createPriceUseCase
);
const updateCriptoUseCase = new UpdateCriptoUseCase(
  criptoRepository,
  createPriceUseCase
);

//controllers

export const criptoPostController = new CriptoPostController(
  createCriptoUseCase
);

export const criptoPutController = new CriptoPutController(updateCriptoUseCase);
