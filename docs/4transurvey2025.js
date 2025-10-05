const colors = ['#259efa', '#ff4f69', '#00E396', '#3f51b5', '#D7263D'];

function createBarChart(chartId, dataUrl, title = undefined, hideSeries = [], customColors = undefined, height = 500) {
    fetch("../assets/survey2025/results/" + dataUrl).then(response => response.json()).then(data => {
        hideSeries.forEach(index => {
            if (data.series[index]) {
                data.series[index].hidden = true;
            }
        });
        data.categories = data.categories.map(c => replaceXThanWithSymbol(c));
        const options = {
            chart: {
                type: 'bar',
                height: height,
                stacked: true,
                toolbar: { show: true },
                background: '#090909',
                fontFamily: 'Inter, Arial, sans-serif',
            },
            title: {
                text: title,
                align: 'center',
                style: {
                    fontSize:  '20px'
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
                        return `${val} respondents (${pct}%)`;
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
            colors: customColors ?? colors
        };
        new ApexCharts(document.querySelector("#" + chartId), options).render();
    });
}

function createRatioBarChart(chartId, dataUrl, title = undefined, hideSeries = [], customColors = undefined, height = 300) {
    fetch("../assets/survey2025/results/" + dataUrl).then(response => response.json()).then(data => {
        hideSeries.forEach(index => {
            if (data.series[index]) {
                data.series[index].hidden = true;
            }
        });
        data.categories = data.categories.map(c => replaceXThanWithSymbol(c));
        const options = {
            chart: {
                type: 'bar',
                height: height,
                stacked: true,
                stackType: '100%',
                toolbar: { show: true },
                background: '#090909',
                fontFamily: 'Inter, Arial, sans-serif',
            },
            title: {
                text: title,
                align: 'center',
                style: {
                    fontSize:  '20px'
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
                enabled: true
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
            colors: customColors ?? colors
        };
        new ApexCharts(document.querySelector("#" + chartId), options).render();
    });
}

function createPopPyramidChart(chartId, dataUrl, title = undefined, bounds = 15.0) {
    fetch("../assets/survey2025/results/" + dataUrl).then(response => response.json()).then(data => {
        data.categories = data.categories.map(c => replaceXThanWithSymbol(c));
        const options = {
            chart: {
                type: 'bar',
                height: 500,
                stacked: true,
                toolbar: { show: true },
                background: '#090909',
                fontFamily: 'Inter, Arial, sans-serif',
            },
            series: data.series,
            title: {
                text: title,
                align: 'center',
                style: {
                    fontSize:  '20px'
                },
            },
            xaxis: {
                categories: data.categories,
                min: -bounds * 10, max: bounds * 10,
                labels: {
                    formatter: function (val) {
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
                    formatter: (val, opts) => {
                        const total = opts.w.globals.stackedSeriesTotals[opts.dataPointIndex];
                        const pct = total ? ((val / total) * 100).toFixed(1) : 0;
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
    });
}

function createPieChart(chartId, dataUrl, hideToolbar=false, customColors = undefined) {
    fetch("../assets/survey2025/results/" + dataUrl).then(response => response.json()).then(data => {
        const options = {
            chart: {
                type: 'pie',
                height: 325,
                toolbar: { show: !hideToolbar },
                background: '#090909',
                fontFamily: 'Inter, Arial, sans-serif',
            },
            series: data.series,
            labels: data.labels,
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
            colors: customColors ?? colors
        };
        new ApexCharts(document.querySelector("#" + chartId), options).render();
    });
}


function replaceXThanWithSymbol(s) {
  return String(s)
    .replace(/^\s*([^()]+?)(\s*\(.*?\))?\s+or\s+less\s*$/i, '≤$1$2')
    .replace(/^\s*([^()]+?)(\s*\(.*?\))?\s+or\s+more\s*$/i, '≥$1$2')
    .replace(/\s+/g, ' ')
    .trim();
}