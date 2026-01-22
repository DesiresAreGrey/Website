import "../../utils.js";
import * as Charts from "../../charts.js";

const master = await (await fetch('/assets/surveys/4tran2025p2/results/_master.json')).json();
$$('.apexchart').forEach(el => {
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
            Charts.createBoxPlot(chartId, master[dataKey], title, subtitle, height, el.dataset.bounds?.parseFloat() ?? undefined, vertical); break;
        case "change-boxplot":
            Charts.createBoxPlot(chartId, master[dataKey], title, subtitle, height, el.dataset.bounds?.parseFloat() ?? 5, vertical, true); break;
        case "scatter":
            Charts.createScatterPlot(chartId, master[dataKey], title, subtitle, hideSeries, colors, height); break;
        case "heatmap":
            Charts.createHeatmap(chartId, master[dataKey], title, subtitle, color, height); break;
    }
});