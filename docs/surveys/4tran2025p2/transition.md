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
<h6 style="margin: 0 0.2rem">Page 4 - Transition</h6>

<div class="nav-links" style="margin: 0.25rem 1rem;"></div>
<script src="/js/surveys/navlinks.js?v={{ now() }}" data-firstpage="/surveys/4tran2025p2/" data-toc="/assets/surveys/4tran2025p2/toc.json"></script>

## Transition

### Years Since Realizing

This is a box plot of how many years its been since people realized they were trans. Honestly I'm not sure people properly converted months into years
since I'm not sure if those outliers are real or not. I'm thinking next time it might be better to have separate fields for years and months to avoid
confusion.

<div id="years-since-realizing-boxplot" 
  class="apexchart"
  style="height: 300px;"
  data-chart="boxplot"
  data-datakey="years_since_realizing_boxplot"
  data-title="Years Since Realizing"
  >
</div>

### Years Repressing

This is a box plot of how many years people have been repressing being trans for. Again, not sure if people properly converted months into years, and
etc so it might be best to take this data with a grain of salt or whatever the phrase is.

<div id="years-repressing-boxplot" 
  class="apexchart"
  style="height: 300px;"
  data-chart="boxplot"
  data-datakey="years_repressing_boxplot"
  data-title="Years Repressing"
  >
</div>

### Reppressers

There are slightly more male reppressers than female (not a massive difference), though seemingly a lot of nonbinary people are repressers.

<div id="repper-ratio" 
  class="apexchart"
  style="height: 250px;"
  data-chart="ratio-bar"
  data-datakey="is_repper"
  data-title="Reppressers"
  data-colors='["#7B61FF", "#00E0B8"]'
  >
</div>

### Social Transition

Men have socially transitioned a lot more than women. It's likely due to a mixture of the effects of testosterone being harder to hide and the fact
that men are more likely to pass and be stealth.

<div id="social-transition-ratio" 
  class="apexchart"
  style="height: 250px;"
  data-chart="ratio-bar"
  data-datakey="social_transition"
  data-title="Social Transition"
  data-colors='["#7B61FF", "#3c57f1", "#00E0B8"]'
  >
</div>

### Medical Transition

However, women are more likely to have medically transitioned than men, likely due to the effects of estrogen being much easier to hide. As far as I
know MtF HRT tends to be easier to obtain through both DIY and official sources, which could also be a contributing factor.

I didn't expect nonbinary people to have a pretty high amount of medical transitioners though.

<div id="medical-transition-ratio" 
  class="apexchart"
  style="height: 250px;"
  data-chart="ratio-bar"
  data-datakey="medical_transition"
  data-title="Medical Transition"
  data-colors='["#7B61FF", "#00E0B8"]'
  >
</div>

#### Time on HRT

Honestly pretty even, with women being a bit more likely to have been on HRT for longer compared to men. Interesting that the minimum for men is
0.002...

<div class="chart-set">
  <input id="hrttime-a" class="vh" type="radio" name="view-hrttime" checked>
  <input id="hrttime-b" class="vh" type="radio" name="view-hrttime">
  
  <div class="chart-stack" style="min-height: 400px;">
    <div id="hrttime-boxplot" 
      class="apexchart chart-layer layer-a"
      style="height: 400px;"
      data-chart="boxplot"
      data-datakey="hrt_time_boxplot"
      data-title="Time on HRT"
      data-subtitle="Boxplot"
      >
    </div>
    <div id="hrttime-pop-pyramid" 
      class="apexchart chart-layer layer-b"
      style="height: 400px;"
      data-chart="pop-pyramid"
      data-datakey="hrt_time_pop_pyramid"
      data-title="Time on HRT"
      data-subtitle="Population Pyramid"
      data-bounds="25"
      >
    </div>
  </div>
  <div class="toggle">
    <label for="hrttime-a" class="noselect">Boxplot</label>
    <label for="hrttime-b" class="noselect">Population Pyramid</label>
  </div>
</div>

#### DIY or Prescribed

Interestingly, men are more likely to be prescribed HRT. In fact, men are the only group thats majority prescribed. I'm guessing its probably due to
FtM diy hrt being a bit harder to get and severely stigmatized in FtM spaces.


<div id="diyprescribed-ratio" 
  class="apexchart"
  style="height: 250px;"
  data-chart="ratio-bar"
  data-datakey="diy_or_prescribed"
  data-title="DIY or Prescribed"
  data-colors='["#7B61FF", "#00E0B8"]'
  >
</div>

#### Method of HRT

Honestly I did not expect only 21% of women to be on pills (oral or sublingual), I wonder how this compares to more mainstream communities which I'd
assume would be majority pills. 

It's also interesting how with men, IM and SubQ injections are almost the same, while with women/nbs its mostly SubQ. Theres also 1 man who uses
patches apparently which I didn't know was a thing. I'd also expect the amount of gel users to be higher in more mainstream communities, like how
pills would likely be for women.

<div class="chart-set">
  <input id="hrtmethod-a" class="vh" type="radio" name="view-hrtmethod" checked>
  <input id="hrtmethod-b" class="vh" type="radio" name="view-hrtmethod">
  
  <div class="chart-stack" style="min-height: 300px;">
    <div id="hrt-method-ratio" 
      class="apexchart chart-layer layer-a"
      style="height: 300px;"
      data-chart="ratio-bar"
      data-datakey="hrt_method"
      data-title="HRT Method"
      data-colors='["#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0", "#3c57f1"]'
      >
    </div>
    <div id="hrt-method-bar" 
      class="apexchart chart-layer layer-b"
      style="height: 300px;"
      data-chart="bar"
      data-datakey="hrt_method_flipped"
      data-title="HRT Method"
      >
    </div>
  </div>
  <div class="toggle">
    <label for="hrtmethod-a" class="noselect">Ratio</label>
    <label for="hrtmethod-b" class="noselect">Bar</label>
  </div>
</div>

#### Supplemental HRT



<div class="chart-set">
  <input id="hrtsuppl-a" class="vh" type="radio" name="view-hrtsuppl" checked>
  <input id="hrtsuppl-b" class="vh" type="radio" name="view-hrtsuppl">
  <input id="hrtsuppl-c" class="vh" type="radio" name="view-hrtsuppl">
  
  <div class="chart-stack" style="min-height: 500px;">
    <div id="hrtsuppl-ftm-bar" 
      class="apexchart chart-layer layer-a"
      style="height: 500px;"
      data-chart="bar"
      data-datakey="hrt_supplemental_ftm_flipped"
      data-title="Supplemental HRT"
      data-subtitle="FtM"
      >
    </div>
    <div id="hrtsuppl-mtf-bar" 
      class="apexchart chart-layer layer-b"
      style="height: 500px;"
      data-chart="bar"
      data-datakey="hrt_supplemental_mtf_flipped"
      data-title="Supplemental HRT"
      data-subtitle="MtF"
      data-colors='["#ff4f69"]'
      >
    </div>
    <div id="hrtsuppl-total-bar" 
      class="apexchart chart-layer layer-c"
      style="height: 500px;"
      data-chart="bar"
      data-datakey="hrt_supplemental_flipped"
      data-title="Supplemental HRT"
      data-subtitle="Total"
      >
    </div>
  </div>
  <div class="toggle">
    <label for="hrtsuppl-a" class="noselect">FtM</label>
    <label for="hrtsuppl-b" class="noselect">MtF</label>
    <label for="hrtsuppl-c" class="noselect">Total</label>
  </div>
</div>