import { DataTypes, Model } from "sequelize";

import { sequelize } from "../../../connections/sequelize-connection";
import { PriceModel } from "../../../price/infrastructure/outbound/price-model";

export class CriptoModel extends Model {
  declare name: string;
  declare currentPrice: number;
  declare previousPrice?: number;
  declare id?: number;

  static async getByName(name: string): Promise<CriptoModel | null> {
    const cripto = await this.findOne({
      where: { name: name },
    });

    return cripto;
  }
}

CriptoModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    currentPrice: {
      type: DataTypes.DECIMAL,
    },
    previousPrice: {
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
  },
  {
    timestamps: false,
    tableName: "criptos",
    sequelize,
  }
);

CriptoModel.hasMany(PriceModel, {
  foreignKey: "criptoId",
  sourceKey: "id",
});

PriceModel.belongsTo(CriptoModel, {
  foreignKey: "criptoId",
});
