import { CreateCriptoUseCase } from "../application/create-usecase/create-cripto-usecase";
import { CriptoPostController } from "./inbound/controllers/post-controller";
import { CriptoRepositoryImpl } from "./outbound/cripto-repository-impl";

const criptoRepository = new CriptoRepositoryImpl();
const createCriptoUseCase = new CreateCriptoUseCase(criptoRepository);

export const criptoPostController = new CriptoPostController(createCriptoUseCase);