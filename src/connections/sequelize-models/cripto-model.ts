import { DataTypes, Model } from "sequelize";

import { sequelize } from "../sequelize-connection";
import { Price } from "./price-model";

export class Cripto extends Model {
  declare id: number;
  declare currentPrice: number;
  declare previousPrice: number;
}

Cripto.init(
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

Cripto.hasMany(Price, {
  foreignKey: "criptoId",
  sourceKey: "id",
});

Price.belongsTo(Cripto, {
  foreignKey: "criptoId",
});
