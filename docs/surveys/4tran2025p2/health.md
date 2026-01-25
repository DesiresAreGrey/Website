---
description: Results of the Extended 4tran Survey (2025.2)
image: /assets/surveys/4tran2025p2/thumb.png
---
<script type="importmap">
{
  "imports": {
    "apexcharts": "https://esm.sh/apexcharts",
    "d3": "https://esm.sh/d3",
    "d3-cloud": "https://esm.sh/d3-cloud"
  }
}
</script>
<script type="module" src="/js/surveys/4tran2025p2/4tran2025p2.js?v={{ now() }}"></script>

# Extended 4tran Survey (2025.2)
<h6 style="margin: 0 0.2rem">Page 8 - Health</h6>

<div class="nav-links" style="margin: 0.25rem 1rem;"></div>
<script src="/js/surveys/navlinks.js?v={{ now() }}" data-firstpage="/surveys/4tran2025p2/" data-toc="/assets/surveys/4tran2025p2/toc.json"></script>

## Health

### Drugs

I guess it makes sense that men use drugs the most.

<div id="doesdrugs-ratio" 
  class="apexchart"
  style="height: 250px;"
  data-chart="ratio-bar"
  data-datakey="does_recreational_drugs"
  data-title="Does Recreational Drugs"
  data-colors='["#7B61FF", "#00E0B8"]'
  >
</div>

Caffeine being the most popular drug isn't surprising. Whats interesting is that for men, nicotine is more popular than none, while for women, none is
more popular than nicotine. Do men smoke a lot?

<div class="chart-set">
  <input id="drugsused-a" class="vh" type="radio" name="view-drugsused" checked>
  <input id="drugsused-b" class="vh" type="radio" name="view-drugsused">
  <input id="drugsused-c" class="vh" type="radio" name="view-drugsused">
  
  <div class="chart-stack" style="min-height: 500px;">
    <div id="drugsused-ftm-bar" 
      class="apexchart chart-layer layer-a"
      style="height: 500px;"
      data-chart="bar"
      data-datakey="recreational_drugs_ftm_flipped"
      data-title="Drugs Used"
      data-subtitle="FtM"
      >
    </div>
    <div id="drugsused-mtf-bar" 
      class="apexchart chart-layer layer-b"
      style="height: 500px;"
      data-chart="bar"
      data-datakey="recreational_drugs_mtf_flipped"
      data-title="Drugs Used"
      data-subtitle="MtF"
      data-colors='["#ff4f69"]'
      >
    </div>
    <div id="drugsused-total-bar" 
      class="apexchart chart-layer layer-c"
      style="height: 500px;"
      data-chart="bar"
      data-datakey="recreational_drugs_flipped"
      data-title="Drugs Used"
      data-subtitle="Total"
      >
    </div>
  </div>
  <div class="toggle">
    <label for="drugsused-a" class="noselect">FtM</label>
    <label for="drugsused-b" class="noselect">MtF</label>
    <label for="drugsused-c" class="noselect">Total</label>
  </div>
</div>

Here's a wordcloud of people who selected "Other" for drugs used and then inputted their own drug.

<div class="wordcloud" id="drugs-other-cloud" 
  style="height: 350px;" 
  data-scale="20"
  data-color="#a47bea"
  >
</div>

### STDs

STDs aren't very common thankfully...

<div id="hasstds-ratio" 
  class="apexchart"
  style="height: 250px;"
  data-chart="ratio-bar"
  data-datakey="has_stds"
  data-title="Has STDs"
  data-colors='["#7B61FF", "#00E0B8"]'
  >
</div>

<div class="chart-set">
  <input id="stds-a" class="vh" type="radio" name="view-stds" checked>
  <input id="stds-b" class="vh" type="radio" name="view-stds">
  <input id="stds-c" class="vh" type="radio" name="view-stds">

  <div class="chart-stack" style="min-height: 400px;">
    <div id="stds-ftm-bar" 
      class="apexchart chart-layer layer-a"
      style="height: 400px;"
      data-chart="bar"
      data-datakey="stds_ftm_flipped"
      data-title="STDs"
      data-subtitle="FtM"
      >
    </div>
    <div id="stds-mtf-bar" 
      class="apexchart chart-layer layer-b"
      style="height: 400px;"
      data-chart="bar"
      data-datakey="stds_mtf_flipped"
      data-title="STDs"
      data-subtitle="MtF"
      data-colors='["#ff4f69"]'
      >
    </div>
    <div id="stds-total-bar" 
      class="apexchart chart-layer layer-c"
      style="height: 400px;"
      data-chart="bar"
      data-datakey="stds_flipped"
      data-title="STDs"
      data-subtitle="Total"
      >
    </div>
  </div>
  <div class="toggle">
    <label for="stds-a" class="noselect">FtM</label>
    <label for="stds-b" class="noselect">MtF</label>
    <label for="stds-c" class="noselect">Total</label>
  </div>
</div>
