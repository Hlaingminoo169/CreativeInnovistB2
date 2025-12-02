import "dotenv/config";
import App from "./app";
import { UserController } from "core/controllers/user.controller";
import { ArticleController } from "core/controllers/article.controller";

async function bootstrap() {
  const port = process.env.APPLICATION_PORT
    ? Number(process.env.APPLICATION_PORT)
    : 3000;

  const app = new App(port, [UserController, ArticleController], "/v1");

  app.listen();
}

bootstrap();
