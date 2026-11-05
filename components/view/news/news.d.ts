import './news.css';
import { NewsItem } from '../../model';
import type IView from '../view';
declare class News implements IView<NewsItem> {
    draw(data: NewsItem[]): void;
}
export default News;
//# sourceMappingURL=news.d.ts.map