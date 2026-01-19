---
description: Results of the 2025 4tran Survey 
image: https://desiresaregrey.com/assets/surveys/4tran2025p2/thumb.png
---
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
<style>
.reddit {
    color: #ff5719 !important;
    font-variation-settings: 'wght' 650;
    transition: all 200ms ease !important;
}
.reddit:hover {
    color: #ff6026 !important;
    text-shadow: 0 0 32px #ff3c00;
    font-variation-settings: 'wght' 800;
}
.twitter {
    color: #1DA1F2 !important;
    font-variation-settings: 'wght' 650;
    transition: all 200ms ease !important;
}
.twitter:hover {
    color: #2ca6f2 !important;
    text-shadow: 0 0 32px #0091ff;
    font-variation-settings: 'wght' 800;
}
</style>

<script type="importmap">
{
  "imports": {
    "apexcharts": "https://esm.sh/apexcharts",
    "@amcharts/amcharts5": "https://esm.sh/@amcharts/amcharts5",
    "@amcharts/amcharts5/map": "https://esm.sh/@amcharts/amcharts5/map",
    "@amcharts/amcharts5-geodata/worldLow": "https://esm.sh/@amcharts/amcharts5-geodata/worldLow",
    "@amcharts/amcharts5-geodata/usaLow": "https://esm.sh/@amcharts/amcharts5-geodata/usaLow"
  }
}
</script>
<script type="module" src="/js/surveys/4tran2025p2/4tran2025p2.js?v={{ now() }}&path=../../assets/surveys/4tran2025p2/results/"></script>

# Extended 4tran Survey (2025.2)
<h6 style="margin: 0 0.2rem">Page 1 - Demographics</h6>

<p>
  Follow me on:
  <a class="noselect reddit" style="margin-right: 0.15rem;" href="https://www.reddit.com/user/DesiresAreGrey" target="_blank">
    <i class="fa-brands fa-reddit-alien" style="margin-right: -0.1rem;"></i>
    <span>Reddit</span>
  </a>
  <a class="noselect twitter" href="https://twitter.com/DesiresAreGrey" target="_blank">
    <i class="fa-brands fa-twitter" style="margin-right: -0.1rem;"></i>
    <span>Twitter</span>
  </a>
</p>

## Test

test ratio

<div id="test-chart-ratio" 
    class="apexchart"
    style="height: 250px;"
    data-chart="ratio-bar"
    data-datakey="adults"
    data-title="Adults"
    data-colors='["#7B61FF", "#03a9f4", "#00E0B8"]'
    data-hideseries='[]'
    >
</div>

test pop pyramid

<div id="test-chart-pop-pyramid" 
    class="apexchart"
    style="height: 500px;"
    data-chart="pop-pyramid"
    data-datakey="age_capped_pop_pyramid"
    data-title="Age"
    data-bounds="18"
    >
</div>

test bar chart

<div id="test-chart-bar" 
    class="apexchart"
    style="height: 250px;"
    data-chart="bar"
    data-datakey="adults"
    data-title="Adults"
    data-colors='["#7B61FF", "#03a9f4", "#00E0B8"]'
    >
</div>

test column chart

<div id="test-chart-column" 
    class="apexchart"
    style="height: 250px;"
    data-chart="column"
    data-datakey="adults"
    data-title="Adults"
    data-colors='["#7B61FF", "#03a9f4", "#00E0B8"]'
    >
</div>

test chart set

<div class="chart-set">
  <input id="age-a" class="vh" type="radio" name="view-age" checked>
  <input id="age-b" class="vh" type="radio" name="view-age">
  
  <div class="chart-stack">
    <div id="test-chart-set-pop-pyramid" 
        class="apexchart chart-layer layer-a"
        style="height: 500px;"
        data-chart="pop-pyramid"
        data-datakey="age_capped_pop_pyramid"
        data-title="Age"
        data-bounds="18"
        >
    </div>
    <div id="test-chart-set-column" 
        class="apexchart chart-layer layer-b"
        style="height: 500px;"
        data-chart="column"
        data-datakey="adults"
        data-title="Adults"
        data-colors='["#7B61FF", "#03a9f4", "#00E0B8"]'
        >
    </div>
  </div>
  <div class="toggle">
    <label for="age-a" class="noselect">Population Pyramid</label>
    <label for="age-b" class="noselect">Column</label>
  </div>
</div>

test pie

<div id="test-chart-pie" 
    class="apexchart"
    style="height: 350px;"
    data-chart="pie"
    data-datakey="gender_all"
    data-title="Gender"
    >
</div>

test box plot

<div id="test-chart-boxplot" 
    class="apexchart"
    style="height: 250px;"
    data-chart="boxplot"
    data-datakey="age_boxplot"
    data-title="Age"
    >
</div>