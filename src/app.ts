import express, { Application } from "express";
import logger from "./config/logger";
import environment from "./config/env";
import dotenv from "dotenv";
import pkg from "pg";

const { Client } = pkg;
dotenv.config();

class App {
  public express: Application;
  public port: number;

  constructor(port: number) {
    this.express = express();
    this.port = port;

    this.initiateDatabaseConnection();
  }

  // DB Connection (PostgreSQL - Same structure as Mongo version)
  private initiateDatabaseConnection(): void {
    const { name, dataStore } = environment;
    const { host, port, database, username, password } = dataStore;

    const client = new Client({
      host,
      port,
      database,
      user: username,
      password,
    });

    client
      .connect()
      .then(() => {
        logger.info(`Connected to PostgreSQL for ${name}`);
        return client.query("SELECT NOW() AS now");
      })
      .then((result) => {
        logger.info(`PostgreSQL Time: ${result.rows[0].now}`);
      })
      .catch((error) => {
        logger.error("Error connecting to PostgreSQL:", error);
        process.exit(1);
      });
  }

  public listen(): void {
    this.express.listen(this.port, () => {
      logger.info(`Server is running on port ${this.port}`);
    });
  }
}

export default App;
