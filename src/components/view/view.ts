interface IView<T> {

  draw(data: T[]): void;
}

export type { IView as default };