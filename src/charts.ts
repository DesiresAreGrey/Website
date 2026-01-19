import "./utils.js";
import ApexCharts from 'apexcharts';

export function createRatioBarChart(chartId: string, data: any, title: string | undefined = undefined, subtitle: string | undefined = undefined, hideSeries: number[], customColors: string[], height: number = 300) {
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
        colors: customColors
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