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

### Dating Preferences

#### Open to Dating

I wasn't sure whether to put the multiselect question or the single select question first, but I decided to go with the multiselect first since its
the least painful.

Interestingly, straight trans men are slightly more likely to be open to dating cis women than trans women. While for bi trans men, they are much more
likely to be open to dating trans women over cis women. Gay trans men are pretty evenly open towards cis and trans men (though a good chunk are open
to dating trans women and even cis women?).

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
      data-title="Genders Open to Dating"
      data-subtitle="Straight (FtM)"
      data-colors='["#259efa"]'
      >
    </div>
    <div id="datingpreferred-ftm-bisexual-bar" 
      class="apexchart chart-layer layer-b"
      style="height: 300px;"
      data-chart="bar"
      data-datakey="dating_preferred_genders_ftm_bisexual"
      data-title="Genders Open to Dating"
      data-subtitle="Bisexual (FtM)"
      data-colors='["#259efa"]'
      >
    </div>
    <div id="datingpreferred-ftm-gay-bar"
      class="apexchart chart-layer layer-c"
      style="height: 300px;"
      data-chart="bar"
      data-datakey="dating_preferred_genders_ftm_gay"
      data-title="Genders Open to Dating"
      data-subtitle="Gay (FtM)"
      data-colors='["#259efa"]'
      >
    </div>
    <div id="datingpreferred-ftm-asexual-bar"
      class="apexchart chart-layer layer-d"
      style="height: 300px;"
      data-chart="bar"
      data-datakey="dating_preferred_genders_ftm_asexual"
      data-title="Genders Open to Dating"
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

Straight trans women are generally a lot more open to dating cis men than they are to trans men, when compared to vice versa for straight trans men.
Bi trans women are most open to dating other trans women (bi trans men were most open to dating trans women as well).

<div class="chart-set">
  <input id="datingpreferredmtf-a" class="vh" type="radio" name="view-datingpreferredmtf" checked>
  <input id="datingpreferredmtf-b" class="vh" type="radio" name="view-datingpreferredmtf">
  <input id="datingpreferredmtf-c" class="vh" type="radio" name="view-datingpreferredmtf">
  <input id="datingpreferredmtf-d" class="vh" type="radio" name="view-datingpreferredmtf">

  <div class="chart-stack" style="min-height: 300px;">
    <div id="datingpreferred-mtf-straight-bar" 
      class="apexchart chart-layer layer-a"
      style="height: 300px;"
      data-chart="bar"
      data-datakey="dating_preferred_genders_mtf_straight"
      data-title="Genders Open to Dating"
      data-subtitle="Straight (MtF)"
      data-colors='["#ff4f69"]'
      >
    </div>
    <div id="datingpreferred-mtf-bisexual-bar" 
      class="apexchart chart-layer layer-b"
      style="height: 300px;"
      data-chart="bar"
      data-datakey="dating_preferred_genders_mtf_bisexual"
      data-title="Genders Open to Dating"
      data-subtitle="Bisexual (MtF)"
      data-colors='["#ff4f69"]'
      >
    </div>
    <div id="datingpreferred-mtf-lesbian-bar"
      class="apexchart chart-layer layer-c"
      style="height: 300px;"
      data-chart="bar"
      data-datakey="dating_preferred_genders_mtf_lesbian"
      data-title="Genders Open to Dating"
      data-subtitle="Lesbian (MtF)"
      data-colors='["#ff4f69"]'
      >
    </div>
    <div id="datingpreferred-mtf-asexual-bar"
      class="apexchart chart-layer layer-d"
      style="height: 300px;"
      data-chart="bar"
      data-datakey="dating_preferred_genders_mtf_asexual"
      data-title="Genders Open to Dating"
      data-subtitle="Asexual (MtF)"
      data-colors='["#ff4f69"]'
      >
    </div>
  </div>
  <div class="toggle">
    <label for="datingpreferredmtf-a" class="noselect">Straight</label>
    <label for="datingpreferredmtf-b" class="noselect">Bisexual</label>
    <label for="datingpreferredmtf-c" class="noselect">Lesbian</label>
    <label for="datingpreferredmtf-d" class="noselect">Asexual</label>
  </div>
</div>

#### Most Preferred

<div id="dating-most-preferred-ftm-ratio" 
  class="apexchart"
  style="height: 300px;"
  data-chart="ratio-bar"
  data-datakey="dating_most_preferred_gender_ftm"
  data-title="Most Preferred Gender for Dating"
  data-subtitle="FtM"
  data-colors='["#259efa", "#3f51b5", "#ff4f69", "#D7263D", "#00E396"]'
  >
</div>

<div id="dating-most-preferred-mtf-ratio"
  class="apexchart"
  style="height: 300px;"
  data-chart="ratio-bar"
  data-datakey="dating_most_preferred_gender_mtf"
  data-title="Most Preferred Gender for Dating"
  data-subtitle="MtF"
  data-colors='["#259efa", "#3f51b5", "#ff4f69", "#D7263D", "#00E396"]'
  >
</div>