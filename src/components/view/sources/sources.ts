import { SourceItem } from '../../model';
import type IView from '../view';
import './sources.css';

class Sources implements IView<SourceItem> {

  draw(data: SourceItem[]): void {
    const fragment = document.createDocumentFragment();
    const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

    if (!sourceItemTemp) {
      return;
    }

    data.forEach((item: SourceItem) => {
      const sourceClone: DocumentFragment = sourceItemTemp.content.cloneNode(true) as DocumentFragment;

      const itemNameElem: HTMLElement = sourceClone.querySelector('.source__item-name') as HTMLElement;
      
      if (itemNameElem) {
        itemNameElem.textContent = item.getName();
      }

      const sourceItemElem: HTMLElement = sourceClone.querySelector('.source__item') as HTMLElement;
      if (sourceItemElem) {
        sourceItemElem.setAttribute('data-source-id', item.getIdString());
      }
      
      fragment.append(sourceClone);
    });

    const sourcesContainer: HTMLElement = document.querySelector('.sources') as HTMLElement;
    if (sourcesContainer) {
      sourcesContainer.append(fragment);
    }
  }
}

export default Sources;
