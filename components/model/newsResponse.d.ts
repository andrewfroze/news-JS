import BaseResponse from './BaseResponse';
import NewsItem from './newsItem';
import SourceItem from './sourceItem';
import type { newsResponseType } from './types';
declare class NewsResponseDto extends BaseResponse {
    private totalResults;
    private articles;
    constructor(data: newsResponseType);
    getTotalResults(): number;
    getArticles(): NewsItem[];
    getSources(): SourceItem[];
    toJson(): newsResponseType;
}
export default NewsResponseDto;
//# sourceMappingURL=newsResponse.d.ts.map