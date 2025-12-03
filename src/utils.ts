export {}; 

declare global {
    type LengthUnit = "centimeters" | "inches";

    interface NodeListOf<TNode extends Node> {
        toArray(): TNode[];
    }

    interface HTMLCollection {
        toArray(): Element[];
    }

    interface HTMLElement {
        $<T extends HTMLElement>(selector: string): T | null;
        $$<T extends HTMLElement>(selector: string): NodeListOf<T>;
        appendHtml(htmlString: string): void;
    }

    interface Number {
        roundTo(precision?: number): number;
        floorTo(precision?: number): number;

        mult(multiplier: number): number;
        multFloor(multiplier: number): number;
        multRound(multiplier: number): number;

        toFeetInches(decimals?: number, fromUnit?: LengthUnit): string;
        asInches(fromUnit?: LengthUnit): number;
        asCm(fromUnit?: LengthUnit): number;
    }

    function loaded(): Promise<void>;

    function $<T extends HTMLElement>(selector: string): T | null;
    function $$<T extends HTMLElement>(selector: string): NodeListOf<T>;
}

Object.defineProperty(NodeList.prototype, 'toArray', { value: function() { return [...this]; } });

Object.defineProperty(HTMLCollection.prototype, 'toArray', { value: function() { return [...this]; } });

Object.defineProperty(HTMLElement.prototype, '$', { value: function(this: HTMLElement, selector: string) { return this.querySelector(selector); } });
Object.defineProperty(HTMLElement.prototype, '$$', { value: function(this: HTMLElement, selector: string) { return this.querySelectorAll(selector); } });

Object.defineProperty(HTMLElement.prototype, 'appendHtml', { 
    value: function(this: HTMLElement, htmlString: string) { this.insertAdjacentHTML('beforeend', htmlString); } 
});

Object.defineProperty(Number.prototype, 'roundTo', { 
    value: function(this: number, precision = 0) { return Number(this.toFixed(precision)) } 
});
Object.defineProperty(Number.prototype, 'floorTo', { 
    value: function(this: number, precision = 0) { return Math.floor(this * (10 ** precision)) / (10 ** precision) } 
});

Object.defineProperty(Number.prototype, 'mult', { value: function(this: number, multiplier: number) { return this * multiplier } });
Object.defineProperty(Number.prototype, 'multFloor', { value: function(this: number, multiplier: number) { return Math.floor(this * multiplier) } });
Object.defineProperty(Number.prototype, 'multRound', { value: function(this: number, multiplier: number) { return Math.round(this * multiplier) } });

Object.defineProperty(Number.prototype, 'toFeetInches', { 
    value: function(this: number, decimals: number = 0, fromUnit: LengthUnit = "inches") { 
        const totalInches = this.asInches(fromUnit);
        const feet = Math.floor(totalInches / 12);
        const inches = (totalInches - feet * 12).roundTo(decimals);
        return `${feet}'${inches}"`;
    }
});

Object.defineProperty(Number.prototype, 'asInches', { 
    value: function(this: number, fromUnit: LengthUnit = "centimeters") { 
        return fromUnit === "centimeters" ? this / 2.54 : this;
    } 
});

Object.defineProperty(Number.prototype, 'asCm', { 
    value: function(this: number, fromUnit: LengthUnit = "inches") { 
        return fromUnit === "inches" ? this * 2.54 : this;
    } 
});

window.loaded = () => new Promise<void>(resolve => {
    document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", () => resolve(), { once: true }) : resolve();
});

window.$ = (selector) => document.querySelector(selector);
window.$$ = (selector) => document.querySelectorAll(selector);