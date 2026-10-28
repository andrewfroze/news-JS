import BaseResponse from "./BaseResponse";
import NewsItem from "./newsItem";
import SourceItem from "./sourceItem";
import type { newsResponseType } from "./types";

class NewsResponseDto extends BaseResponse {
  
  private totalResults: number;
  private articles: NewsItem[];

  constructor(data: newsResponseType) {
    super( data['status'])
    this.totalResults = Number(data['totalResults']);
    this.articles = data['articles'].map((article) => new NewsItem(article));
  }

  public getTotalResults() {
    return this.totalResults;
  }

  public getArticles(): NewsItem[] {
    return this.articles;
  }

  public getSources(): SourceItem[] {
    return this.getArticles().map((article: NewsItem) => article.getSource());
  }
}

export default NewsResponseDto;