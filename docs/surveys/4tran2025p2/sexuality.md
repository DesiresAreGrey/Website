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
<h6 style="margin: 0 0.2rem">Page 5 - Sexuality</h6>

<div class="nav-links" style="margin: 0.25rem 1rem;"></div>
<script src="/js/surveys/navlinks.js?v={{ now() }}" data-firstpage="/surveys/4tran2025p2/" data-toc="/assets/surveys/4tran2025p2/toc.json"></script>

## Sexuality

### Label

<div id="label-ratio" 
  class="apexchart"
  style="height: 250px;"
  data-chart="ratio-bar"
  data-datakey="sexuality_label"
  data-title="Sexuality Label"
  data-colors='["#8AA0B3", "#8E5CF1", "#FF4D88", "#2E294E"]'
  >
</div>

### Current Attraction

Since sexuality labels can be confusing and imprecise, I added a section to rate from 0 to 10 your attraction towards men and/or women.

Its interesting how straight men are more likely to put values around 0 and 10, while with women its a bit more spread out. Women are less straight
than men...many such cases...

With bisexuality, men are perfectly even between being into men and women, while with women, they're a but more into women than men.

With gays/lesbians its pretty even between the men and the women they're in to (obviously flipped).

With asexuals, its interesting how both genders (especially the women) are a bit more into women than they are into men.

<div class="chart-set">
  <input id="attrcurrftm-a" class="vh" type="radio" name="view-attrcurrftm" checked>
  <input id="attrcurrftm-b" class="vh" type="radio" name="view-attrcurrftm">
  <input id="attrcurrftm-c" class="vh" type="radio" name="view-attrcurrftm">
  <input id="attrcurrftm-d" class="vh" type="radio" name="view-attrcurrftm">
  
  <div class="chart-stack" style="min-height: 200px;">
    <div id="attraction-current-ftm-straight-boxplot" 
      class="apexchart chart-layer layer-a"
      style="height: 200px;"
      data-chart="boxplot"
      data-datakey="attraction_current_ftm_straight_boxplot"
      data-title="Current Attraction"
      data-subtitle="Straight (FtM)"
      data-upper-color="#50b3ff"
      data-lower-color="#259efa"
      >
    </div>
    <div id="attraction-current-ftm-bisexual-boxplot" 
      class="apexchart chart-layer layer-b"
      style="height: 200px;"
      data-chart="boxplot"
      data-datakey="attraction_current_ftm_bisexual_boxplot"
      data-title="Current Attraction"
      data-subtitle="Bisexual (FtM)"
      data-upper-color="#50b3ff"
      data-lower-color="#259efa"
      >
    </div>
    <div id="attraction-current-ftm-gay-boxplot" 
      class="apexchart chart-layer layer-c"
      style="height: 200px;"
      data-chart="boxplot"
      data-datakey="attraction_current_ftm_gay_boxplot"
      data-title="Current Attraction"
      data-subtitle="Gay (FtM)"
      data-upper-color="#50b3ff"
      data-lower-color="#259efa"
      >
    </div>
    <div id="attraction-current-ftm-asexual-boxplot" 
      class="apexchart chart-layer layer-d"
      style="height: 200px;"
      data-chart="boxplot"
      data-datakey="attraction_current_ftm_asexual_boxplot"
      data-title="Current Attraction"
      data-subtitle="Asexual (FtM)"
      data-upper-color="#50b3ff"
      data-lower-color="#259efa"
      >
    </div>
  </div>
  <div class="toggle">
    <label for="attrcurrftm-a" class="noselect">Straight</label>
    <label for="attrcurrftm-b" class="noselect">Bisexual</label>
    <label for="attrcurrftm-c" class="noselect">Gay</label>
    <label for="attrcurrftm-d" class="noselect">Asexual</label>
  </div>
</div>

<div class="chart-set">
  <input id="attrcurrmtf-a" class="vh" type="radio" name="view-attrcurrmtf" checked>
  <input id="attrcurrmtf-b" class="vh" type="radio" name="view-attrcurrmtf">
  <input id="attrcurrmtf-c" class="vh" type="radio" name="view-attrcurrmtf">
  <input id="attrcurrmtf-d" class="vh" type="radio" name="view-attrcurrmtf">
  
  <div class="chart-stack" style="min-height: 200px;">
    <div id="attraction-current-mtf-straight-boxplot" 
      class="apexchart chart-layer layer-a"
      style="height: 200px;"
      data-chart="boxplot"
      data-datakey="attraction_current_mtf_straight_boxplot"
      data-title="Current Attraction"
      data-subtitle="Straight (MtF)"
      data-upper-color="#ff8295"
      data-lower-color="#ff4f69"
      >
    </div>
    <div id="attraction-current-mtf-bisexual-boxplot" 
      class="apexchart chart-layer layer-b"
      style="height: 200px;"
      data-chart="boxplot"
      data-datakey="attraction_current_mtf_bisexual_boxplot"
      data-title="Current Attraction"
      data-subtitle="Bisexual (MtF)"
      data-upper-color="#ff8295"
      data-lower-color="#ff4f69"
      >
    </div>
    <div id="attraction-current-mtf-lesbian-boxplot"
      class="apexchart chart-layer layer-c"
      style="height: 200px;"
      data-chart="boxplot"
      data-datakey="attraction_current_mtf_lesbian_boxplot"
      data-title="Current Attraction"
      data-subtitle="Lesbian (MtF)"
      data-upper-color="#ff8295"
      data-lower-color="#ff4f69"
      >
    </div>
    <div id="attraction-current-mtf-asexual-boxplot" 
      class="apexchart chart-layer layer-d"
      style="height: 200px;"
      data-chart="boxplot"
      data-datakey="attraction_current_mtf_asexual_boxplot"
      data-title="Current Attraction"
      data-subtitle="Asexual (MtF)"
      data-upper-color="#ff8295"
      data-lower-color="#ff4f69"
      >
    </div>
  </div>
  <div class="toggle">
    <label for="attrcurrmtf-a" class="noselect">Straight</label>
    <label for="attrcurrmtf-b" class="noselect">Bisexual</label>
    <label for="attrcurrmtf-c" class="noselect">Lesbian</label>
    <label for="attrcurrmtf-d" class="noselect">Asexual</label>
  </div>
</div>