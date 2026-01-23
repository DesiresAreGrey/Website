export class LoadingBar {
    private element: HTMLElement;
    private lastUpdateTime: number;

    private constructor() {
        const element = document.querySelector('#loading-bar');
        if (element) {
            this.element = element as HTMLElement;
        }
        else {
            this.element = document.createElement('div');
            this.element.id = 'loading-bar';
            this.element.style = `
                position: fixed;
                top: 0;
                left: 0;
                height: 2px;
                background-color: var(--md-primary-fg-color);

                z-index: 9999;
                box-shadow: 0 0 20px 2px var(--md-primary-glow-color);

                transition: width 0.5s ease-out;

                width: 0%;
                opacity: 0;
            `;
            document.body?.prepend(this.element);
        }
        this.lastUpdateTime = performance.now();
    }

    static start(): LoadingBar {
        const bar = new LoadingBar();
        bar.element.style.opacity = '1';
        bar.element.style.width = '5%';
        return bar;
    }

    update(progress: number) {
        if (progress < 0) progress = 0;
        if (progress > 1) progress = 1;
        this.element.style.width = `${progress * 90 + 5}%`;
    }

    async updateAsync(progress: number, thresholdMs: number = 100): Promise<void> {
        if (performance.now() - this.lastUpdateTime > thresholdMs) {
            this.update(progress); 
            await new Promise(resolve => requestAnimationFrame(resolve));
            this.lastUpdateTime = performance.now();
        }
    }

    finish() {
        this.element.style.transition = 'width 0.5s linear, opacity 0.5s ease';
        this.element.style.width = `100%`;
        setTimeout(() => this.element.style.opacity = '0', 500);
        setTimeout(() => this.element.remove(), 1500);
    }

    getProgress(): number {
        return parseFloat(this.element.style.width) / 100;
    };
}