import { Cripto } from "../model/Cripto";

export interface CriptoRepository {
  getById(id: string): Promise<Cripto | null>;
  create(cripto: Cripto): Promise<Cripto>;
}
