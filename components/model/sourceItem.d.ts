import type { sourceType } from './types';
declare class SourceItem {
    private id;
    private name;
    constructor(data: sourceType);
    getIdString(): string;
    getName(): string;
    toJson(): sourceType;
}
export default SourceItem;
//# sourceMappingURL=sourceItem.d.ts.map