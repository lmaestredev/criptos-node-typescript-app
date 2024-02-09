export class Price {
    constructor(
      public readonly id: string,
      public readonly cripto_id: number,
      public readonly price: number,
      public readonly created_at: Date
    ) {}
  }