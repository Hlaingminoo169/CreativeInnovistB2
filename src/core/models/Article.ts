import { BaseModel } from "core/db/BaseModel";

export interface Article {
  postid?: number;
  post_name: string;
  post_title: string;
  post_description: string;
  created_at?: Date;
  updated_at?: Date;
}

export class ArticleModel extends BaseModel<Article> {
  pool: any;
  constructor() {
    super("articles");
  }

  async getAllSummary(): Promise<
    Pick<Article, "postid" | "post_name" | "post_title" | "post_description">[]
  > {
    const query = `
      SELECT 
        postid,
        post_name,
        post_title,
        post_description
      FROM ${this.tableName}
    `;
    const result = await this.pool.query(query);
    return result.rows;
  }
}
