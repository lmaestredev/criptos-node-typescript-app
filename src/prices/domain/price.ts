class Price {
  constructor(
    public readonly id: string,
    public readonly criptoId: number,
    public readonly price: number,
    public readonly createdAt: Date
  ) { }
}

module.exports = {
  Price
}