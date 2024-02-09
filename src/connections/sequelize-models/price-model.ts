import { DataTypes, Model } from "sequelize";

import { sequelize } from "../sequelize-connection";
// import { Cripto } from "../../../criptos/infrastructure/outbound/cripto-model"

export class Price extends Model {
  declare id: number;
  declare price: number;
  declare createdAt: Date;
}

Price.init(
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
    timestamps: false,
    tableName: "prices",
    sequelize,
  }
);
