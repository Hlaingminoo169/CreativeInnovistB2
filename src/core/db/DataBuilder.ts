import { UserModel } from "core/models/User";
import { ArticleModel } from "core/models/Article";

export class DataBuilder {
  private static instance: Map<string, any> = new Map();

  static get User() {
    if (!this.instance.has("user")) {
      this.instance.set("user", new UserModel());
    }
    return this.instance.get("user") as UserModel;
  }

  static get Article() {
    if (!this.instance.has("article")) {
      this.instance.set("article", new ArticleModel());
    }
    return this.instance.get("article") as ArticleModel;
  }
}

export const DB = DataBuilder;
