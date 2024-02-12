export class Cripto {
  constructor(
    public name: string,
    public currentPrice: number,
    public previousPrice?: number,
    public id?: number
  ) {}
}
