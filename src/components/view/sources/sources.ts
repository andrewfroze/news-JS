import { SourceItem } from '../../model';
import type IView from '../view';
import './sources.css';

class Sources implements IView<SourceItem> {

  draw(data: SourceItem[]) {
    const fragment = document.createDocumentFragment();
    const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

    if (!sourceItemTemp) {
      return;
    }

    data.forEach((item: SourceItem) => {
      const sourceClone = sourceItemTemp.content.cloneNode(true) as DocumentFragment;

      const itemNameElem = sourceClone.querySelector('.source__item-name') as HTMLElement;
      
      if (itemNameElem) {
        itemNameElem.textContent = item.getName();
      }

      const sourceItemElem = sourceClone.querySelector('.source__item') as HTMLElement;
      if (sourceItemElem) {
        sourceItemElem.setAttribute('data-source-id', item.getIdString());
      }
      
      fragment.append(sourceClone);
    });

    const sourcesContainer = document.querySelector('.sources');
    if (sourcesContainer) {
      sourcesContainer.append(fragment);
    }
  }
}

export default Sources;
