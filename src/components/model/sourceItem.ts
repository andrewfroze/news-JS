class SourceItem {

  private id: string | null;
  private name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }

  public getIdString(): string {
    return this.id ?? '';
  }

  public getName(): string {
    return this.name;
  }
}

export default SourceItem;