class BurgerMenu {

  private burgerButton: HTMLButtonElement | null = document.querySelector<HTMLButtonElement>('.burger-menu');
  private sourcesContainer: HTMLElement | null = document.querySelector<HTMLElement>('.sources');
  private overlay: HTMLElement | null = document.querySelector<HTMLElement>('.overlay');
  private body: HTMLElement = document.body;

  public addBurgerMenuHandler(): void {
    this.addBurgerButtonHandler();
    this.addOverlayClickHandler()
    this.addEscapeKeyHandler();
  }

  private addBurgerButtonHandler(): void {
    if (this.burgerButton && this.sourcesContainer) {
      this.burgerButton.addEventListener('click', () => {
        this.body.classList.toggle('menu-open');
      });
    }
  }

  private addOverlayClickHandler(): void {
    if (this.overlay) {
      this.overlay.addEventListener('click', (event: Event) => {
        if (this.body.classList.contains('menu-open')) {
          if (event.target !== this.sourcesContainer) {
            this.body.classList.remove('menu-open');
          }
        }
      });
    }
  }

  private addEscapeKeyHandler(): void {
    document.addEventListener('keydown', (event: KeyboardEvent) => {
      if (this.body.classList.contains('menu-open')) {
        if (event.code === 'Escape') {
          this.body.classList.remove('menu-open');
        }
      }
    });
  }
}

export { BurgerMenu as default };