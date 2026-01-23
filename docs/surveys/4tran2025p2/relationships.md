---
description: Results of the Extended 4tran Survey (2025.2)
image: /assets/surveys/4tran2025p2/thumb.png
---
<script type="importmap">
{
  "imports": {
    "apexcharts": "https://esm.sh/apexcharts"
  }
}
</script>
<script type="module" src="/js/surveys/4tran2025p2/4tran2025p2.js?v={{ now() }}"></script>

# Extended 4tran Survey (2025.2)
<h6 style="margin: 0 0.2rem">Page 6 - Relationships</h6>

<div class="nav-links" style="margin: 0.25rem 1rem;"></div>
<script src="/js/surveys/navlinks.js?v={{ now() }}" data-firstpage="/surveys/4tran2025p2/" data-toc="/assets/surveys/4tran2025p2/toc.json"></script>

## Relationships
<!-- Data key
<div id="datingpreferred-ratio" 
  class="apexchart"
  style="height: 300px;"
  data-chart="ratio-bar"
  data-datakey="dating_preferred_genders"
  data-title="Reppressers"
  data-colors='["#259efa", "#3f51b5", "#ff4f69", "#D7263D", "#00E396"]'
  >
</div>-->

<div class="chart-set">
  <input id="datingpreferredftm-a" class="vh" type="radio" name="view-datingpreferredftm" checked>
  <input id="datingpreferredftm-b" class="vh" type="radio" name="view-datingpreferredftm">
  <input id="datingpreferredftm-c" class="vh" type="radio" name="view-datingpreferredftm">
  <input id="datingpreferredftm-d" class="vh" type="radio" name="view-datingpreferredftm">

  <div class="chart-stack" style="min-height: 300px;">
    <div id="datingpreferred-ftm-straight-bar" 
      class="apexchart chart-layer layer-a"
      style="height: 300px;"
      data-chart="bar"
      data-datakey="dating_preferred_genders_ftm_straight"
      data-title="Preferred Genders for Dating"
      data-subtitle="Straight (FtM)"
      data-colors='["#259efa"]'
      >
    </div>
    <div id="datingpreferred-ftm-bisexual-bar" 
      class="apexchart chart-layer layer-b"
      style="height: 300px;"
      data-chart="bar"
      data-datakey="dating_preferred_genders_ftm_bisexual"
      data-title="Preferred Genders for Dating"
      data-subtitle="Bisexual (FtM)"
      data-colors='["#259efa"]'
      >
    </div>
    <div id="datingpreferred-ftm-gay-bar"
      class="apexchart chart-layer layer-c"
      style="height: 300px;"
      data-chart="bar"
      data-datakey="dating_preferred_genders_ftm_gay"
      data-title="Preferred Genders for Dating"
      data-subtitle="Gay (FtM)"
      data-colors='["#259efa"]'
      >
    </div>
    <div id="datingpreferred-ftm-asexual-bar"
      class="apexchart chart-layer layer-d"
      style="height: 300px;"
      data-chart="bar"
      data-datakey="dating_preferred_genders_ftm_asexual"
      data-title="Preferred Genders for Dating"
      data-subtitle="Asexual (FtM)"
      data-colors='["#259efa"]'
      >
    </div>
  </div>
  <div class="toggle">
    <label for="datingpreferredftm-a" class="noselect">Straight</label>
    <label for="datingpreferredftm-b" class="noselect">Bisexual</label>
    <label for="datingpreferredftm-c" class="noselect">Gay</label>
    <label for="datingpreferredftm-d" class="noselect">Asexual</label>
  </div>
</div>

