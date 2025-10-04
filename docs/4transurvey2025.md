---
description: Results of the 2025 4tran Survey 
image: https://desiresaregrey.github.io/Website/assets/DesiresAreGrey.png
---
<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>

# The 2025 4tran Survey

just temp stuff

## test

<div id="chart1"></div>
<script>
    fetch("../assets/results/height.json").then(response => response.json()).then(data => {
        data.series[2].hidden = true;
        data.series[3].hidden = true;
        data.series[4].hidden = true;
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
        new ApexCharts(document.querySelector("#chart1"), options).render();
    });
</script>

## test

<div id="chart2"></div>
<script>
    fetch("../assets/results/gender.json").then(response => response.json()).then(data => {
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
        new ApexCharts(document.querySelector("#chart2"), options).render();
    });
</script>



