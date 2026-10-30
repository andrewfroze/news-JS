import SourceItem from "./sourceItem";
import type { stringOrEmpty, articleType } from "./types";

class NewsItem {

  private source: SourceItem;
  private author: stringOrEmpty;
  private title: stringOrEmpty;
  private description: stringOrEmpty;
  private url: stringOrEmpty;
  private urlToImage: stringOrEmpty;
  private publishedAt: Date;
  private content: stringOrEmpty;

  constructor(articleData: articleType) {
    const sourceData = articleData['source'];
    this.source = new SourceItem(sourceData);
    this.author = articleData['author'];
    this.title = articleData['title'];
    this.description = articleData['description'];
    this.url = articleData['url'];
    this.urlToImage = articleData['urlToImage'];
    this.publishedAt = new Date(articleData['publishedAt']);
    this.content = articleData['content'];
  }

  public getTitle(): string {
    return this.title ?? '';
  }

  public getDescription(): string {
    return this.description ?? '';
  }

  public getUrl(): string {
    return this.url ?? '';
  }

  public getAuthor(): string {
    return this.author ?? '';
  }

  public getSource(): SourceItem {
    return this.source;
  }

  public getUrlToImage(): string {
    return this.urlToImage ?? 'img/news_placeholder.jpg';
  }

  public getPublishedAtString(): string {
    return this.publishedAt.toString();
  }

  public getContent(): string {
    return this.content ?? '';
  }
}

export default NewsItem;