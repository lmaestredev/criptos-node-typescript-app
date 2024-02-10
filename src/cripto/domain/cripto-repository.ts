import { Cripto } from "./cripto";

export interface CriptoRepository {
  create(cripto: Cripto): Promise<void>;
  getById(id: number): Promise<Cripto | null>;
}
