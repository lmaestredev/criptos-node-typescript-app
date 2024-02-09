import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("flixxo", "admin", "admin", {
  host: "localhost",
  dialect: "postgres",
});

export const testConnect = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection to database has been established successfully");
  } catch (error) {
    console.error("Unable to connect to the database");
  }
};
