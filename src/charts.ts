import "./utils.js";
import ApexCharts from 'apexcharts';

export function createRatioBarChart(chartId: string, data: any, title: string | undefined, subtitle: string | undefined, hideSeries: number[], colors: string[], height: number) {
    hideSeries.forEach(index => {
        if (data.series[index]) {
            data.series[index].hidden = true;
        }
    });
    data.categories = data.categories.map((c: string) => replaceXThanWithSymbol(c));
    const options = {
        chart: {
            type: 'bar',
            height: height,
            stacked: true,
            stackType: '100%',
            toolbar: { show: true },
            background: '#090909',
            fontFamily: 'Inter, Arial, sans-serif',
            events: {
                mounted: (chartCtx: any) => apexMountedFix(chartCtx),
                updated: (chartCtx: any) => apexMountedFix(chartCtx)
            }
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
            type: 'bar',
            height: height,
            stacked: true,
            toolbar: { show: true },
            background: '#090909',
            fontFamily: 'Inter, Arial, sans-serif',
            events: {
                mounted: (chartCtx: any) => apexMountedFix(chartCtx),
                updated: (chartCtx: any) => apexMountedFix(chartCtx)
            }
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
            type: 'bar',
            height: height,
            stacked: true,
            toolbar: { show: true },
            background: '#090909',
            fontFamily: 'Inter, Arial, sans-serif',
            events: {
                mounted: (chartCtx: any) => apexMountedFix(chartCtx),
                updated: (chartCtx: any) => apexMountedFix(chartCtx)
            }
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
            type: 'pie',
            height: height,
            toolbar: { show: false },
            background: '#090909',
            fontFamily: 'Inter, Arial, sans-serif',
            events: {
                mounted: (chartCtx: any) => apexMountedFix(chartCtx),
                updated: (chartCtx: any) => apexMountedFix(chartCtx)
            }
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

export function createBoxPlot(chartId: string, data: any, title: string | undefined, subtitle: string | undefined, height = 300) {
    const options = {
        chart: {
            type: 'boxPlot',
            height: height,
            toolbar: { show: false },
            background: '#090909',
            fontFamily: 'Inter, Arial, sans-serif',
            events: {
                mounted: (chartCtx: any) => apexMountedFix(chartCtx),
                updated: (chartCtx: any) => apexMountedFix(chartCtx)
            }
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
                console.log(outliers);
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
    new ApexCharts(document.querySelector("#" + chartId), options).render();
}


function replaceXThanWithSymbol(s: string): string {
  return String(s)
    .replace(/^\s*([^()]+?)(\s*\(.*?\))?\s+or\s+less\s*$/i, '≤$1$2')
    .replace(/^\s*([^()]+?)(\s*\(.*?\))?\s+or\s+more\s*$/i, '≥$1$2')
    .replace(/\s+/g, ' ')
    .trim();
}

function apexMountedFix(chartCtx: HTMLElement & { el: HTMLElement }) {
    chartCtx.el.$$('.apexcharts-menu-icon').forEach(el => el.removeAttribute('title'));
    chartCtx.el.$$('.exportCSV').forEach(el => {
        el.removeAttribute('title');
        el.textContent = "CSV";
    });
}