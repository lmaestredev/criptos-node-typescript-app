export class Cripto {
  constructor(
    public readonly name: string,
    public readonly currentPrice: number,
    public readonly previousPrice?: number,
    public readonly id?: number
  ) {}
}
