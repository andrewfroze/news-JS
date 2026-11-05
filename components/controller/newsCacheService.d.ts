import { NewsResponseDto, SourcesResponseDto } from '../model';
declare class NewsCacheService {
    private readonly cachePrefix;
    private readonly sourcesCacheKey;
    private readonly newsCacheTtl;
    private readonly sourcesCacheTtl;
    get(sourceId: string): NewsResponseDto | null;
    set(sourceId: string, data: NewsResponseDto): void;
    getSources(): SourcesResponseDto | null;
    setSources(data: SourcesResponseDto): void;
    remove(sourceId: string): void;
    clear(): void;
    private getCachedData;
    private setCachedData;
}
export default NewsCacheService;
//# sourceMappingURL=newsCacheService.d.ts.map