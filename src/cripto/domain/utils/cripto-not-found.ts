export class CriptoNotFound extends Error {
  constructor(id: string) {
    super(`Cripto not found "${id}"`);
  }
}
