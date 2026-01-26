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
<h6 style="margin: 0 0.2rem">Page 9 - Miscellaneous</h6>

<div class="nav-links" style="margin: 0.25rem 1rem;"></div>
<script src="/js/surveys/navlinks.js?v={{ now() }}" data-firstpage="/surveys/4tran2025p2/" data-toc="/assets/surveys/4tran2025p2/toc.json"></script>

## Miscellaneous

### Views On DIY

At first I thought this boxplot was broken for men and women, but it actually turns out so many men/women voted 10 that every answer other than 10 is counted as an
outlier. 1307/1675 (78%) of respondents voted 10.

I originally wrote that above line before I remembered to include the data for nonbinary people, where this isn't true. 9 is the minimum (excluding
outliers) value for nonbinary people, but the lowest outlier is 0 with 2 respondents picking it (men and women did not pick 0 at all).

<div class="chart-set">
  <input id="viewdiy-a" class="vh" type="radio" name="view-viewdiy" checked>
  <input id="viewdiy-b" class="vh" type="radio" name="view-viewdiy">

  <div class="chart-stack" style="min-height: 300px;">
    <div id="views-on-diy-boxplot" 
      class="apexchart chart-layer layer-a"
      style="height: 300px;"
      data-chart="boxplot"
      data-datakey="views_on_diy_boxplot"
      data-title="Views On DIY"
      data-subtitle="Boxplot"
      >
    </div>
    <div id="views-on-diy-bar" 
      class="apexchart chart-layer layer-b"
      style="height: 300px;"
      data-chart="ratio-bar"
      data-datakey="views_on_diy"
      data-title="Views On DIY"
      data-subtitle="Ratio"
      data-colors='["#02000D","#080025","#13003F","#1F005B","#2C0079","#390099","#470BB6","#5328C8","#5F3DDA","#6D4FEC","#7B61FF"]'
      >
    </div>
  </div>
  <div class="toggle">
    <label for="viewdiy-a" class="noselect">Boxplot</label>
    <label for="viewdiy-b" class="noselect">Ratio</label>
  </div>
</div>

### NEET Status

Men are the least likely to be a NEET (Not in Education, Employment, or Training).

<div id="isneet-ratio" 
  class="apexchart"
  style="height: 250px;"
  data-chart="ratio-bar"
  data-datakey="is_neet"
  data-title="Is NEET"
  data-colors='["#7B61FF", "#00E0B8"]'
  >
</div>

### Malebrained/Fembrained

Interestingly, men are the most likely to believe in the malebrained/fembrained concept. It does make sense that nonbinary people are the least likely
to believe in it, since the concept is more binary in nature.

<div id="xbrained-ratio" 
  class="apexchart"
  style="height: 250px;"
  data-chart="ratio-bar"
  data-datakey="belief_in_xbrained"
  data-title="Believes in Malebrained/Fembrained"
  data-colors='["#7B61FF", "#5642bd", "#2E294E"]'
  >
</div>