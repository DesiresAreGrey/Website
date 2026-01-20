import "../../utils.js";
//import * as Charts from "../../charts.js";

const heightData = await(await fetch("../../../assets/surveys/4tran2025p2/results/height_inches_mean_sd.json")).json();
const heightStats = Object.fromEntries(heightData.map((r: any) => [r.Gender, { mean: r.Mean, sd: r.SD }]));

const gender = $("#gender") as HTMLSelectElement;
const units = $("#units") as HTMLSelectElement;

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