import { NewsResponseDto, SourcesResponseDto } from '../model';
export declare class AppView {
    private burger;
    private news;
    private sources;
    constructor();
    drawNews(data: NewsResponseDto): void;
    drawSources(data: SourcesResponseDto): void;
    addBurgerMenuHandler(): void;
    private drawItems;
}
export default AppView;
//# sourceMappingURL=appView.d.ts.map