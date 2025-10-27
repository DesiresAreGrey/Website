const path = document.currentScript.dataset.path || "/assets/";
const defaults = {
    title: undefined,
    subtitle: undefined,
    units: undefined,
    hideSeries: [],
    colors: undefined,
}

function createColumnChart(chartId, dataUrl, info = undefined, height = 500) {
    const title = info?.title ?? defaults.title;
    const subtitle = info?.subtitle ?? defaults.subtitle;
    const units = ((info?.units ?? defaults.units) ? " " + (info?.units ?? defaults.units) : "");
    const hideSeries = info?.hideSeries ?? defaults.hideSeries;
    const colors = info?.colors ?? defaults.colors;
    fetch(path + dataUrl).then(response => response.json()).then(data => {
        hideSeries.forEach(index => {
            if (data.series[index]) {
                data.series[index].hidden = true;
            }
        });
        data.categories = data.categories;
        const options = {
            chart: {
                type: 'bar',
                height: height,
                stacked: false,
                toolbar: { show: true },
                background: '#090909',
                fontFamily: 'Inter, Arial, sans-serif',
                events: {
                    mounted: (chartCtx) => apexMountedFix(chartCtx)
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
                text: subtitle?.replace("%generatedAt%", readableDateTime(data.generatedAt)),
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
                    formatter: (val, opts) => {
                        const total = opts.w.globals.stackedSeriesTotals[opts.dataPointIndex];
                        const pct = total ? ((val / total) * 100).toFixed(1) : 0;
                        return `${val} ${units} (${pct}%)`;
                    }
                }
            },
            plotOptions: {
                bar: {
                    horizontal: false,
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
    });
}

function createRatioBarChart(chartId, dataUrl, info = undefined, height = 500) {
    const title = info?.title ?? defaults.title;
    const subtitle = info?.subtitle ?? defaults.subtitle;
    const units = ((info?.units ?? defaults.units) ? " " + (info?.units ?? defaults.units) : "");
    const hideSeries = info?.hideSeries ?? defaults.hideSeries;
    const colors = info?.colors ?? defaults.colors;
    fetch(path + dataUrl).then(response => response.json()).then(data => {
        hideSeries.forEach(index => {
            if (data.series[index]) {
                data.series[index].hidden = true;
            }
        });
        data.categories = data.categories;
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
                    mounted: (chartCtx) => apexMountedFix(chartCtx)
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
                text: subtitle?.replace("%generatedAt%", readableDateTime(data.generatedAt)),
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
                    formatter: (val, opts) => {
                        const total = opts.w.globals.stackedSeriesTotals[opts.dataPointIndex];
                        const pct = total ? ((val / total) * 100).toFixed(1) : 0;
                        return `${val} ${units} (${pct}%)`;
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
    });
}

function apexMountedFix(chartCtx) {
    chartCtx.el.querySelectorAll('.apexcharts-menu-icon').forEach(el => el.removeAttribute('title'));
    chartCtx.el.querySelectorAll('.exportCSV').forEach(el => {
        el.removeAttribute('title');
        el.textContent = "CSV";
    });
}

function readableDateTime(timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleString(undefined, {
      dateStyle: "medium",
      timeStyle: "short"
    });
}