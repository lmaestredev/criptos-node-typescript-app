import { DataTypes, Model } from "sequelize";

import { sequelize } from "../../../connections/sequelize-connection";
import { Price } from "../../../price/infrastructure/outbound/price-model";

export class CriptoModel extends Model {
  declare id: number;
  declare name: string;
  declare currentPrice: number;
  declare previousPrice: number;
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
    },
  },
  {
    timestamps: false,
    tableName: "criptos",
    sequelize,
  }
);

CriptoModel.hasMany(Price, {
  foreignKey: "criptoId",
  sourceKey: "id",
});

Price.belongsTo(CriptoModel, {
  foreignKey: "criptoId",
});
