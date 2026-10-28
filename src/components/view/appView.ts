import { NewsResponseDto, SourcesResponseDto } from '../model';
import News from './news';
import Sources from './sources';
import type IView from './view';

export class AppView {

  private news: News;
  private sources: Sources;

  constructor() {
    this.news = new News();
    this.sources = new Sources();
  }

  drawNews(data: NewsResponseDto): void {
    this.drawItems(data?.getArticles(), this.news);
  }

  drawSources(data: SourcesResponseDto): void {
    this.drawItems(data?.getSources(), this.sources);
  }

  drawItems<T>(items: T[] | undefined | null, view: IView<T>): void {
    view.draw(items ?? []);
  }
}

export default AppView;
