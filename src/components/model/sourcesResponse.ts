import BaseResponse from "./BaseResponse";
import SourceItem from "./sourceItem";
import type { sourceResponseType } from "./types";

class SourcesResponseDto extends BaseResponse {

  private sources: SourceItem[];

  constructor(data: sourceResponseType) {
    super(data['status']);
    this.sources = data['sources'].map((source) => new SourceItem(source));
  }

  public getSources(): SourceItem[] {
    return this.sources;
  }
}

export { SourcesResponseDto as default }