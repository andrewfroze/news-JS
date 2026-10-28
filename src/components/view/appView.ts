import NewsResponse from '../model';
import News from './news';
import Sources from './sources';

export class AppView {

    private news: News;
    private sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: NewsResponse) {
        const articles = data?.getArticles();
        const values = articles ? articles : [];
        this.news.draw(values);
    }

    drawSources(data: NewsResponse) {
        const sources = data?.getSources();
        const values = sources ? sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
