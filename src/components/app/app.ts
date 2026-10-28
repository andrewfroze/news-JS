import AppView from '../view';
import AppController from '../controller';
import NewsResponse from '../model';

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
      ?.addEventListener('click', (e) => this.controller.getNews(e, (data: NewsResponse) => this.view.drawNews(data)));
    this.controller.getSources((data: NewsResponse) => this.view.drawSources(data));
  }
}

export { App as default }
