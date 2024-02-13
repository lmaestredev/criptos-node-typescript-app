import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("flixxo", "admin", "admin", {
  host: "localhost",
  dialect: "postgres",
});

import "../crypto/infrastructure/outbound/crypto-model";
import "../price/infrastructure/outbound/price-model";

export const connect = async () => {
  try {
    await sequelize.sync({ force: true });
  } catch (error) {
    console.error("Unable to connect to the database");
  }
};
