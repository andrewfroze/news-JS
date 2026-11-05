import Request from './request';
import type Endpoint from '../../constants/endpoints';
declare class Loader {
    private baseLink;
    private options;
    constructor(baseLink: string, options: object);
    getResp<T, R = T>(request: Request, callback?: (data: R) => void, mapFn?: (data: T) => R): void;
    errorHandler(res: Response): Response;
    makeUrl(options: object, endpoint: Endpoint): string;
    load<T, R = T>(method: string, endpoint: Endpoint, callback: (data: R) => void, options?: object, mapFn?: (data: T) => R): void;
}
export default Loader;
//# sourceMappingURL=loader.d.ts.map