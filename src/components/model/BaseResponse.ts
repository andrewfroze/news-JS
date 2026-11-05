abstract class BaseResponse {
    private status: string;

    public constructor(status: string) {
        this.status = status;
    }

    public getStatus(): string {
        return this.status;
    }
}

export { BaseResponse as default };
