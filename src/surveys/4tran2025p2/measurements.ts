import "../../utils.js";
import * as Charts from "../../charts.js";

const gender = $("#gender") as HTMLSelectElement;
const units = $("#units") as HTMLSelectElement;

const heightInput = $("#height") as HTMLInputElement;
const heightFeetInput = $("#height-feet") as HTMLInputElement;

const weightInput = $("#weight") as HTMLInputElement;

const infoHeight = $("#info-height") as HTMLElement;
const infoWeight = $("#info-weight") as HTMLElement;
const infoBmi = $("#info-bmi") as HTMLElement;

updateUnitUI(units.value as UnitSystem);

const master = await(await fetch("/assets/surveys/4tran2025p2/results/_master.json")).json();
const heightData = master["height_inches_mean_sd"];

const heightStats = Object.fromEntries(heightData.map((r: any) => [r.Gender, { mean: r.Mean, sd: r.SD }]));

units.addEventListener("change", (e: any) => {
    changeUnit(e.target.dataset.oldValue, e.target.value);
    e.target.dataset.oldValue = e.target.value;
    update();
});
units.dataset.oldValue = units.value;

heightInput.addEventListener("input", update);
heightFeetInput.addEventListener("input", update);
weightInput.addEventListener("input", update);
update();

function getTotalHeight(oldUnit: UnitSystem): number {
    let height = heightInput.value.parseFloat();
    if (oldUnit === "imperial") 
        return (height?.asInches(oldUnit) ?? 0) + (heightFeetInput.value.parseFloat()?.mult(12) ?? 0);
    return height ?? 0;
}

function update(e?: Event) {
    if (e)
        (e.target as HTMLInputElement).value = (e.target as HTMLInputElement).value.replace(/[^0-9.]/g, '');

    let height = getTotalHeight(units.value as UnitSystem);

    infoHeight.textContent = `${height?.toFeetInches(1, units.value as UnitSystem)} - ${height.asCm(units.value as UnitSystem).roundTo(2)} cm`;
    infoWeight.textContent = `${weightInput.value.parseFloat()?.asPounds(units.value as UnitSystem).roundTo(1)} lbs - ${weightInput.value.parseFloat()?.asKg(units.value as UnitSystem).roundTo(1)} kg`;

    infoBmi.textContent = `${(weightInput.value.parseFloat()!.asKg(units.value as UnitSystem) / ((height.asCm(units.value as UnitSystem) / 100) ** 2)).roundTo(2)} BMI`;

    console.log(height?.toFeetInches(1, units.value as UnitSystem))
}

function changeUnit(oldUnit: UnitSystem, newUnit: UnitSystem) {
    const num = getTotalHeight(oldUnit);
    if (!isFinite(num) || oldUnit === newUnit) return;

    if (newUnit === "imperial") {
        const inches = num.asInches(oldUnit);
        const feet = Math.floor(inches / 12);
        const remainingInches = inches % 12;
        heightFeetInput.value = feet.toString();
        heightInput.value = remainingInches.roundTo(1).toString();

        weightInput.value = weightInput.value.parseFloat()?.asPounds(oldUnit).roundTo(1).toString()!;
    }
    else {
        heightInput.value = num.asCm(oldUnit).roundTo(1).toString();

        weightInput.value = weightInput.value.parseFloat()?.asKg(oldUnit).roundTo(1).toString()!;
    }
    updateUnitUI(newUnit);
}

function updateUnitUI(newUnit: UnitSystem) {
    const feetSection = $("#height-feet-section") as HTMLInputElement;
    const heightUnitsLabel = $("#height-units-label") as HTMLLabelElement;
    const weightUnitsLabel = $("#weight-units-label") as HTMLLabelElement;
    if (newUnit === "imperial") {
        feetSection.style.display = "inline-block";
        heightInput.style.width = "2rem";
        heightUnitsLabel.textContent = "Inches";
        weightUnitsLabel.textContent = "Pounds";
    }
    else {
        feetSection.style.display = "none";
        heightInput.style.width = "2.5rem";
        heightUnitsLabel.textContent = "Centimeters";
        weightUnitsLabel.textContent = "Kilograms";
    }
}

function erf(x: number) {
    const a1 = 0.254829592,
        a2 = -0.284496736,
        a3 = 1.421413741,
        a4 = -1.453152027,
        a5 = 1.061405429,
        p = 0.3275911;
    const sign = x < 0 ? -1 : 1;
    x = Math.abs(x);
    const t = 1 / (1 + p * x);
    const y = 1 - ((((a5 * t + a4) * t + a3) * t + a2) * t + a1) * t * Math.exp(-x * x);
    return sign * y;
}
const Phi = (z: number) => 0.5 * (1 + erf(z / Math.SQRT2));

