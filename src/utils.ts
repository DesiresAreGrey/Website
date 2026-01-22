export {}; 

declare global {
    type UnitSystem = "metric" | "imperial";

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

    interface Object {
        toJson(): string;
    }

    interface String {
        parseJson(): any | null;
        parseFloat(): number | null;
    }

    interface Number {
        roundTo(precision?: number): number;
        floorTo(precision?: number): number;

        abs(): number;

        mult(multiplier: number): number;
        multFloor(multiplier: number): number;
        multRound(multiplier: number): number;

        appendOrdinal(): string;

        toFeetInches(decimals?: number, fromUnit?: UnitSystem): string;
        asInches(fromUnit?: UnitSystem): number;
        asCm(fromUnit?: UnitSystem): number;
        asPounds(fromUnit?: UnitSystem): number;
        asKg(fromUnit?: UnitSystem): number;
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

Object.defineProperty(Object.prototype, 'toJson', { 
    value: function(this: object) { 
        return JSON.stringify(this);
    }
});

Object.defineProperty(String.prototype, 'parseJson', { 
    value: function(this: string) { 
        try {
            return JSON.parse(this);
        }
        catch {
            return null;
        }
    }
});

Object.defineProperty(String.prototype, 'parseFloat', { 
    value: function(this: string) { 
        const parsed = parseFloat(this);
        if (isNaN(parsed)) 
            return null;
        return parsed;
    } 
});

Object.defineProperty(Number.prototype, 'roundTo', { 
    value: function(this: number, precision = 0) { return Number(this.toFixed(precision)) } 
});
Object.defineProperty(Number.prototype, 'floorTo', { 
    value: function(this: number, precision = 0) { return Math.floor(this * (10 ** precision)) / (10 ** precision) } 
});
Object.defineProperty(Number.prototype, 'abs', { 
    value: function(this: number) { return this < 0 ? this : this } 
});

Object.defineProperty(Number.prototype, 'mult', { value: function(this: number, multiplier: number) { return this * multiplier } });
Object.defineProperty(Number.prototype, 'multFloor', { value: function(this: number, multiplier: number) { return Math.floor(this * multiplier) } });
Object.defineProperty(Number.prototype, 'multRound', { value: function(this: number, multiplier: number) { return Math.round(this * multiplier) } });

Object.defineProperty(Number.prototype, 'appendOrdinal', { 
    value: function(this: number) {
        const stringValue = this.toString();
        if (stringValue.endsWith('11') || stringValue.endsWith('12') || stringValue.endsWith('13')) {
            return stringValue + 'th';
        }
        const lastChar = stringValue[stringValue.length - 1];

        switch (lastChar) {
            case '1': return stringValue + 'st';
            case '2': return stringValue + 'nd';
            case '3': return stringValue + 'rd';
            default:  return stringValue + 'th';
        }
    } 
});

Object.defineProperty(Number.prototype, 'toFeetInches', { 
    value: function(this: number, decimals: number = 0, fromUnit: UnitSystem = "imperial") { 
        const totalInches = this.asInches(fromUnit);
        const feet = Math.floor(totalInches / 12);
        const inches = (totalInches - feet * 12).roundTo(decimals);
        return `${feet}'${inches}"`;
    }
});

Object.defineProperty(Number.prototype, 'asInches', { 
    value: function(this: number, fromUnit: UnitSystem = "metric") { 
        return fromUnit === "metric" ? this / 2.54 : this;
    } 
});

Object.defineProperty(Number.prototype, 'asCm', { 
    value: function(this: number, fromUnit: UnitSystem = "imperial") { 
        return fromUnit === "imperial" ? this * 2.54 : this;
    } 
});

Object.defineProperty(Number.prototype, 'asPounds', { 
    value: function(this: number, fromUnit: UnitSystem = "metric") { 
        return fromUnit === "metric" ? this * 2.20462 : this;
    } 
});

Object.defineProperty(Number.prototype, 'asKg', { 
    value: function(this: number, fromUnit: UnitSystem = "imperial") { 
        return fromUnit === "imperial" ? this / 2.20462 : this;
    } 
});

window.loaded = () => new Promise<void>(resolve => {
    document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", () => resolve(), { once: true }) : resolve();
});

window.$ = (selector) => document.querySelector(selector);
window.$$ = (selector) => document.querySelectorAll(selector);