import { Cripto } from "../entities/cripto";

export interface CriptoRepository {
  getById(id: number): Promise<Cripto | null>;
  create(cripto: Cripto): Promise<Cripto>;
}
