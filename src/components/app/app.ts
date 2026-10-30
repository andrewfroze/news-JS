import AppView from '../view';
import AppController from '../controller';
import { NewsResponseDto, SourcesResponseDto } from '../model';

class App {

  private controller: AppController;
  private view: AppView;

  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  start(): void {
    document
      .querySelector('.sources')
      ?.addEventListener('click', (e: Event) => this.controller.getNews(e, (data: NewsResponseDto) => this.view.drawNews(data)));
    this.controller.getSources((data: SourcesResponseDto) => this.view.drawSources(data));
    this.view.addBurgerMenuHandler();
  }
}

export { App as default }
