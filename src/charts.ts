import "./utils.js";
import ApexCharts from 'apexcharts';

const isMobile = window.innerWidth > 768 ? false : true;

export function createRatioBarChart(chartId: string, data: any, title: string | undefined, subtitle: string | undefined, hideSeries: number[], colors: string[], height: number) {
    hideSeries.forEach(index => {
        if (data.series[index]) {
            data.series[index].hidden = true;
        }
    });
    data.categories = data.categories.map((c: string) => replaceXThanWithSymbol(c));
    const options = {
        chart: {
            id: chartId,
            type: 'bar',
            height: height,
            stacked: true,
            stackType: '100%',
            toolbar: { show: false },
            background: '#090909',
            fontFamily: 'Inter, Arial, sans-serif',
            animations: {
                enabled: !isMobile
            },
        },
        title: {
            text: title,
            align: 'center',
            style: {
                fontSize:  '20px'
            },
        },
        subtitle: {
            text: subtitle,
            align: 'center',
            floating: true,
            style: {
                fontSize:  '12px'
            },
        },
        series: data.series,
        xaxis: {
            categories: data.categories,
            show: false,
            labels: {
                show: false
            },
            axisBorder: {
                show: false
            },
            axisTicks: {
                show: false
            }
        },
        legend: {
            position: 'bottom',
            horizontalAlign: 'center'
        },
        tooltip: {
            y: {
                formatter: (val: number, opts: any) => {
                    const total: number = opts.w.globals.stackedSeriesTotals[opts.dataPointIndex];
                    const pct = total ? ((val / total) * 100).toFixed(1) : 0;
                    return `${val} respondents (${pct}%)`;
                }
            }
        },
        plotOptions: {
            bar: {
                horizontal: true,
                borderRadius: 3,
                borderRadiusApplication: 'end',
                barHeight: '90%'
            }
        },
        dataLabels: {
            enabled: true,
            dropShadow: {
                enabled: true,
                left: 0,
                top: 0,
                opacity: 0.5
            }
        },
        grid: {
            yaxis: {
                lines: { 
                    show: false 
                }
            }
        },
        states: {
            active: {
                filter: {
                    type: 'none',
                }
            }
        },
        theme: {
            mode: 'dark', 
            palette: 'palette1',
        },
        stroke: {
            colors: ['transparent'],
            width: 3,    
        },
        colors: colors
    };
    new ApexCharts(document.querySelector("#" + chartId), options).render();
}

export function createBarChart(chartId: string, data: any, title: string | undefined, subtitle: string | undefined, hideSeries: number[], colors: string[], height: number, horizontal: boolean) {
    hideSeries.forEach(index => {
        if (data.series[index]) {
            data.series[index].hidden = true;
        }
    });
    data.categories = data.categories.map((c: string) => replaceXThanWithSymbol(c));
    const options = {
        chart: {
            id: chartId,
            type: 'bar',
            height: height,
            stacked: true,
            toolbar: { show: false },
            background: '#090909',
            fontFamily: 'Inter, Arial, sans-serif',
            animations: {
                enabled: !isMobile
            },
        },
        title: {
            text: title,
            align: 'center',
            style: {
                fontSize:  '20px'
            },
        },
        subtitle: {
            text: subtitle,
            align: 'center',
            floating: true,
            style: {
                fontSize:  '12px'
            },
        },
        series: data.series,
        xaxis: {
            categories: data.categories
        },
        legend: {
            position: 'bottom',
            horizontalAlign: 'center'
        },
        tooltip: {
            y: {
                formatter: (val: number, opts: any) => {
                    const total: number = opts.w.globals.stackedSeriesTotals[opts.dataPointIndex];
                    const pct = total ? ((val / total) * 100).toFixed(1) : 0;
                    return `${val} respondents (${pct}%)`;
                }
            }
        },
        plotOptions: {
            bar: {
                horizontal: horizontal,
                borderRadius: 3,
                borderRadiusApplication: 'end',
            }
        },
        dataLabels: {
            enabled: false
        },
        grid: {
            yaxis: {
                lines: { 
                    show: true 
                }
            },
            borderColor: '#e0e0e020',
        },
        states: {
            active: {
                filter: {
                    type: 'none',
                }
            }
        },
        theme: {
            mode: 'dark', 
            palette: 'palette1',
        },
        colors: colors
    };
    new ApexCharts(document.querySelector("#" + chartId), options).render();
}

