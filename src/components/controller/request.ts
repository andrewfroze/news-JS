import type Endpoint from "../../constants/endpoints";

class Request {
  private endpoint: Endpoint;
  private options: object;
  
  constructor (endpoint: Endpoint, options: object = {}) {
    this.endpoint = endpoint;
    this.options = options;
  }

  getEndpoint(): Endpoint {
    return this.endpoint;
  }

  getOptions(): object {
    return this.options;
  }
}

export default Request;