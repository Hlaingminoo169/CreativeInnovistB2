import logger from "config/logger";
import { DataBuilder } from "core/db/DataBuilder";
import { Controller, Get } from "routing-controllers";

@Controller()
export class ArticleController {
  @Get("/articles")
  async getAllArticles() {
    logger.info("Get all articles request received");
    const articles = await DataBuilder.Article.getAll();

    return articles;
  }
}
