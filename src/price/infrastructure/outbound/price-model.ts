import { DataTypes, Model } from "sequelize";

import { sequelize } from "../../../connections/sequelize-connection";
// import { Crypto } from "../../../cryptos/infrastructure/outbound/crypto-model"

export class PriceModel extends Model {
  declare id: number;
  declare price: number;
  declare cryptoId: number;
  declare createdAt: Date;

  static async getPricesByCryptoId(cryptoId: number): Promise<PriceModel[]> {
    const prices = await PriceModel.findAll({
      where: { cryptoId: cryptoId },
    });
    return prices;
  }
}

PriceModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    price: {
      type: DataTypes.DECIMAL,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
  },
  {
    // timestamps: false,
    tableName: "prices",
    sequelize,
  }
);
