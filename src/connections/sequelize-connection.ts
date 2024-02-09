import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("flixxo", "admin", "admin", {
  host: "localhost",
  dialect: "postgres",
});

import "../connections/sequelize-models/cripto-model";
import "../connections/sequelize-models/price-model";

export const connect = async () => {
  try {
    await sequelize.sync({ force: true });
  } catch (error) {
    console.error("Unable to connect to the database");
  }
};
