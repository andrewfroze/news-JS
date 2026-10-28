import './news.css';
import { NewsItem } from '../../model';
import type IView from '../view';

class News implements IView<NewsItem> {

  draw(data: NewsItem[]): void {
    const news: NewsItem[] = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

    const fragment: DocumentFragment = document.createDocumentFragment();
    const newsItemTemp: HTMLTemplateElement = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

    if (!newsItemTemp) {
      return;
    }

    news.forEach((item, idx) => {
      const newsClone: DocumentFragment = newsItemTemp.content.cloneNode(true) as DocumentFragment;
      const itemElement: HTMLElement = newsClone.querySelector('.news__item') as HTMLElement;

      if (idx % 2 && itemElement) {
          itemElement.classList.add('alt');
      }

      const photoElem: HTMLElement = newsClone.querySelector('.news__meta-photo') as HTMLElement;
      if (photoElem) {
        photoElem.style.backgroundImage = `url(${item.getUrlToImage()})`;
      }


      const authorElem: HTMLElement = newsClone.querySelector('.news__meta-author') as HTMLElement;
      if (authorElem) {
          authorElem.textContent = item.getAuthor() || item.getSource().getName();
      }

      const dateElem: HTMLElement = newsClone.querySelector('.news__meta-date') as HTMLElement;
      if (dateElem) {
          dateElem.textContent = item.getPublishedAtString()
              .slice(0, 10)
              .split('-')
              .reverse()
              .join('-');
      }

      const titleElem: HTMLElement = newsClone.querySelector('.news__description-title') as HTMLElement;
      if (titleElem) {
          titleElem.textContent = item.getTitle();
      }

      const sourceElem: HTMLElement = newsClone.querySelector('.news__description-source') as HTMLElement;
      if (sourceElem) {
          sourceElem.textContent = item.getSource().getName();
      }

      const contentElem: HTMLElement = newsClone.querySelector('.news__description-content') as HTMLElement;
      if (contentElem) {
          contentElem.textContent = item.getDescription();
      }

      const linkElem: HTMLElement = newsClone.querySelector('.news__read-more a') as HTMLElement;
      if (linkElem) {
          linkElem.setAttribute('href', item.getUrl());
      }

      fragment.append(newsClone);
    });

    const newsContainer: HTMLElement = document.querySelector('.news') as HTMLElement;
    if (newsContainer) {
        newsContainer.innerHTML = '';
        newsContainer.appendChild(fragment);
    }
  }
}

export default News;
