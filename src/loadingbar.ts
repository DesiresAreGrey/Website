export class LoadingBar {
    private element: HTMLElement;

    private constructor() {
        const element = document.querySelector('#loading-bar');
        if (element) {
            this.element = element as HTMLElement;
        }
        else {
            this.element = document.createElement('div');
            this.element.id = 'loading-bar';
            document.body?.prepend(this.element);
        }
    }

    static start(): LoadingBar {
        const bar = new LoadingBar();
        bar.element.style.opacity = '1';
        bar.element.style.width = '5%';
        return bar;
    }

    update(progress: number) {
        this.element.style.width = `${progress * 100}%`;
    }

    finish() {
        this.element.style.transition = 'width 0.5s linear, opacity 0.5s ease';
        this.element.style.width = `100%`;
        setTimeout(() => this.element.style.opacity = '0', 250);
        setTimeout(() => this.element.remove(), 1000);
    }

    getProgress(): number {
        return parseFloat(this.element.style.width) / 100;
    };
}