export function createPopPyramidChart(chartId: string, data: any, title: string | undefined, subtitle: string | undefined, hideSeries: number[], colors: string[], height: number, bounds: number) {
    data.categories = data.categories.map((c: string) => replaceXThanWithSymbol(c));
    const options = {
        chart: {
            id: chartId,
            type: 'bar',
            height: height,
            stacked: true,
            toolbar: { show: false },
            background: '#090909',
            fontFamily: 'Inter, Arial, sans-serif',
            animations: {
                enabled: !isMobile
            },
        },
        title: {
            text: title,
            align: 'center',
            style: {
                fontSize:  '20px'
            },
        },
        subtitle: {
            text: subtitle,
            align: 'center',
            floating: true,
            style: {
                fontSize:  '12px'
            },
        },
        series: data.series,
        xaxis: {
            categories: data.categories,
            min: -bounds * 10, max: bounds * 10,
            labels: {
                formatter: function (val: number) {
                    return Math.abs(Math.round(val/10)) + "%"
                }
            }
        },
        grid: {
            yaxis: {
                lines: { 
                    show: true 
                }
            },
            borderColor: '#e0e0e020',
        },
        annotations: {
            xaxis: [
                {
                    x: 0,
                    borderColor: "#e0e0e0",
                    strokeDashArray: 0,
                    borderWidth: 2,
                }
            ]
        },
        legend: {
            show: false
        },
        tooltip: {
            y: {
                formatter: (val: number) => {
                    return Math.abs(val/10) + "%";
                }
            }
        },
        plotOptions: {
            bar: {
                horizontal: true,
                borderRadius: 3,
                borderRadiusApplication: 'end',
            }
        },
        dataLabels: {
            enabled: false
        },
        states: {
            active: {
                filter: {
                    type: 'none',
                }
            }
        },
        theme: {
            mode: 'dark', 
            palette: 'palette1',
        },
        colors: colors
    };
    new ApexCharts(document.querySelector("#" + chartId), options).render();
}

export function createPieChart(chartId: string, data: any, title: string | undefined, colors: string[], height: number) {
    const options = {
        chart: {
            id: chartId,
            type: 'pie',
            height: height,
            toolbar: { show: false },
            background: '#090909',
            fontFamily: 'Inter, Arial, sans-serif',
            animations: {
                enabled: !isMobile
            },
        },
        series: data.series,
        labels: data.labels,
        title: {
            text: title,
            align: 'center',
            style: {
                fontSize:  '20px'
            },
        },
        responsive: [{
            breakpoint: 480,
        }],
        plotOptions: {
            pie: {
                expandOnClick: false
            }
        },
        legend: {
            position: 'bottom',
            horizontalAlign: 'center'
        },
        dataLabels: {
            enabled: true,
            dropShadow: {
                enabled: true,
                left: 0,
                top: 0,
                opacity: 0.5
            }
        },
        states: {
            active: {
                filter: {
                    type: 'none',
                }
            }
        },
        theme: {
            mode: 'dark', 
            palette: 'palette1',
        },
        colors: colors
    };
    new ApexCharts(document.querySelector("#" + chartId), options).render();
}

