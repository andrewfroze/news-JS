import BaseResponse from './BaseResponse';
import SourceItem from './sourceItem';
import type { sourceResponseType } from './types';
declare class SourcesResponseDto extends BaseResponse {
    private sources;
    constructor(data: sourceResponseType);
    getSources(): SourceItem[];
    toJson(): sourceResponseType;
}
export { SourcesResponseDto as default };
//# sourceMappingURL=sourcesResponse.d.ts.map