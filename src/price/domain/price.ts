export class Price {
  constructor(
    public readonly id: number,
    public readonly price: number,
    public readonly criptoId: number,
    public readonly createdAt: Date
  ) {}
}
