Object.defineProperty(NodeList.prototype, 'toArray', { value: function () { return [...this]; } });
Object.defineProperty(HTMLCollection.prototype, 'toArray', { value: function () { return [...this]; } });
Object.defineProperty(HTMLElement.prototype, '$', { value: function (selector) { return this.querySelector(selector); } });
Object.defineProperty(HTMLElement.prototype, '$$', { value: function (selector) { return this.querySelectorAll(selector); } });
Object.defineProperty(HTMLElement.prototype, 'appendHtml', {
    value: function (htmlString) { this.insertAdjacentHTML('beforeend', htmlString); }
});
Object.defineProperty(Number.prototype, 'roundTo', {
    value: function (precision = 0) { return Number(this.toFixed(precision)); }
});
Object.defineProperty(Number.prototype, 'floorTo', {
    value: function (precision = 0) { return Math.floor(this * (10 ** precision)) / (10 ** precision); }
});
Object.defineProperty(Number.prototype, 'mult', { value: function (multiplier) { return this * multiplier; } });
Object.defineProperty(Number.prototype, 'multFloor', { value: function (multiplier) { return Math.floor(this * multiplier); } });
Object.defineProperty(Number.prototype, 'multRound', { value: function (multiplier) { return Math.round(this * multiplier); } });
Object.defineProperty(Number.prototype, 'toFeetInches', {
    value: function (decimals = 0, fromUnit = "inches") {
        const totalInches = this.asInches(fromUnit);
        const feet = Math.floor(totalInches / 12);
        const inches = (totalInches - feet * 12).roundTo(decimals);
        return `${feet}'${inches}"`;
    }
});
Object.defineProperty(Number.prototype, 'asInches', {
    value: function (fromUnit = "centimeters") {
        return fromUnit === "centimeters" ? this / 2.54 : this;
    }
});
Object.defineProperty(Number.prototype, 'asCm', {
    value: function (fromUnit = "inches") {
        return fromUnit === "inches" ? this * 2.54 : this;
    }
});
window.loaded = () => new Promise(resolve => {
    document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", () => resolve(), { once: true }) : resolve();
});
window.$ = (selector) => document.querySelector(selector);
window.$$ = (selector) => document.querySelectorAll(selector);
export {};
