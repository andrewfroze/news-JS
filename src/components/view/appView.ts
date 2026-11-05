import { NewsResponseDto, SourcesResponseDto } from '../model';
import BurgerMenu from './navigation/burgerMenu';
import News from './news';
import Sources from './sources';
import type IView from './view';

export class AppView {
    private burger: BurgerMenu;
    private news: News;
    private sources: Sources;

    public constructor() {
        this.burger = new BurgerMenu();
        this.news = new News();
        this.sources = new Sources();
    }

    public drawNews(data: NewsResponseDto): void {
        this.drawItems(data?.getArticles(), this.news);
    }

    public drawSources(data: SourcesResponseDto): void {
        this.drawItems(data?.getSources(), this.sources);
    }

    public addBurgerMenuHandler(): void {
        this.burger.addBurgerMenuHandler();
    }

    private drawItems<T>(items: T[] | undefined | null, view: IView<T>): void {
        view.draw(items ?? []);
    }
}

export default AppView;
