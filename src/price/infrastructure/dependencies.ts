import { GetCryptoByIdUseCase } from "../../crypto/application/get-usecase/get-crypto-by-id-usecase";
import { CryptoRepositoryImpl } from "../../crypto/infrastructure/outbound/crypto-repository-impl";
import { GetPricesByCryptoIdUseCase } from "../application/get-usecase/getPrices-by-crypto-usecase";
import { PriceGetController } from "./inbound/controllers/get-controller";
import { PriceRepositoryImpl } from "./outbound/price-repository-impl";

//repositories
const priceRepository = new PriceRepositoryImpl();
const cryptoRepository = new CryptoRepositoryImpl();

//usecases
const getCryptoByIdUseCase = new GetCryptoByIdUseCase(cryptoRepository);
const getPricesByCryptoIdUseCase = new GetPricesByCryptoIdUseCase(
  priceRepository,
  getCryptoByIdUseCase
);

//controllers
export const priceGetController = new PriceGetController(
  getPricesByCryptoIdUseCase
);
