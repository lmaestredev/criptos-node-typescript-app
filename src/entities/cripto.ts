export class Cripto {
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly currentPrice: number,
    public readonly previousPrice: number
  ) {}
}
