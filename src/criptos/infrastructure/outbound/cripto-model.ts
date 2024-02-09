import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../../common/sequelize-connection";
import { Price } from "../../../prices/infrastructure/outbound/price-model";

export class Cripto extends Model {
  declare id: number;
  declare currentPrice: number;
  declare previousPrice: Number;
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
      allowNull: false
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
    tableName: 'criptos',
    sequelize
  }
);

Cripto.hasMany(Price, {
  foreignKey: "criptoId",
  sourceKey: "id",
})

Price.belongsTo(Cripto, {
  foreignKey: "criptoId",
})

