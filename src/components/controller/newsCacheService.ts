
import { NewsResponseDto, SourcesResponseDto } from '../model';
import type { newsResponseType, sourceResponseType } from '../model/types';

interface CacheEntry<T> {
    data: T;
    cachedAt: number;
}

class NewsCacheService {
    private readonly cachePrefix = 'news-cache:';
    private readonly sourcesCacheKey = 'sources-cache';

    private readonly newsCacheTtl = 60 * 60 * 1000; // 1 hour
    private readonly sourcesCacheTtl = 24 * 60 * 60 * 1000; // 24 hours

    get(sourceId: string): NewsResponseDto | null {
        const cached: newsResponseType | null = this.getCachedData<newsResponseType>(
            `${this.cachePrefix}${sourceId}`,
            this.newsCacheTtl
        );

        return cached ? new NewsResponseDto(cached) : null;
    }

    set(sourceId: string, data: NewsResponseDto): void {
        this.setCachedData(
            `${this.cachePrefix}${sourceId}`,
            data.toJson()
        );
    }

    getSources(): SourcesResponseDto | null {
        const cached: sourceResponseType | null = this.getCachedData<sourceResponseType>(
            this.sourcesCacheKey,
            this.sourcesCacheTtl
        );

        return cached ? new SourcesResponseDto(cached) : null;
    }

    setSources(data: SourcesResponseDto): void {
        this.setCachedData(
            this.sourcesCacheKey,
            data.toJson()
        );
    }

    remove(sourceId: string): void {
        localStorage.removeItem(`${this.cachePrefix}${sourceId}`);
    }

    clear(): void {
        Object.keys(localStorage)
            .filter((key) =>
                key.startsWith(this.cachePrefix) ||
                key === this.sourcesCacheKey
            )
            .forEach((key) => localStorage.removeItem(key));
    }

    private getCachedData<T>(key: string, ttl: number): T | null {
        const cached: string | null = localStorage.getItem(key);

        if (!cached) {
            return null;
        }

        try {
            const entry = JSON.parse(cached) as CacheEntry<T>;

            if (Date.now() - entry.cachedAt >= ttl) {
                localStorage.removeItem(key);
                return null;
            }

            return entry.data;
        } catch {
            localStorage.removeItem(key);
            return null;
        }
    }

    private setCachedData<T>(key: string, data: T): void {
        const entry: CacheEntry<T> = {
            data,
            cachedAt: Date.now()
        };

        try {
            localStorage.setItem(key, JSON.stringify(entry));
        } catch (error) {
            console.warn('Unable to save cache:', error);
        }
    }
}

export default NewsCacheService;
