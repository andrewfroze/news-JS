import BaseResponse from './BaseResponse';
import NewsItem from './newsItem';
import SourceItem from './sourceItem';
import type { newsResponseType } from './types';

class NewsResponseDto extends BaseResponse {
    private totalResults: number;
    private articles: NewsItem[];

    public constructor(data: newsResponseType) {
        super(data['status']);
        this.totalResults = Number(data['totalResults']);
        this.articles = data['articles'].map((article) => new NewsItem(article));
    }

    public getTotalResults(): number {
        return this.totalResults;
    }

    public getArticles(): NewsItem[] {
        return this.articles;
    }

    public getSources(): SourceItem[] {
        return this.getArticles().map((article: NewsItem) => article.getSource());
    }

    public toJson(): newsResponseType {
        return {
            status: this.getStatus(),
            totalResults: this.totalResults,
            articles: this.articles.map((article) => article.toJson()),
        };
    }
}

export default NewsResponseDto;
