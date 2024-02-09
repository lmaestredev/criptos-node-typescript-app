import { Cripto } from "./cripto";

export interface CriptoRepository {
  getById(id: string): Promise<Cripto | null>;
  create(cripto: Cripto): Promise<Cripto>;
}