export function createBoxPlot(chartId: string, data: any, title: string | undefined, subtitle: string | undefined, height = 300, bounds?: number) {
    const options: any = {
        chart: {
            id: chartId,
            type: 'boxPlot',
            height: height,
            toolbar: { show: false },
            background: '#090909',
            fontFamily: 'Inter, Arial, sans-serif',
            animations: {
                enabled: !isMobile
            },
        },
        title: {
            text: title,
            align: 'center',
            style: {
                fontSize:  '20px'
            },
        },
        subtitle: {
            text: subtitle,
            align: 'center',
            floating: true,
            style: {
                fontSize:  '12px'
            },
        },
        series: [
            {
                type: 'boxPlot',
                data: data,
            }
        ],
        responsive: [{
            breakpoint: 480,
        }],
        plotOptions: {
            bar: {
                horizontal: true,
                barHeight: '75%'
            },
            boxPlot: {
                expandOnClick: false,
                colors: {
                    upper: '#775DD0',
                    lower: '#6649ca',
                }
            }
        },
        legend: {
            position: 'bottom',
            horizontalAlign: 'center'
        },
        grid: {
            yaxis: {
                lines: { 
                    show: true 
                }
            },
            borderColor: '#e0e0e020',
        },
        stroke: {
            colors: ['#ddd'],
            width: 2
        },
        states: {
            active: {
                filter: {
                    type: 'none',
                }
            },
            hover: {
                filter: {
                    type: 'none',
                }
            }
        },
        theme: {
            mode: 'dark', 
            palette: 'palette1',
        },
        tooltip: {
            shared: false,
            intersect: true,
            custom: ({ seriesIndex, dataPointIndex, w }: { seriesIndex: number; dataPointIndex: number; w: any }) => {
                const d = w.config.series[seriesIndex].data[dataPointIndex];
                const [min, q1, median, q3, max] = d.y;
                const outliers = d.goals?.map((a: any) => (a.value - a.jitter).roundTo(2)).sort((a: any, b: any) => a - b);
                if (outliers?.length > 0) {
                    return `
                    <div class="apexcharts-tooltip-title" style="font-family: Inter, Arial, sans-serif; font-size: 12px;">${d.x}</div>
                    <div class="apexcharts-tooltip-box apexcharts-tooltip-boxPlot">
                        <div class="apexcharts-tooltip-text" style="font-family: Inter, Arial, sans-serif; font-size: 12px;">
                            Maximum: <b>${max}</b><br>
                            Q3: <b>${q3}</b><br>
                            Median: <b>${median}</b><br>
                            Q1: <b>${q1}</b><br>
                            Minimum: <b>${min}</b><br>
                            <div style="margin-top: 2px; font-size: 11px; color: #bbb;">
                                Outliers: <b>${outliers.length}/${d.total}</b>
                            </div>
                        </div>
                    </div>`;
                }
                else if (d.total > 0) {
                    return `
                    <div class="apexcharts-tooltip-title" style="font-family: Inter, Arial, sans-serif; font-size: 12px;">${d.x}</div>
                    <div class="apexcharts-tooltip-box apexcharts-tooltip-boxPlot">
                        <div class="apexcharts-tooltip-text" style="font-family: Inter, Arial, sans-serif; font-size: 12px;">
                            Maximum: <b>${max}</b><br>
                            Q3: <b>${q3}</b><br>
                            Median: <b>${median}</b><br>
                            Q1: <b>${q1}</b><br>
                            Minimum: <b>${min}</b><br>
                            <div style="margin-top: 2px; font-size: 11px; color: #bbb;">
                                Total: <b>${d.total}</b>
                            </div>
                        </div>
                    </div>`;
                }
                return `
                <div class="apexcharts-tooltip-title" style="font-family: Inter, Arial, sans-serif; font-size: 12px;">${d.x}</div>
                <div class="apexcharts-tooltip-box apexcharts-tooltip-boxPlot">
                    <div class="apexcharts-tooltip-text" style="font-family: Inter, Arial, sans-serif; font-size: 12px;">
                        Maximum: <b>${max}</b><br>
                        Q3: <b>${q3}</b><br>
                        Median: <b>${median}</b><br>
                        Q1: <b>${q1}</b><br>
                        Minimum: <b>${min}</b>
                    </div>
                </div>`;
            }
        }
    };

    if (bounds) {
        options.xaxis = {
            min: -bounds, max: bounds,
        };
        options.annotations = {
            xaxis: [
                {
                    x: 0,
                    borderColor: "#e0e0e0",
                    strokeDashArray: 0,
                    borderWidth: 2,
                }
            ]
        };
    }

    new ApexCharts(document.querySelector("#" + chartId), options).render();
}

export function createScatterPlot(chartId: string, data: any, title: string | undefined, subtitle: string | undefined, hideSeries: number[], colors: string[], height: number, customOptions?: any) {
    hideSeries.forEach(index => {
        if (data[index]) {
            data[index].hidden = true;
        }
    });
    const options = {
        chart: {
            id: chartId,
            type: 'scatter',
            height: height,
            toolbar: { show: false },
            background: '#090909',
            fontFamily: 'Inter, Arial, sans-serif',
            zoom: {
                enabled: false
            },
            animations: {
                enabled: !isMobile
            },
        },
        title: {
            text: title,
            align: 'center',
            style: {
                fontSize:  '20px'
            },
        },
        subtitle: {
            text: subtitle,
            align: 'center',
            floating: true,
            style: {
                fontSize:  '12px'
            },
        },
        series: data,
        xaxis: {
            tickAmount: 10,
            labels: {
                show: true
            },
            title: {
                text: data[0]?.xLabel,
                offsetY: -10,
            },
        },
        yaxis: {
            title: {
                text: data[0]?.yLabel,
            },
        },
        legend: {
            position: 'bottom',
            horizontalAlign: 'center'
        },
        tooltip: {
            custom: ({ seriesIndex, dataPointIndex, w }: { seriesIndex: number; dataPointIndex: number; w: any }) => {
                const point: number[] = w.config.series[seriesIndex].data[dataPointIndex];
                const xLabel = w.config.series[seriesIndex]?.xLabel ?? "X";
                const yLabel = w.config.series[seriesIndex]?.yLabel ?? "Y";
                const name: string = w.config.series[seriesIndex].name;
                return `
                <div class="apexcharts-tooltip-title" style="font-family: Inter, Arial, sans-serif; font-size: 12px;">${name}</div>
                <div class="apexcharts-tooltip-box apexcharts-tooltip-scatter">
                    <div class="apexcharts-tooltip-text" style="font-family: Inter, Arial, sans-serif; font-size: 12px;">
                        ${xLabel}: <b>${point[0]}</b><br>
                        ${yLabel}: <b>${point[1]}</b><br>
                    </div>
                </div>`;
            },
            
        },
        grid: {
            yaxis: {
                lines: { 
                    show: true 
                }
            },
            xaxis: {
                lines: { 
                    show: true 
                }
            },
            borderColor: '#e0e0e020',
        },
        states: {
            active: {
                filter: {
                    type: 'none',
                }
            }
        },
        theme: {
            mode: 'dark', 
            palette: 'palette1',
        },
        stroke: {
            colors: ['transparent'],
            width: 3,    
        },
        markers: {
            size: 5,
            strokeWidth: 1,
            strokeColors: '#090909',
        },
        colors: colors,
    };
    new ApexCharts(document.querySelector("#" + chartId), { ...options, ...customOptions }).render();
}