/*
(function () {
    let HEIGHT_STATS = null;
    fetch("../../assets/surveys/4tran2025/results/height_mean_sd.json").then((r) => r.json()).then((rows) => {
        HEIGHT_STATS = Object.fromEntries(rows.map((r) => [r.Gender, { mean: r.Mean, sd: r.SD }]));
        update();
    }).catch(() => { });
    const $ = (s) => document.querySelector(s);
    const g = $("#hp-gender");
    const v = $("#hp-val");
    const u = $("#hp-unit");
    const info = $("#hp-info");
    const out = $("#hp-out");

    function erf(x) {
        const a1 = 0.254829592,
            a2 = -0.284496736,
            a3 = 1.421413741,
            a4 = -1.453152027,
            a5 = 1.061405429,
            p = 0.3275911;
        const sign = x < 0 ? -1 : 1;
        x = Math.abs(x);
        const t = 1 / (1 + p * x);
        const y =
            1 - ((((a5 * t + a4) * t + a3) * t + a2) * t + a1) * t * Math.exp(-x * x);
        return sign * y;
    }
    const Phi = (z) => 0.5 * (1 + erf(z / Math.SQRT2));

    function toFeet(x) {
        const feet = Math.floor(x / 12);
        const inches = (x - feet * 12).toFixed(1) / 1;
        return `${feet}'${inches}"`;
    }
    function toInches(x, unit) {
        return unit === "cm" ? x / 2.54 : x;
    }
    function toCm(x, unit) {
        return unit === "in" ? x * 2.54 : x;
    }

    function update() {
        const gender = g.value;
        const num = parseFloat(v.value);

        info.textContent = `${toFeet(toInches(num, u.value))} - ${toCm(num, u.value).toFixed(2) / 1} cm`;

        if (!HEIGHT_STATS) {
            out.textContent = "…";
            return;
        }
        const s = HEIGHT_STATS[gender];
        if (!s || !isFinite(num)) {
            out.textContent = "—";
            info.textContent = "0'0\" - 0.0 cm";
            return;
        }

        const inches = toInches(num, u.value);
        const z = (inches - s.mean) / s.sd;
        const pct = Math.max(0, Math.min(100, Phi(z) * 100));
        out.textContent = `${pct.toFixed(1)}th Percentile`;

        if (v.value.length > 5) {
          v.style.width = "3rem";
        }
        else if (v.value.length > 4) {
          v.style.width = "2.8rem";
        }
        else if (v.value.length > 2) {
          v.style.width = "2.4rem";
        }
        else {
          v.style.width = "2rem";
        }
    }

    function changeUnit(oldUnit, newUnit) {
        const num = parseFloat(v.value);
        if (!isFinite(num) || oldUnit === newUnit) return;
        const inches = toInches(num, oldUnit);
        const converted = newUnit === "cm" ? inches * 2.54 : inches;
        v.value = converted.toFixed(2) / 1;
    }

    g.addEventListener("change", update);
    u.addEventListener("change", (e) => {
        changeUnit(e.target.dataset.oldValue, e.target.value);
        e.target.dataset.oldValue = e.target.value;
        update();
    });
    u.dataset.oldValue = u.value;
    v.addEventListener("input", update);
})();*/

const unitSystem = units.value as UnitSystem;
const customOptions: any = {
    tooltip: {
        custom: ({ seriesIndex, dataPointIndex, w }: { seriesIndex: number; dataPointIndex: number; w: any }) => {
            const point: number[] = w.config.series[seriesIndex].data[dataPointIndex];
            const height = point[1];
            const weight = point[0];
            const bmi = (weight.asKg(unitSystem) / ((height.asCm(unitSystem) / 100) ** 2)).roundTo(2);
            const name: string = w.config.series[seriesIndex].name;
            return `
            <div class="apexcharts-tooltip-title" style="font-family: Inter, Arial, sans-serif; font-size: 12px;">${name}</div>
            <div class="apexcharts-tooltip-box apexcharts-tooltip-scatter">
                <div class="apexcharts-tooltip-text" style="font-family: Inter, Arial, sans-serif; font-size: 12px;">
                    Height: <b>${point[1].asInches(unitSystem).toFeetInches()}</b><br>
                    Weight: <b>${point[0]}</b><br>
                    BMI: <b>${bmi}</b>
                </div>
            </div>`;
        },
        
    },
};
Charts.createScatterChart("height-weight-scatter", master["height_weight_imperial_scatter"], "Height and Weight", undefined, [], ['#259efa', '#ff4f69', '#00E396', '#FEB019'], $("#height-weight-scatter")!.style.height.replace("px", "")?.parseFloat() ?? 300, customOptions);

