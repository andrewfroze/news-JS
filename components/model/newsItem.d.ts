import SourceItem from './sourceItem';
import type { articleType } from './types';
declare class NewsItem {
    private source;
    private author;
    private title;
    private description;
    private url;
    private urlToImage;
    private publishedAt;
    private content;
    constructor(articleData: articleType);
    getTitle(): string;
    getDescription(): string;
    getUrl(): string;
    getAuthor(): string;
    getSource(): SourceItem;
    getUrlToImage(): string;
    getPublishedAtString(): string;
    getContent(): string;
    toJson(): articleType;
}
export default NewsItem;
//# sourceMappingURL=newsItem.d.ts.map