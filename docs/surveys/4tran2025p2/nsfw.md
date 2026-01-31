---
description: Results of the Extended 4tran Survey (2025.2)
image: /assets/surveys/4tran2025p2/thumb.png
---
<link rel="stylesheet" href="/stylesheets/surveys/4tran2025p2.css">
<script type="importmap">
{
  "imports": {
    "apexcharts": "https://esm.sh/apexcharts",
    "d3": "https://esm.sh/d3",
    "d3-cloud": "https://esm.sh/d3-cloud"
  }
}
</script>
<script type="module" src="/js/surveys/4tran2025p2/4tran2025p2.js"></script>

# Extended 4tran Survey (2025.2)
<h6 style="margin: 0 0.2rem">Page 11 - NSFW</h6>

<div class="nav-links" style="margin: 0.25rem 1rem;"></div>
<script src="/js/surveys/navlinks.js" data-firstpage="/surveys/4tran2025p2/" data-toc="/assets/surveys/4tran2025p2/toc.json"></script>

## NSFW

### Natal PIV

<div id="natal-piv-ratio" 
  class="apexchart"
  style="height: 250px;"
  data-chart="ratio-bar"
  data-datakey="natal_piv"
  data-title="Natal PIV"
  data-subtitle="Overall"
  data-colors='["#7B61FF", "#5642bd", "#2E294E"]'
  >
</div>

<div id="natal-piv-ftm-ratio" 
  class="apexchart"
  style="height: 250px;"
  data-chart="ratio-bar"
  data-datakey="natal_piv_ftm"
  data-title="Natal PIV"
  data-subtitle="FtM"
  data-colors='["#008FFB", "#15598c", "#1b3b4d"]'
  >
</div>

<div class="chart-set">
  <input id="natalpivftm-a" class="vh" type="radio" name="view-natalpivftm" checked>
  <input id="natalpivftm-b" class="vh" type="radio" name="view-natalpivftm">
  <input id="natalpivftm-c" class="vh" type="radio" name="view-natalpivftm">
  <input id="natalpivftm-d" class="vh" type="radio" name="view-natalpivftm">

  <div class="chart-stack" style="min-height: 300px;">
    <div id="natal-piv-ftm-straight-ratio" 
      class="apexchart  chart-layer layer-a"
      style="height: 300px;"
      data-chart="ratio-bar"
      data-datakey="natal_piv_ftm_straight"
      data-title="Natal PIV x Most Preferred Gender"
      data-subtitle="FtM (Straight)"
      data-colors='["#008FFB", "#15598c", "#1b3b4d"]'
      >
    </div>
    <div id="natal-piv-ftm-bisexual-ratio" 
      class="apexchart  chart-layer layer-b"
      style="height: 300px;"
      data-chart="ratio-bar"
      data-datakey="natal_piv_ftm_bisexual"
      data-title="Natal PIV x Most Preferred Gender"
      data-subtitle="FtM (Bisexual)"
      data-colors='["#008FFB", "#15598c", "#1b3b4d"]'
      >
    </div>
    <div id="natal-piv-ftm-gay-ratio" 
      class="apexchart  chart-layer layer-c"
      style="height: 300px;"
      data-chart="ratio-bar"
      data-datakey="natal_piv_ftm_gay"
      data-title="Natal PIV x Most Preferred Gender"
      data-subtitle="FtM (Gay)"
      data-colors='["#008FFB", "#15598c", "#1b3b4d"]'
      >
    </div>
    <div id="natal-piv-ftm-asexual-ratio" 
      class="apexchart  chart-layer layer-d"
      style="height: 300px;"
      data-chart="ratio-bar"
      data-datakey="natal_piv_ftm_asexual"
      data-title="Natal PIV x Most Preferred Gender"
      data-subtitle="FtM (Asexual)"
      data-colors='["#008FFB", "#15598c", "#1b3b4d"]'
      >
    </div>
  </div>
  <div class="toggle">
    <label for="natalpivftm-a" class="noselect">Straight</label>
    <label for="natalpivftm-b" class="noselect">Bisexual</label>
    <label for="natalpivftm-c" class="noselect">Gay</label>
    <label for="natalpivftm-d" class="noselect">Asexual</label>
  </div>
</div>

<div id="natal-piv-mtf-ratio" 
  class="apexchart"
  style="height: 250px;"
  data-chart="ratio-bar"
  data-datakey="natal_piv_mtf"
  data-title="Natal PIV"
  data-subtitle="MtF"
  data-colors='["#FF4560", "#801927", "#4d1f2a"]'
  >
</div>

<div class="chart-set">
  <input id="natalpivmtf-a" class="vh" type="radio" name="view-natalpivmtf" checked>
  <input id="natalpivmtf-b" class="vh" type="radio" name="view-natalpivmtf">
  <input id="natalpivmtf-c" class="vh" type="radio" name="view-natalpivmtf">
  <input id="natalpivmtf-d" class="vh" type="radio" name="view-natalpivmtf">

  <div class="chart-stack" style="min-height: 300px;">
    <div id="natal-piv-mtf-straight-ratio" 
      class="apexchart  chart-layer layer-a"
      style="height: 300px;"
      data-chart="ratio-bar"
      data-datakey="natal_piv_mtf_straight"
      data-title="Natal PIV x Most Preferred Gender"
      data-subtitle="MtF (Straight)"
      data-colors='["#FF4560", "#801927", "#4d1f2a"]'
      >
    </div>
    <div id="natal-piv-mtf-bisexual-ratio" 
      class="apexchart  chart-layer layer-b"
      style="height: 300px;"
      data-chart="ratio-bar"
      data-datakey="natal_piv_mtf_bisexual"
      data-title="Natal PIV x Most Preferred Gender"
      data-subtitle="MtF (Bisexual)"
      data-colors='["#FF4560", "#801927", "#4d1f2a"]'
      >
    </div>
    <div id="natal-piv-mtf-lesbian-ratio" 
      class="apexchart  chart-layer layer-c"
      style="height: 300px;"
      data-chart="ratio-bar"
      data-datakey="natal_piv_mtf_lesbian"
      data-title="Natal PIV x Most Preferred Gender"
      data-subtitle="MtF (Lesbian)"
      data-colors='["#FF4560", "#801927", "#4d1f2a"]'
      >
    </div>
    <div id="natal-piv-mtf-asexual-ratio" 
      class="apexchart  chart-layer layer-d"
      style="height: 300px;"
      data-chart="ratio-bar"
      data-datakey="natal_piv_mtf_asexual"
      data-title="Natal PIV x Most Preferred Gender"
      data-subtitle="MtF (Asexual)"
      data-colors='["#FF4560", "#801927", "#4d1f2a"]'
      >
    </div>
  </div>
  <div class="toggle">
    <label for="natalpivmtf-a" class="noselect">Straight</label>
    <label for="natalpivmtf-b" class="noselect">Bisexual</label>
    <label for="natalpivmtf-c" class="noselect">Lesbian</label>
    <label for="natalpivmtf-d" class="noselect">Asexual</label>
  </div>
</div>

___

<div class="button-container">
  <a class="big-button" href="../misc">Previous Page</a>
  <a class="big-button" href="../conclusion">Next Page</a>
</div>