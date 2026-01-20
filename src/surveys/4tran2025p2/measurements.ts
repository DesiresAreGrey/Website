import "../../utils.js";
import * as Charts from "../../charts.js";
import ApexCharts from 'apexcharts';

const gender = $("#gender") as HTMLSelectElement;
const unitsSelect = $("#units") as HTMLSelectElement;

const getUnits = () => unitsSelect.value as UnitSystem;

const heightInput = $("#height-input") as HTMLInputElement;
const heightFeetInput = $("#height-feet-input") as HTMLInputElement;

const weightInput = $("#weight-input") as HTMLInputElement;

const infoHeight = $("#info-height") as HTMLElement;
const infoWeight = $("#info-weight") as HTMLElement;
const infoBmi = $("#info-bmi") as HTMLElement;

const scatterplotChartToggle = $("#scatterplot-show-toggle") as HTMLInputElement;
const scatterplotChartEnabled = () => !scatterplotChartToggle.checked;

const scatterplotSelfToggle = $("#scatterplot-self-toggle") as HTMLInputElement;
const scatterplotSelfEnabled = () => !scatterplotSelfToggle.checked;

let chartLoaded = false;
const scatterChartHeight = $("#height-weight-scatter")!.style.height.replace("px", "")?.parseFloat() ?? 300;
if (!scatterplotChartEnabled()) {
    $("#height-weight-scatter")!.style.height = "0";
}

updateUnitUI(getUnits());

const master = await(await fetch("/assets/surveys/4tran2025p2/results/_master.json")).json();
const heightData = master["height_inches_mean_sd"];

const heightStats = Object.fromEntries(heightData.map((r: any) => [r.Gender, { mean: r.Mean, sd: r.SD }]));

unitsSelect.addEventListener("change", (e: any) => {
    changeUnit(e.target.dataset.oldValue, e.target.value);
    e.target.dataset.oldValue = e.target.value;
    update();
});
unitsSelect.dataset.oldValue = unitsSelect.value;

heightInput.addEventListener("input", update);
heightInput.addEventListener("focus", focusInput);
heightInput.addEventListener("blur", updateScatterPlot);

heightFeetInput.addEventListener("input", update);
heightFeetInput.addEventListener("focus", focusInput);
heightFeetInput.addEventListener("blur", updateScatterPlot);

weightInput.addEventListener("input", update);
weightInput.addEventListener("focus", focusInput);
weightInput.addEventListener("blur", updateScatterPlot);

scatterplotChartToggle.addEventListener("change", updateScatterPlot);
scatterplotSelfToggle.addEventListener("change", updateScatterPlot);

update();

function focusInput(e: Event) {
    if (window.innerWidth > 768) return;
    const input = e.target as HTMLInputElement;
    const tempValue = input.value;
    input.value = '';
    input.value = tempValue;
}

function getTotalHeight(oldUnit: UnitSystem): number {
    let height = heightInput.value.parseFloat();
    if (oldUnit === "imperial") 
        return (height?.asInches(oldUnit) ?? 0) + (heightFeetInput.value.parseFloat()?.mult(12) ?? 0);
    return height ?? 0;
}

function update(e?: Event) {
    if (e)
        (e.target as HTMLInputElement).value = (e.target as HTMLInputElement).value.replace(/[^0-9.]/g, '');

    let height = getTotalHeight(getUnits());

    infoHeight.textContent = `${height?.toFeetInches(1, getUnits())} - ${height.asCm(getUnits()).roundTo(2)} cm`;
    infoWeight.textContent = `${weightInput.value.parseFloat()?.asPounds(getUnits()).roundTo(1)} lbs - ${weightInput.value.parseFloat()?.asKg(getUnits()).roundTo(1)} kg`;

    infoBmi.textContent = `${(weightInput.value.parseFloat()!.asKg(getUnits()) / ((height.asCm(getUnits()) / 100) ** 2)).roundTo(2)} BMI`;
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

updateScatterPlot();

function createScatterPlot() {
    const customOptions = {
        tooltip: {
            custom: ({ seriesIndex, dataPointIndex, w }: { seriesIndex: number; dataPointIndex: number; w: any }) => {
                const point: number[] = w.config.series[seriesIndex].data[dataPointIndex];
                const height = point[1];
                const weight = point[0];
                const bmi = (weight.asKg(getUnits()) / ((height.asCm(getUnits()) / 100) ** 2)).roundTo(2);
                const name: string = w.config.series[seriesIndex].name;
                return `
                <div class="apexcharts-tooltip-title" style="font-family: Inter, Arial, sans-serif; font-size: 12px;">${name}</div>
                <div class="apexcharts-tooltip-box apexcharts-tooltip-scatter">
                    <div class="apexcharts-tooltip-text" style="font-family: Inter, Arial, sans-serif; font-size: 12px;">
                        Height: <b>${point[1].asInches(getUnits()).toFeetInches()} - ${point[1].asCm(getUnits()).roundTo(2)} cm</b><br>
                        Weight: <b>${point[0]} lbs - ${point[0]?.asKg(getUnits()).roundTo(1)} kg</b><br>
                        BMI: <b>${bmi}</b>
                    </div>
                </div>`;
            },
        },
        xaxis: {
            tickAmount: 12,
            min: 50, max: 350,
        },
        yaxis: {
            tickAmount: 5,
            min: 55, max: 80,
        },
        markers: {
            size: [5, 5, 5, 6],
            strokeWidth: 1,
            strokeColors: '#090909',
        },
    };
    Charts.createScatterChart("height-weight-scatter", master["height_weight_imperial_scatter"], "Height and Weight", "Scatter Plot", [2], ['#259efa', '#ff4f69', '#00E396', '#fff'], scatterChartHeight, customOptions);
    chartLoaded = true;
}

function updateScatterPlot() {
    if (scatterplotChartEnabled() && !chartLoaded) {
        createScatterPlot();
        $("#height-weight-scatter")!.style.height = scatterChartHeight + "px";
    }
    else if (!scatterplotChartEnabled() && chartLoaded) {
        ApexCharts.exec("height-weight-scatter", "destroy");
        chartLoaded = false;
        $("#height-weight-scatter")!.style.height = "0";
        return;
    }

    if (!chartLoaded)
        return;

    const xy = [weightInput.value.parseFloat()?.asPounds(getUnits()).roundTo(1), getTotalHeight(getUnits()).asInches(getUnits()).roundTo(1)];

    let data = master["height_weight_imperial_scatter"];
    let annotations = { xaxis: [{}], yaxis: [{}] };
    if (scatterplotSelfEnabled()) {
        data = [...master["height_weight_imperial_scatter"], {
            name: "You",
            data: [xy]
        }];
        annotations = {
            xaxis: [{
                x: xy[0],
            }],
            yaxis: [{
                y: xy[1],
            }]
        };
    }
    ApexCharts.exec("height-weight-scatter", "updateOptions", {
        series: data,
        annotations: annotations,
        xaxis: {
            tickAmount: 12,
            min: 50, max: 350,
            decimalsInFloat: 0,
            labels: {
                show: true
            },
            title: {
                text: data[0].xLabel,
            },
        },
        yaxis: {
            tickAmount: 5,
            min: 55, max: 80,
            decimalsInFloat: 0,
            title: {
                text: data[0].yLabel,
            },
        },
    });
}

