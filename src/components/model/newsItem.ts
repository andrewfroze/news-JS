import SourceItem from "./sourceItem";

type stringOrEmpty = string | null | undefined;

class NewsItem {

  private source: SourceItem;
  private author: stringOrEmpty;
  private title: stringOrEmpty;
  private description: stringOrEmpty;
  private url: stringOrEmpty;
  private urlToImage: stringOrEmpty;
  private publishedAt: Date;
  private content: stringOrEmpty;

  constructor(
    source: SourceItem,
    author: stringOrEmpty,
    title: stringOrEmpty,
    description: stringOrEmpty,
    url: stringOrEmpty,
    urlToImage: stringOrEmpty,
    publishedAt: Date,
    content: stringOrEmpty
  ) {
    this.source = source;
    this.author = author;
    this.title = title;
    this.description = description;
    this.url = url;
    this.urlToImage = urlToImage;
    this.publishedAt = publishedAt;
    this.content = content;
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