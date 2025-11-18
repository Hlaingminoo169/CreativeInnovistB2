import developmentConfig from "./development";
import uatConfig from "./uat";

const environment: any = {
  development: developmentConfig,
  uat: uatConfig,
};

const currentEnv = process.env.APPLICATION_ENV || "development";

const config = environment[currentEnv];

export default config;
