import { Cripto } from "./cripto";

export interface CriptoRepository {
  create(cripto: Cripto): Promise<Cripto>;
  getById(id: number): Promise<Cripto | null>;
  getByName(name: string): Promise<Boolean>;
}
