import Endpoint from '../../constants/endpoints';
import { NewsResponseDto, SourcesResponseDto, SourceItem } from '../model';
import type { ElementOrNull, newsResponseType, sourceResponseType, stringOrEmpty } from '../model/types';
import AppLoader from './appLoader';
import Request from "./request";

class AppController extends AppLoader {

    getSources(callback: (data: SourcesResponseDto) => void): void {
        super.getResp(
            new Request(Endpoint.SOURCES),
            callback,
            (response: sourceResponseType) => new SourcesResponseDto(response)
        );
    }

    loadInitialNews(data: SourcesResponseDto, drawNewsCallback: (data: NewsResponseDto) => void): void {
        this.loadNewsFromNextSource(data.getSources(), 0, drawNewsCallback);
    }

    private loadNewsFromNextSource(
        sources: SourceItem[],
        index: number,
        callback: (data: NewsResponseDto) => void
    ): void {
        if (index >= sources.length) {
            return;
        }

        const source = sources[index];
        if (!source) {
            return;
        }

        const sourceId = source.getIdString();

        this.getNews(sourceId, (data: NewsResponseDto) => {
            if (data.getArticles().length > 0) {
                const sourceElement = document.querySelector<HTMLElement>(
                    `.source__item[data-source-id="${sourceId}"]`
                );

                if (sourceElement) {
                    this.markSourceAsActive(sourceElement);
                }

                document.querySelector('.news')?.setAttribute('data-source', sourceId);

                callback(data);
                return;
            }

            this.loadNewsFromNextSource(sources, index + 1, callback);
        });
    }

    handleSourceSelection(e: Event, callback: (data: NewsResponseDto) => void): void {
        let target: ElementOrNull = e.target as ElementOrNull;
        const newsContainer: HTMLElement = e.currentTarget as HTMLElement;

        while (target && target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId: stringOrEmpty = target.getAttribute('data-source-id');
                this.markSourceAsActive(target);
                if (sourceId && newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    this.getNews(sourceId, callback);
                }
                return;
            }
            target = target.parentNode as ElementOrNull;
        }
    }

    getNews(sourceId: string, callback: (data: NewsResponseDto) => void): void {
        super.getResp(
            new Request (Endpoint.EVERYTHING, { sources: sourceId }),
            callback,
            (response: newsResponseType) => new NewsResponseDto(response)
        );
    }

    private markSourceAsActive(sourceElement: HTMLElement): void {
        const activeSources: NodeListOf<HTMLElement> = document.querySelectorAll('.source__item.active');
        activeSources.forEach((source) => source.classList.remove('active'));
        sourceElement.classList.add('active');
    }
}

export default AppController;
