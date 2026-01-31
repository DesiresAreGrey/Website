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

Personally, I am very much not a fan of binary trans people using their natal genitalia for PIV. It's nice to see that the vast majority of binary
trans people feel the same. It makes sense that nonbinary people would be less against natal PIV, since their dysphoria varies a lot and is generally
less than binary trans people.

I would eventually like to do a general trans reddit survey to see how it compares, since the vibe of mainstream communities seems pretty different.

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

Everyone talks about PIVP**ns, but they don't seem as common in 4tran circles compared to mainstream trans communities. As expected, gay men
would be the most likely to be into natal PIV, with straight men being the least likely (ignoring asexuals).

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

### Using Natal Genitalia


<div id="natal-using-ratio" 
  class="apexchart"
  style="height: 250px;"
  data-chart="ratio-bar"
  data-datakey="natal_using"
  data-title="Using Natal Genitalia"
  data-subtitle="Overall"
  data-colors='["#7B61FF", "#5642bd", "#2E294E"]'
  >
</div>

#### FtM



<div id="natal-using-ftm-ratio" 
  class="apexchart"
  style="height: 250px;"
  data-chart="ratio-bar"
  data-datakey="natal_using_ftm"
  data-title="Using Natal Genitalia"
  data-subtitle="FtM"
  data-colors='["#008FFB", "#15598c", "#1b3b4d"]'
  >
</div>

It is interesting how there is 1 straight trans man who would want to be penetrated by a trans woman.

<div class="chart-set">
  <input id="natalusingftm-a" class="vh" type="radio" name="view-natalusingftm" checked>
  <input id="natalusingftm-b" class="vh" type="radio" name="view-natalusingftm">
  <input id="natalusingftm-c" class="vh" type="radio" name="view-natalusingftm">
  <input id="natalusingftm-d" class="vh" type="radio" name="view-natalusingftm">

  <div class="chart-stack" style="min-height: 300px;">
    <div id="natal-using-ftm-straight-ratio" 
      class="apexchart  chart-layer layer-a"
      style="height: 300px;"
      data-chart="ratio-bar"
      data-datakey="natal_using_ftm_straight"
      data-title="Using Natal Genitalia x Most Preferred Gender"
      data-subtitle="FtM (Straight)"
      data-colors='["#008FFB", "#15598c", "#1b3b4d"]'
      >
    </div>
    <div id="natal-using-ftm-bisexual-ratio" 
      class="apexchart  chart-layer layer-b"
      style="height: 300px;"
      data-chart="ratio-bar"
      data-datakey="natal_using_ftm_bisexual"
      data-title="Using Natal Genitalia x Most Preferred Gender"
      data-subtitle="FtM (Bisexual)"
      data-colors='["#008FFB", "#15598c", "#1b3b4d"]'
      >
    </div>
    <div id="natal-using-ftm-gay-ratio" 
      class="apexchart  chart-layer layer-c"
      style="height: 300px;"
      data-chart="ratio-bar"
      data-datakey="natal_using_ftm_gay"
      data-title="Using Natal Genitalia x Most Preferred Gender"
      data-subtitle="FtM (Gay)"
      data-colors='["#008FFB", "#15598c", "#1b3b4d"]'
      >
    </div>
    <div id="natal-using-ftm-asexual-ratio" 
      class="apexchart  chart-layer layer-d"
      style="height: 300px;"
      data-chart="ratio-bar"
      data-datakey="natal_using_ftm_asexual"
      data-title="Using Natal Genitalia x Most Preferred Gender"
      data-subtitle="FtM (Asexual)"
      data-colors='["#008FFB", "#15598c", "#1b3b4d"]'
      >
    </div>
  </div>
  <div class="toggle">
    <label for="natalusingftm-a" class="noselect">Straight</label>
    <label for="natalusingftm-b" class="noselect">Bisexual</label>
    <label for="natalusingftm-c" class="noselect">Gay</label>
    <label for="natalusingftm-d" class="noselect">Asexual</label>
  </div>
</div>

#### MtF

<div id="natal-using-mtf-ratio" 
  class="apexchart"
  style="height: 250px;"
  data-chart="ratio-bar"
  data-datakey="natal_using_mtf"
  data-title="Using Natal Genitalia"
  data-subtitle="MtF"
  data-colors='["#FF4560", "#801927", "#4d1f2a"]'
  >
</div>

<div class="chart-set">
  <input id="natalusingmtf-a" class="vh" type="radio" name="view-natalusingmtf" checked>
  <input id="natalusingmtf-b" class="vh" type="radio" name="view-natalusingmtf">
  <input id="natalusingmtf-c" class="vh" type="radio" name="view-natalusingmtf">
  <input id="natalusingmtf-d" class="vh" type="radio" name="view-natalusingmtf">

  <div class="chart-stack" style="min-height: 300px;">
    <div id="natal-using-mtf-straight-ratio" 
      class="apexchart  chart-layer layer-a"
      style="height: 300px;"
      data-chart="ratio-bar"
      data-datakey="natal_using_mtf_straight"
      data-title="Using Natal Genitalia x Most Preferred Gender"
      data-subtitle="MtF (Straight)"
      data-colors='["#FF4560", "#801927", "#4d1f2a"]'
      >
    </div>
    <div id="natal-using-mtf-bisexual-ratio" 
      class="apexchart  chart-layer layer-b"
      style="height: 300px;"
      data-chart="ratio-bar"
      data-datakey="natal_using_mtf_bisexual"
      data-title="Using Natal Genitalia x Most Preferred Gender"
      data-subtitle="MtF (Bisexual)"
      data-colors='["#FF4560", "#801927", "#4d1f2a"]'
      >
    </div>
    <div id="natal-using-mtf-lesbian-ratio" 
      class="apexchart  chart-layer layer-c"
      style="height: 300px;"
      data-chart="ratio-bar"
      data-datakey="natal_using_mtf_lesbian"
      data-title="Using Natal Genitalia x Most Preferred Gender"
      data-subtitle="MtF (Lesbian)"
      data-colors='["#FF4560", "#801927", "#4d1f2a"]'
      >
    </div>
    <div id="natal-using-mtf-asexual-ratio" 
      class="apexchart  chart-layer layer-d"
      style="height: 300px;"
      data-chart="ratio-bar"
      data-datakey="natal_using_mtf_asexual"
      data-title="Using Natal Genitalia x Most Preferred Gender"
      data-subtitle="MtF (Asexual)"
      data-colors='["#FF4560", "#801927", "#4d1f2a"]'
      >
    </div>
  </div>
  <div class="toggle">
    <label for="natalusingmtf-a" class="noselect">Straight</label>
    <label for="natalusingmtf-b" class="noselect">Bisexual</label>
    <label for="natalusingmtf-c" class="noselect">Lesbian</label>
    <label for="natalusingmtf-d" class="noselect">Asexual</label>
  </div>
</div>

___

<div class="button-container">
  <a class="big-button" href="../misc">Previous Page</a>
  <a class="big-button" href="../conclusion">Next Page</a>
</div>