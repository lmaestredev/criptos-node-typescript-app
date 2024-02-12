import { CreatePriceUseCase } from "../../price/application/create-price-usecase";
import { PriceRepositoryImpl } from "../../price/infrastructure/outbound/price-repository-impl";
import { CreateCriptoUseCase } from "../application/create-usecase/create-cripto-usecase";
import { GetAllCriptosUseCase } from "../application/get-usecase/get-all-criptos-usecase";
import { UpdateCriptoUseCase } from "../application/update-usecase/update-cripto-usecase";
import { CriptoGetController } from "./inbound/controllers/get-controller";
import { CriptoPostController } from "./inbound/controllers/post-controller";
import { CriptoPutController } from "./inbound/controllers/put-controller";
import { CriptoRepositoryImpl } from "./outbound/cripto-repository-impl";

//repositories
const criptoRepository = new CriptoRepositoryImpl();
const priceRepository = new PriceRepositoryImpl();

//usecases
const getAllCriptosUseCase = new GetAllCriptosUseCase(criptoRepository);
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
export const criptoGetController = new CriptoGetController(
  getAllCriptosUseCase
);
