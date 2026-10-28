import NewsItem from "./newsItem";
import SourceItem from "./sourceItem";

class NewsResponse {
  private status: string;
  private totalResults: number;
  private articles: NewsItem[];

  constructor(
    status: string,
    totalResults: number,
    articles: NewsItem[]
  ) {
    this.status = status;
    this.totalResults = totalResults;
    this.articles = articles;
  }

  public getStatus(): string {
    return this.status;
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

export default NewsResponse;