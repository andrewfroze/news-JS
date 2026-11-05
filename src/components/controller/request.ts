import type Endpoint from '../../constants/endpoints';

class Request {
    private endpoint: Endpoint;
    private options: object;

    public constructor(endpoint: Endpoint, options: object = {}) {
        this.endpoint = endpoint;
        this.options = options;
    }

    public getEndpoint(): Endpoint {
        return this.endpoint;
    }

    public getOptions(): object {
        return this.options;
    }
}

export default Request;
