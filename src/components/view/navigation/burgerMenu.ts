class BurgerMenu {

  private burgerButton: HTMLButtonElement = document.querySelector('.burger-menu') as HTMLButtonElement;
  private sourcesContainer: HTMLElement = document.querySelector('.sources') as HTMLElement;
  private overlay: HTMLElement = document.querySelector('.overlay') as HTMLElement;
  private body: HTMLElement = document.body;

  public addBurgerMenuHandler() {
    this.addBurgerButtonHandler();
    this.addOverlayClickHandler()
    this.addEscapeKeyHandler();
  }

  private addBurgerButtonHandler() {
    if (this.burgerButton && this.sourcesContainer) {
      this.burgerButton.addEventListener('click', () => {
        this.body.classList.toggle('menu-open');
      });
    }
  }

  private addOverlayClickHandler() {
    this.overlay.addEventListener('click', (event: Event) => {
      if (this.body.classList.contains('menu-open')) {
        if (event.target !== this.sourcesContainer) {
          this.body.classList.remove('menu-open');
        }
      }
    });
  }

  private addEscapeKeyHandler() {
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