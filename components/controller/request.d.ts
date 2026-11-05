import type Endpoint from '../../constants/endpoints';
declare class Request {
    private endpoint;
    private options;
    constructor(endpoint: Endpoint, options?: object);
    getEndpoint(): Endpoint;
    getOptions(): object;
}
export default Request;
//# sourceMappingURL=request.d.ts.map