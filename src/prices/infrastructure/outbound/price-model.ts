import { DataTypes } from "sequelize";

import { sequelize } from "../../../common/sequelize-connection";

export const Price = sequelize.define("prices", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  price: {
    type: DataTypes.DECIMAL,
  },
}, {
    timestamps: true
});
