import { GetCriptoByIdUseCase } from "../../cripto/application/get-usecase/get-cripto-by-id-usecase";
import { CriptoRepositoryImpl } from "../../cripto/infrastructure/outbound/cripto-repository-impl";
import { GetPricesByCriptoIdUseCase } from "../application/get-usecase/getPrices-by-cripto-usecase";
import { PriceGetController } from "./inbound/controllers/get-controller";
import { PriceRepositoryImpl } from "./outbound/price-repository-impl";

//repositories
const priceRepository = new PriceRepositoryImpl();
const criptoRepository = new CriptoRepositoryImpl();

//usecases
const getCriptoByIdUseCase = new GetCriptoByIdUseCase(criptoRepository);
const getPricesByCriptoIdUseCase = new GetPricesByCriptoIdUseCase(
  priceRepository,
  getCriptoByIdUseCase
);

//controllers
export const priceGetController = new PriceGetController(
  getPricesByCriptoIdUseCase
);
