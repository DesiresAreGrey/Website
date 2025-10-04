function createBarChart(chartId, dataUrl, hideSeries=[]) {
    fetch("../assets/survey2025/results/" + dataUrl).then(response => response.json()).then(data => {
        hideSeries.forEach(index => {
            if (data.series[index]) {
                data.series[index].hidden = true;
            }
        });
        const options = {
            chart: {
                type: 'bar',
                height: 500,
                stacked: true,
                toolbar: { show: true },
                background: '#090909'
            },
            series: data.series,
            xaxis: {
                categories: data.categories,
                labels: { rotate: -20 }
            },
            legend: {
                position: 'top',
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
                    borderRadius: 3
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
            colors: ['#008FFB', '#FF4560', '#3f51b5', '#D7263D', '#00E396']
        };
        new ApexCharts(document.querySelector("#" + chartId), options).render();
    });
}

function createPieChart(chartId, dataUrl) {
    fetch("../assets/survey2025/results/" + dataUrl).then(response => response.json()).then(data => {
        const options = {
            chart: {
                type: 'pie',
                height: 380,
                toolbar: { show: true },
                background: '#090909'
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
                position: 'top',
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
            colors: ['#008FFB', '#FF4560', '#3f51b5', '#D7263D', '#00E396']
        };
        new ApexCharts(document.querySelector("#" + chartId), options).render();
    });
}