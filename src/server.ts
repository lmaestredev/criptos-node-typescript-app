// import bodyParser from "body-parser";
import { config as dotEnvConfig } from "dotenv";
import express, { Application } from "express";

import { config } from "./config/config";
import { connect } from "./connections/sequelize-connection";
import { healthRouter } from "./health/health-router";
import { criptoRouter } from "./cripto/infrastructure/inbound/routers/cripto-router";
import { priceRouter } from "./price/infrastructure/inbound/routers/price-router"; 

dotEnvConfig();
const { port } = config.server;

export class Server {
  private app: Application;
  private port: number;

  constructor(app: Application = express()) {
    this.app = app;
    this.port = port;
  }

  async dbConnection(): Promise<void> {
    await connect();
  }

  async start(): Promise<void> {
    await this.dbConnection();

    // Middlewares
    // this.app.use(bodyParser.json());
    this.app.use(express.json());

    // Rutas de mi aplicación
    this.app.use("/api/v1/flixxo-app/health", healthRouter);
    this.app.use("/api/v1/flixxo-app/cripto", criptoRouter);
    this.app.use("/api/v1/flixxo-app/price", priceRouter);

    await this.app.listen(this.port, async () => {
      console.log(`[APP] - Starting application on port ${this.port}`);
    });
  }
}
