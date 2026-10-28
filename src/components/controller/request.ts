class Request {
  private endpoint: string;
  private options: object;
  
  constructor (endpoint: string, options: object = {}) {
    this.endpoint = endpoint;
    this.options = options;
  }

  getEndpoint(): string {
    return this.endpoint;
  }

  getOptions(): object {
    return this.options;
  }
}

export default Request;