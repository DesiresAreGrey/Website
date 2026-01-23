export class LoadingBar {
    private static instance: LoadingBar | null = null;

    public static get isActive(): boolean {
        return this.instance?.element?.style.opacity === '1';
    };

    private element: HTMLElement;

    private _progress: number = 0;
    public get progress(): number {
        return this._progress;
    };

    private lastUpdateTime: number = performance.now();

    private constructor() {
        document.getElementById('loading-bar')?.remove();

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

    static start() {
        LoadingBar.instance ??= new LoadingBar();

        LoadingBar.instance.element.style.transition = 'opacity 250ms ease';
        LoadingBar.instance.element.style.opacity = '0';
        LoadingBar.instance.element.style.width = '5%';

        void LoadingBar.instance.element.offsetWidth;

        LoadingBar.instance.element.style.opacity = '1';
        LoadingBar.instance.element.style.transition = 'width 500ms ease-out, opacity 250ms ease';

        LoadingBar.instance._progress = 0;
    }

    static update(progress: number) {
        if (!LoadingBar.instance)
            return;

        if (progress < 0) progress = 0;
        if (progress > 1) progress = 1;

        LoadingBar.instance._progress = progress;
        LoadingBar.instance.element.style.width = `${progress * 90 + 5}%`;
    }

    static async updateAsync(progress: number, thresholdMs: number = 100): Promise<void> {
        if (!LoadingBar.instance)
            return;

        if (performance.now() - LoadingBar.instance.lastUpdateTime > thresholdMs) {
            LoadingBar.update(progress); 
            await new Promise(resolve => requestAnimationFrame(resolve));
            LoadingBar.instance.lastUpdateTime = performance.now();
        }
    }

    static finish() {
        if (!LoadingBar.instance)
            return;
        
        LoadingBar.instance.element.style.transition = 'width 500ms ease-out, opacity 500ms ease';
        LoadingBar.instance._progress = 1;
        LoadingBar.instance.element.style.width = `100%`;
        setTimeout(() => LoadingBar.instance?.element.style.setProperty('opacity', '0'), 500);
    }
}