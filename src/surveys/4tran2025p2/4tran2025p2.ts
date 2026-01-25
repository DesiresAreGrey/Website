import { Utils } from "../../utils.js";
import { LoadingBar } from "../../loadingbar.js";
import { Charts } from "../../charts.js";
import * as Wordcloud from "../../wordcloud.js";

const charts = [...$$('.apexchart'), ...$$('.wordcloud')];
if (charts.length > 0) {
    LoadingBar.start();

    let loadedAmount = 0;
    const totalToLoad = charts.length + 1;

    const master = await Utils.fetchJson('/assets/surveys/4tran2025p2/results/_master.json');

    LoadingBar.update(++loadedAmount / totalToLoad, (loadedAmount + 1) / totalToLoad);

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

        const textScale = el.dataset.scale?.parseFloat() ?? 20;

        if (el.classList.contains('wordcloud')) {
            Wordcloud.createWordCloud(el.id, master["custom_drugs_wordcloud"], height, textScale);
        }

        loadedAmount++;
        await LoadingBar.updateAsync(loadedAmount / totalToLoad, (loadedAmount + 1) / totalToLoad);
    }

    LoadingBar.finish();
    showPerformancePopup();
    console.log(Charts.charts);
}

function showPerformancePopup() {
    const debugLoadTimeDiv = document.createElement('div');
    debugLoadTimeDiv.style.position = 'fixed';
    debugLoadTimeDiv.style.bottom = '4px';
    debugLoadTimeDiv.style.right = '4px';

    //const slowestChart = Charts.charts.sort((a, b) => b.loadTime - a.loadTime)[0];
    debugLoadTimeDiv.innerHTML = `
        ${Charts.charts.length} Charts (${Charts.charts.map(c => c.loadTime).reduce((a, b) => a + b, 0).roundTo(0)} ms)<br>
        Fully loaded in ${(LoadingBar.elapsedTime)?.roundTo(0)} ms
    `;
    
    debugLoadTimeDiv.style.transition = 'opacity 250ms ease';
    debugLoadTimeDiv.style.textAlign = 'right';
    setTimeout(() => debugLoadTimeDiv.style.setProperty('opacity', '0'), 4000);
    document.body.appendChild(debugLoadTimeDiv);
}

