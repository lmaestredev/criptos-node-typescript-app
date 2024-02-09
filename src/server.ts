import { connect } from "./common/sequelize-connection";
import bodyParser from "body-parser";
import { config as dotEnvConfig } from "dotenv";
import express, { Application } from "express";
import { config } from "./common/config";
import { healthRouter } from "./health/health-router";
import { criptoRouter } from "./criptos/infrastructure/inbound/cripto-router";

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
    await this.dbConnection(); // Call to connect before listening

    // Middlewares
    this.app.use(bodyParser.json());
    // Rutas de mi aplicación
    this.app.use("/v1/flixxo-app/cripto", criptoRouter);
    this.app.use("/api/v1/flixxo-app/health", healthRouter);

    await this.app.listen(this.port, async () => {
      console.log(`[APP] - Starting application on port ${this.port}`);
    });
  }
}
