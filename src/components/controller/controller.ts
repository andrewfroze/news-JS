import Endpoint from '../../constants/endpoints';
import { NewsResponseDto, SourcesResponseDto } from '../model';
import type { newsResponseType, sourceResponseType, stringOrEmpty } from '../model/types';
import AppLoader from './appLoader';
import Request from "./request";

class AppController extends AppLoader {

    getSources(callback: (data: SourcesResponseDto ) => void): void {
        super.getResp(
            new Request(Endpoint.SOURCES),
            callback,
            (response: sourceResponseType) => new SourcesResponseDto(response)
        );
    }

    getNews(e: Event, callback: (data: NewsResponseDto) => void): void {
        let target: HTMLElement | null = e.target as HTMLElement | null;
        const newsContainer: HTMLElement = e.currentTarget as HTMLElement;

        while (target && target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId: stringOrEmpty = target.getAttribute('data-source-id');
                if (sourceId && newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        new Request (Endpoint.EVERYTHING, { sources: sourceId }),
                        callback,
                        (response: newsResponseType) => new NewsResponseDto(response)
                    );
                }
                return;
            }
            target = target.parentNode as HTMLElement | null;
        }
    }
}

export default AppController;
