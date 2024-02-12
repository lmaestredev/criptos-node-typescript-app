export class Price {
  constructor(
    public readonly price: number,
    public readonly criptoId: number,
    public readonly createdAt?: Date,
    public readonly id?: number,
  ) {}
}
