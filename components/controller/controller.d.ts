import { NewsResponseDto, SourcesResponseDto } from '../model';
import AppLoader from './appLoader';
declare class AppController extends AppLoader {
    private newsCache;
    private pendingNews;
    getSources(callback: (data: SourcesResponseDto) => void): void;
    loadInitialNews(data: SourcesResponseDto, drawNewsCallback: (data: NewsResponseDto) => void): void;
    private loadNewsFromNextSource;
    handleSourceSelection(e: Event, callback: (data: NewsResponseDto) => void): void;
    getNews(sourceId: string, callback: (data: NewsResponseDto) => void): void;
    private markSourceAsActive;
}
export default AppController;
//# sourceMappingURL=controller.d.ts.map