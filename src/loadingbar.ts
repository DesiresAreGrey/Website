export class LoadingBar {
    private element: HTMLElement;

    private _progress: number = 0;
    public get progress(): number {
        return this._progress;
    };

    private lastUpdateTime: number = performance.now();

    private static _barActive: boolean = false;
    public static get barActive(): boolean {
        return this._barActive;
    };

    private constructor() {
        document.querySelector('#loading-bar')?.remove();

        const header = document.querySelector('header');
        
        this.element = document.createElement('div');
        this.element.id = 'loading-bar';
        this.element.style.cssText = `
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0%;
            opacity: 0;
            height: 2px;
            z-index: 9999;
            pointer-events: none;

            background-color: var(--md-primary-fg-color);
            box-shadow: 0 0 8px var(--md-primary-glow-color);

            transition: width 250ms ease-out;
        `;
        if (!header || header.offsetHeight < 5) {
            this.element.style.top = '0';
            document.body?.prepend(this.element);
        }
        else {
            header!.appendChild(this.element);
        }
    }

    static start(): LoadingBar {
        const bar = new LoadingBar();
        bar.element.style.opacity = '1';
        bar.element.style.width = '5%';
        LoadingBar._barActive = true;
        return bar;
    }

    update(progress: number) {
        if (progress < 0) progress = 0;
        if (progress > 1) progress = 1;
        this._progress = progress;
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
        this._progress = 1;
        LoadingBar._barActive = false;

        this.element.style.transition = 'width 250ms ease-out, opacity 500ms ease';
        this.element.style.width = `100%`;
        setTimeout(() => this.element.style.opacity = '0', 500);
        setTimeout(() => this.element.remove(), 1500);
    }
}