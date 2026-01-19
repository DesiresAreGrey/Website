import "../../utils.js";
import * as Charts from "../../charts.js";

const path = new URL(import.meta.url).searchParams.get("path") || "/assets/surveys/4tran2025p2/results/";

const master = await(await fetch(path + '_master.json')).json();


$$('[data-chart="ratio-bar"]').forEach(el => {
    const chartId = el.id;
    const dataKey = el.dataset.datakey ?? "";
    const title = el.dataset.title ?? undefined;
    const subtitle = el.dataset.subtitle ?? undefined;
    const hideSeries = el.dataset.hideseries?.parseJson() ?? [];
    const colors = el.dataset.colors?.parseJson() ?? ['#259efa', '#ff4f69', '#00E396', '#3f51b5', '#D7263D'];
    const height = el.style.height.replace("px", "")?.parseFloat() ?? 300;

    Charts.createRatioBarChart(chartId, master[dataKey], title, subtitle, hideSeries, colors, height);
});