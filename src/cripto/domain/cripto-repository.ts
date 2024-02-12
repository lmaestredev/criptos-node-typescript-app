import { Cripto } from "./cripto";

export interface CriptoRepository {
  create(cripto: Cripto): Promise<Cripto>;
  getByName(name: string): Promise<Cripto | null>;
  update(cripto: Cripto): Promise<Cripto | null>;
  getAll(): Promise<Cripto[]>;
}
