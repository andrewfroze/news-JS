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

  public toJson(): sourceResponseType {
    return {
      status: this.getStatus(),
      sources: this.sources.map((source) => source.toJson()),
    }
  }
}

export { SourcesResponseDto as default }