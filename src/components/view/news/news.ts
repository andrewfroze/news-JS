import './news.module.css';
import { NewsItem } from '../../model';
import type IView from '../view';

class News implements IView<NewsItem> {

  draw(data: NewsItem[]) {
    const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

    const fragment = document.createDocumentFragment();
    const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

    if (!newsItemTemp) {
      return;
    }

    news.forEach((item, idx) => {
      const newsClone = newsItemTemp.content.cloneNode(true) as DocumentFragment;
      const itemElement = newsClone.querySelector('.news__item') as HTMLElement;

      if (idx % 2 && itemElement) {
          itemElement.classList.add('alt');
      }

      const photoElem = newsClone.querySelector('.news__meta-photo') as HTMLElement;
      if (photoElem) {
        photoElem.style.backgroundImage = `url(${item.getUrlToImage()})`;
      }


      const authorElem = newsClone.querySelector('.news__meta-author');
      if (authorElem) {
          authorElem.textContent = item.getAuthor() || item.getSource().getName();
      }

      const dateElem = newsClone.querySelector('.news__meta-date');
      if (dateElem) {
          dateElem.textContent = item.getPublishedAtString()
              .slice(0, 10)
              .split('-')
              .reverse()
              .join('-');
      }

      const titleElem = newsClone.querySelector('.news__description-title');
      if (titleElem) {
          titleElem.textContent = item.getTitle();
      }

      const sourceElem = newsClone.querySelector('.news__description-source');
      if (sourceElem) {
          sourceElem.textContent = item.getSource().getName();
      }

      const contentElem = newsClone.querySelector('.news__description-content');
      if (contentElem) {
          contentElem.textContent = item.getDescription();
      }

      const linkElem = newsClone.querySelector('.news__read-more a');
      if (linkElem) {
          linkElem.setAttribute('href', item.getUrl());
      }

      fragment.append(newsClone);
    });

    const newsContainer = document.querySelector('.news');
    if (newsContainer) {
        newsContainer.innerHTML = '';
        newsContainer.appendChild(fragment);
    }
  }
}

export default News;
