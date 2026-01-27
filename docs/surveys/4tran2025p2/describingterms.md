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
<h6 style="margin: 0 0.2rem">Page 9 - Describing Terms</h6>

<div class="nav-links" style="margin: 0.25rem 1rem;"></div>
<script src="/js/surveys/navlinks.js?v={{ now() }}" data-firstpage="/surveys/4tran2025p2/" data-toc="/assets/surveys/4tran2025p2/toc.json"></script>

## Describing Terms

### Serious

#### Given Options

<div class="chart-set">
  <input id="describingserious-a" class="vh" type="radio" name="view-describingserious" checked>
  <input id="describingserious-b" class="vh" type="radio" name="view-describingserious">

  <div class="chart-stack" style="min-height: 750px;">
    <div id="describingserious-ftm-bar" 
      class="apexchart chart-layer layer-a"
      style="height: 750px;"
      data-chart="bar"
      data-datakey="describing_terms_serious_ftm_flipped"
      data-title="Describing Terms - Serious"
      data-subtitle="FtM"
      >
    </div>
    <div id="describingserious-mtf-bar" 
      class="apexchart chart-layer layer-b"
      style="height: 750px;"
      data-chart="bar"
      data-datakey="describing_terms_serious_mtf_flipped"
      data-title="Describing Terms - Serious"
      data-subtitle="MtF"
      data-colors='["#ff4f69"]'
      >
    </div>
  </div>
  <div class="toggle">
    <label for="describingserious-a" class="noselect">FtM</label>
    <label for="describingserious-b" class="noselect">MtF</label>
  </div>
</div>

<div class="chart-set">
  <input id="describingseriouscloud-a" class="vh" type="radio" name="view-describingseriouscloud" checked>
  <input id="describingseriouscloud-b" class="vh" type="radio" name="view-describingseriouscloud">

  <div class="chart-stack" style="min-height: 550px;">
    <div id="describingserious-ftm-cloud" 
      class="wordcloud chart-layer layer-a"
      style="height: 550px;"
      data-datakey="describing_terms_serious_ftm_wordcloud"
      data-min-size="12"
      data-max-size="75"
      data-padding="3"
      data-color="#259efa"
      >
    </div>
    <div id="describingserious-mtf-cloud" 
      class="wordcloud chart-layer layer-b"
      style="height: 550px;"
      data-datakey="describing_terms_serious_mtf_wordcloud"
      data-min-size="10"
      data-max-size="75"
      data-padding="3"
      data-color="#ff4f69"
      >
    </div>
  </div>
  <div class="toggle">
    <label for="describingseriouscloud-a" class="noselect">FtM</label>
    <label for="describingseriouscloud-b" class="noselect">MtF</label>
  </div>
</div>


___

<div class="button-container">
  <a class="big-button" href="../health">Previous Page</a>
  <a class="big-button" href="../misc">Next Page</a>
</div>