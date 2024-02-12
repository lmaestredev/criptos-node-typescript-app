import { DataTypes, Model } from "sequelize";

import { sequelize } from "../../../connections/sequelize-connection";
// import { Cripto } from "../../../criptos/infrastructure/outbound/cripto-model"

export class PriceModel extends Model {
  declare id: number;
  declare price: number;
  declare criptoId: number;
  declare createdAt: Date;

  static async getPricesByCriptoId(criptoId: number): Promise<PriceModel[]> {
    const prices = await PriceModel.findAll({
      where: { criptoId: criptoId },
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
