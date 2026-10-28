import NewsResponse from '../model';
import AppLoader from './appLoader';
import Request from "./request";

class AppController extends AppLoader {
    getSources(callback: (data: NewsResponse) => void): void {
        super.getResp(
            new Request('sources'),
            callback
        );
    }

    getNews(e: Event, callback: (data: NewsResponse) => void): void {
        let target = e.target as HTMLElement | null;
        const newsContainer = e.currentTarget as HTMLElement;

        while (target && target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                if (sourceId && newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        new Request ('everything', { sources: sourceId }),
                        callback
                    );
                }
                return;
            }
            target = target.parentNode as HTMLElement | null;
        }
    }
}

export default AppController;
