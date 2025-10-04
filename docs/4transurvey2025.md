---
description: Results of the 2025 4tran Survey 
image: https://desiresaregrey.github.io/Website/assets/DesiresAreGrey.png
---

# The 2025 4tran Survey

just temp stuff

## test

<div id="chart1"></div>
<div id="chart2"></div>
<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
<script>
    fetch("https://www.jsonkeeper.com/b/TLV5L").then(response => response.json()).then(data => {
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
            }
        };
        const chart1 = new ApexCharts(document.querySelector("#chart1"), options);
        chart1.render();
    });
    fetch("https://www.jsonkeeper.com/b/0UHU8").then(response => response.json()).then(data => {
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
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }],
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
            }
        };
        const chart2 = new ApexCharts(document.querySelector("#chart2"), options);
        chart2.render();
    });
</script>


## test
