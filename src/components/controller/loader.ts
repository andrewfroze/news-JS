import Request from "./request";
import type Endpoint from "../../constants/endpoints";

class Loader {

    private baseLink: string;
    private options: object;

    constructor(baseLink: string, options: object) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp<T, R = T>(
        request: Request,
        callback: (data: R) => void = () => {
            console.error('No callback for GET response');
        },
        mapFn?: (data: T) => R,
    ): void {
        this.load('GET', request.getEndpoint(), callback, request.getOptions(), mapFn);
    }

    errorHandler(res: Response): Response {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options: object, endpoint: Endpoint): string {
        const urlOptions: object = { ...this.options, ...options };
        let url: string = `${this.baseLink}${endpoint}?`;

        Object.entries(urlOptions).forEach(([key, value]: [string, string]) => {
            url += `${key}=${value}&`;
        });

        return url.slice(0, -1);
    }

    load<T, R = T>(
        method: string,
        endpoint: Endpoint,
        callback: (data: R) => void,
        options: object = {},
        mapFn?: (data: T) => R,
    ): void {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res: Response) => res.json())
            .then((data: T) => {
                const result = mapFn ? mapFn(data) : (data as unknown as R);
                callback(result);
            })
            .catch((err: Error) => console.error(err));
    }
}

export default Loader;
