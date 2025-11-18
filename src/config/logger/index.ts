import devLogger from "./devLogger";
import uatLogger from "./uatLogger";

let logger: any = null;

if (process.env.APPLICATION_ENV === "development") {
  logger = devLogger();
} else if (process.env.APPLICATION_ENV === "uat") {
  logger = uatLogger();
}

export default logger;
