export class Utils {
    static async fetchJson(url) {
        return (await fetch(url)).json();
    }
    static async wait(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}
Utils.pageLoaded = () => new Promise(resolve => {
    document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", () => resolve(), { once: true }) : resolve();
});
Object.defineProperty(NodeList.prototype, 'toArray', { value: function () { return [...this]; } });
Object.defineProperty(HTMLCollection.prototype, 'toArray', { value: function () { return [...this]; } });
Object.defineProperty(HTMLElement.prototype, '$', { value: function (selector) { return this.querySelector(selector); } });
Object.defineProperty(HTMLElement.prototype, '$id', { value: function (id) { return this.querySelector("#" + id); } });
Object.defineProperty(HTMLElement.prototype, '$$', { value: function (selector) { return this.querySelectorAll(selector); } });
Object.defineProperty(HTMLElement.prototype, 'appendHtml', {
    value: function (htmlString) { this.insertAdjacentHTML('beforeend', htmlString); }
});
Object.defineProperty(Object.prototype, 'toJson', {
    value: function () {
        return JSON.stringify(this);
    }
});
Object.defineProperty(String.prototype, 'parseJson', {
    value: function () {
        try {
            return JSON.parse(this);
        }
        catch {
            return null;
        }
    }
});
Object.defineProperty(String.prototype, 'parseFloat', {
    value: function () {
        const parsed = parseFloat(this);
        if (isNaN(parsed))
            return null;
        return parsed;
    }
});
Object.defineProperty(Number.prototype, 'roundTo', {
    value: function (precision = 0) { return Number(this.toFixed(precision)); }
});
Object.defineProperty(Number.prototype, 'floorTo', {
    value: function (precision = 0) { return Math.floor(this * (10 ** precision)) / (10 ** precision); }
});
Object.defineProperty(Number.prototype, 'abs', {
    value: function () { return Math.abs(this); }
});
Object.defineProperty(Number.prototype, 'clamp', {
    value: function (min = 0, max = 1) { return Math.min(Math.max(this, min), max); }
});
Object.defineProperty(Number.prototype, 'mult', { value: function (multiplier) { return this * multiplier; } });
Object.defineProperty(Number.prototype, 'multFloor', { value: function (multiplier) { return Math.floor(this * multiplier); } });
Object.defineProperty(Number.prototype, 'multRound', { value: function (multiplier) { return Math.round(this * multiplier); } });
Object.defineProperty(Number.prototype, 'appendOrdinal', {
    value: function () {
        const stringValue = this.toString();
        if (stringValue.endsWith('11') || stringValue.endsWith('12') || stringValue.endsWith('13')) {
            return stringValue + 'th';
        }
        const lastChar = stringValue[stringValue.length - 1];
        switch (lastChar) {
            case '1': return stringValue + 'st';
            case '2': return stringValue + 'nd';
            case '3': return stringValue + 'rd';
            default: return stringValue + 'th';
        }
    }
});
Object.defineProperty(Number.prototype, 'toFeetInches', {
    value: function (decimals = 0, fromUnit = "imperial") {
        const totalInches = this.asInches(fromUnit);
        const feet = Math.floor(totalInches / 12);
        const inches = (totalInches - feet * 12).roundTo(decimals);
        return `${feet}'${inches}"`;
    }
});
Object.defineProperty(Number.prototype, 'asInches', {
    value: function (fromUnit = "metric") {
        return fromUnit === "metric" ? this / 2.54 : this;
    }
});
Object.defineProperty(Number.prototype, 'asCm', {
    value: function (fromUnit = "imperial") {
        return fromUnit === "imperial" ? this * 2.54 : this;
    }
});
Object.defineProperty(Number.prototype, 'asPounds', {
    value: function (fromUnit = "metric") {
        return fromUnit === "metric" ? this * 2.20462 : this;
    }
});
Object.defineProperty(Number.prototype, 'asKg', {
    value: function (fromUnit = "imperial") {
        return fromUnit === "imperial" ? this / 2.20462 : this;
    }
});
window.$ = (selector) => document.querySelector(selector);
window.$id = (id) => document.querySelector("#" + id);
window.$$ = (selector) => document.querySelectorAll(selector);
