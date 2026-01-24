import "../../utils.js";
import { LoadingBar } from "../../loadingbar.js";
import * as Charts from "../../charts.js";

const loadingBar = LoadingBar.start();
const charts = $$('.apexchart');

let loadedAmount = 0;
const totalToLoad = charts.length + 1;

const now = Date.now();

const master = await (await fetch('/assets/surveys/4tran2025p2/results/_master.json')).json();

LoadingBar.update(++loadedAmount / totalToLoad);

for (const el of charts) {
    const chartId = el.id;
    const dataKey = el.dataset.datakey ?? "";
    const title = el.dataset.title;
    const subtitle = el.dataset.subtitle;
    const hideSeries = el.dataset.hideseries?.parseJson() ?? [];
    const colors = el.dataset.colors?.parseJson() ?? ['#259efa', '#ff4f69', '#00E396', '#FEB019'];
    const color = el.dataset.color ?? '#259efa';
    const height = el.style.height.replace("px", "")?.parseFloat() ?? 300;
    const horizontal = el.dataset.horizontal != undefined;
    const vertical = el.dataset.vertical != undefined;
    const normalized = el.dataset.normalized != undefined;
    const upperColor = el.dataset.upperColor ?? '#775DD0';
    const lowerColor = el.dataset.lowerColor ?? '#6649ca';
    const heightInches = el.dataset.heightInches != undefined;

    switch (el.dataset.chart) {
        case "ratio-bar":
            Charts.createRatioBarChart(chartId, master[dataKey], title, subtitle, hideSeries, colors, height, normalized); break;
        case "bar":
            Charts.createBarChart(chartId, master[dataKey], title, subtitle, hideSeries, colors, height, true); break;
        case "column":
            Charts.createBarChart(chartId, master[dataKey], title, subtitle, hideSeries, colors, height, false); break;
        case "pop-pyramid":
            Charts.createPopPyramidChart(chartId, master[dataKey], title, subtitle, hideSeries, colors, height, el.dataset.bounds?.parseFloat() ?? 15, horizontal); break;
        case "pie":
            Charts.createPieChart(chartId, master[dataKey], title, colors, height); break;
        case "boxplot":
            Charts.createBoxPlot(chartId, master[dataKey], title, subtitle, height, el.dataset.bounds?.parseFloat() ?? undefined, vertical, false, upperColor, lowerColor, heightInches); break;
        case "change-boxplot":
            Charts.createBoxPlot(chartId, master[dataKey], title, subtitle, height, el.dataset.bounds?.parseFloat() ?? 5, vertical, true, upperColor, lowerColor); break;
        case "scatter":
            Charts.createScatterPlot(chartId, master[dataKey], title, subtitle, hideSeries, colors, height); break;
        case "heatmap":
            Charts.createHeatmap(chartId, master[dataKey], title, subtitle, color, height); break;
    }
    
    loadedAmount++;
    await LoadingBar.updateAsync(loadedAmount / totalToLoad);
}

LoadingBar.finish();

console.log(`${charts.length} charts loaded in ${(Date.now() - now).toFixed(0)} ms`);

const debugLoadTimeDiv = document.createElement('div');
debugLoadTimeDiv.style.position = 'fixed';
debugLoadTimeDiv.style.bottom = '4px';
debugLoadTimeDiv.style.right = '4px';
debugLoadTimeDiv.innerHTML = `${charts.length} Charts<br>Loaded in ${(Date.now() - now).toFixed(0)} ms`;
debugLoadTimeDiv.style.transition = 'opacity 750ms ease';
debugLoadTimeDiv.style.textAlign = 'right';
setTimeout(() => debugLoadTimeDiv.style.setProperty('opacity', '0'), 2500);
document.body.appendChild(debugLoadTimeDiv);