export function createHeatmap(chartId: string, data: any, title: string | undefined, subtitle: string | undefined, color: string, height: number, customOptions?: any) {
    const options = {
        chart: {
            id: chartId,
            type: 'heatmap',
            height: height,
            toolbar: { show: false },
            background: '#090909',
            fontFamily: 'Inter, Arial, sans-serif',
            zoom: {
                enabled: false
            },
            animations: {
                enabled: !isMobile
            },
        },
        title: {
            text: title,
            align: 'center',
            style: {
                fontSize:  '20px'
            },
        },
        subtitle: {
            text: subtitle,
            align: 'center',
            floating: true,
            style: {
                fontSize:  '12px'
            },
        },
        series: data,
        xaxis: {
            labels: {
                show: true
            },
            title: {
                text: data[0]?.xLabel,
                offsetY: -10,
            },
        },
        yaxis: {
            title: {
                text: data[0]?.yLabel,
            },
        },
        tooltip: {
            custom: ({ seriesIndex, dataPointIndex, w }: { seriesIndex: number; dataPointIndex: number; w: any }) => {
                const xLabel = w.config.series[seriesIndex]?.xLabel ?? "X";
                const xCoord: string = w.config.series[seriesIndex].data[dataPointIndex].xAxis;

                const yLabel = w.config.series[seriesIndex]?.yLabel ?? "Y";
                const yCoord: string = w.config.series[seriesIndex].yAxis;

                const count: string = w.config.series[seriesIndex].data[dataPointIndex].y;
                return `
                <div class="apexcharts-tooltip-title" style="font-family: Inter, Arial, sans-serif; font-size: 12px;">${count} respondents</div>
                <div class="apexcharts-tooltip-box apexcharts-tooltip-scatter">
                    <div class="apexcharts-tooltip-text" style="font-family: Inter, Arial, sans-serif; font-size: 12px;">
                        ${yLabel}: <b>${yCoord}</b><br>
                        ${xLabel}: <b>${xCoord}</b><br>
                    </div>
                </div>`;
            },
        },
        grid: {
            yaxis: {
                lines: { 
                    show: true 
                }
            },
            xaxis: {
                lines: { 
                    show: true 
                }
            },
            borderColor: '#e0e0e020',
        },
        states: {
            active: {
                filter: {
                    type: 'none',
                }
            }
        },
        theme: {
            mode: 'dark',
            palette: 'palette1',
        },
        stroke: {
            show: false,
        },
        dataLabels: {
            enabled: true,
            style: {
                fontSize: '10px',
                fontWeight: '600',
            }
        },
        plotOptions: {
            heatmap: {
                radius: 0
            }
        },
        colors: [color],
    };
    new ApexCharts(document.querySelector("#" + chartId), { ...options, ...customOptions }).render();
}


function replaceXThanWithSymbol(s: string): string {
  return s
    .replace(/^\s*([^()]+?)(\s*\(.*?\))?\s+or\s+less\s*$/i, '≤$1$2')
    .replace(/^\s*([^()]+?)(\s*\(.*?\))?\s+or\s+more\s*$/i, '≥$1$2')
    .replace(/\s+/g, ' ')
    .trim();
}