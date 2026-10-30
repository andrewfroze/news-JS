import type { sourceType } from "./types";

class SourceItem {

  private id: string | null;
  private name: string;

  constructor(data: sourceType) {
    this.id = data['id'];
    this.name = data['name'];
  }

  public getIdString(): string {
    return this.id ?? '';
  }

  public getName(): string {
    return this.name;
  }
}

export default SourceItem;