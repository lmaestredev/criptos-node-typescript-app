import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("flixxo", "admin", "admin", {
  host: "localhost",
  dialect: "postgres",
});

import "../cripto/infrastructure/outbound/cripto-model";
import "../price/infrastructure/outbound/price-model";

export const connect = async () => {
  try {
    await sequelize.sync({ force: false });
  } catch (error) {
    console.error("Unable to connect to the database");
  }
};
