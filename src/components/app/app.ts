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
    const drawNews: (data: NewsResponseDto) => void = (data: NewsResponseDto) => this.view.drawNews(data);
    document
      .querySelector('.sources')
      ?.addEventListener('click', (e: Event) => this.controller.handleSourceSelection(e, drawNews));
    this.controller.getSources((data: SourcesResponseDto) => {
      this.view.drawSources(data);
        this.controller.loadInitialNews(data, drawNews);
      }
    );
    this.view.addBurgerMenuHandler();
  }
}

export { App as default }
