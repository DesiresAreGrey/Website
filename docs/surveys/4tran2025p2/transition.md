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

Minoxidil being the most common thing taken by men makes a ton of sense. I didn't expect DHT to be second most common for them though, since I've seen
people say its hard to get, but then again what other supplemental HRT would men take? Also why are there men on progesterone?

With women the results are pretty expected, since most supplemental HRT is for women. It's pretty interesting to see that by far spironolactone is the
most common AA taken, which I guess makes sense though hopefully in the future more people will be on bicalutamide or just on monotherapy. It's also
pretty cool that Pio is pretty common, which I didn't expect.

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

### Voice

#### Voice Passing

Pretty expected results tbh, testosterone affects voice while estrogen does not.

<div id="voicepasses-ratio" 
  class="apexchart"
  style="height: 200px;"
  data-chart="ratio-bar"
  data-datakey="voice_passes"
  data-title="Voice Passes"
  data-colors='["#7B61FF", "#00E0B8"]'
  >
</div>

#### Voice Training

The differences between genders here is pretty expected, however I didn't expect so many men to have voice trained.

<div id="voicetrained-ratio" 
  class="apexchart"
  style="height: 200px;"
  data-chart="ratio-bar"
  data-datakey="voice_trained"
  data-title="Voice Trained"
  data-colors='["#7B61FF", "#00E0B8"]'
  >
</div>

Now time to put them together. 

Once again pretty expected results, training is much more important for women. The 35% of men who voice passes woithout voice training is still crazy
to see though regardless.

<div id="voicetrainedpasses-ratio" 
  class="apexchart"
  style="height: 200px;"
  data-chart="ratio-bar"
  data-datakey="voice_trained_passes"
  data-title="Voice Passes and Trained"
  data-colors='["#7B61FF", "#3c57f1", "#FF4560", "#FEB019"]'
  >
</div>

I had to remove the outliers for this one since people were putting in super large numbers, I think all the year input questions are all a bit broken
due to people not putting in the right numbers. For some reason this didn't happen with the first survey though.

Interestingly, men have voice trained for somewhat longer than women, despite needing it less.

<div id="years-voice-training-boxplot" 
  class="apexchart"
  style="height: 300px;"
  data-chart="boxplot"
  data-datakey="years_voice_training_boxplot"
  data-title="Years Voice Training"
  >
</div>

### Passing

#### Current

This question was rating your current passability a scale of 0-10, where 0 is completely unpassing and 10 is completely passing.

Pretty expected once again, men pass better since testosterone does a lot more for passing. It is interesting how the most common answer for women was
0 (completely unpassing), while for men it was 6 (mostly passing).

<div class="chart-set">
  <input id="passingscalecurrent-a" class="vh" type="radio" name="view-passingscalecurrent" checked>
  <input id="passingscalecurrent-b" class="vh" type="radio" name="view-passingscalecurrent">
  
  <div class="chart-stack" style="min-height: 350px;">
    <div id="passing-scale-current-pop-pyramid" 
      class="apexchart chart-layer layer-a"
      style="height: 350px;"
      data-chart="pop-pyramid"
      data-datakey="passing_scale_current_pop_pyramid_reversed"
      data-title="Passing Scale"
      data-subtitle="Current"
      data-bounds="25"
      >
    </div>
    <div id="passing-scale-current-boxplot" 
      class="apexchart chart-layer layer-b"
      style="height: 350px;"
      data-chart="boxplot"
      data-datakey="passing_scale_current_boxplot"
      data-title="Passing Scale"
      data-subtitle="Current"
      >
    </div>
  </div>
  <div class="toggle">
    <label for="passingscalecurrent-a" class="noselect">Population Pyramid</label>
    <label for="passingscalecurrent-b" class="noselect">Boxplot</label>
  </div>
</div>

#### Future

This question was where on the 0-10 scale do you think you'll end up, i.e. your max potential. Men are GMI.

<div class="chart-set">
  <input id="passingscalefuture-a" class="vh" type="radio" name="view-passingscalefuture" checked>
  <input id="passingscalefuture-b" class="vh" type="radio" name="view-passingscalefuture">
  
  <div class="chart-stack" style="min-height: 350px;">
    <div id="passing-scale-future-pop-pyramid" 
      class="apexchart chart-layer layer-a"
      style="height: 350px;"
      data-chart="pop-pyramid"
      data-datakey="passing_scale_future_pop_pyramid_reversed"
      data-title="Passing Scale"
      data-subtitle="Future"
      data-bounds="25"
      >
    </div>
    <div id="passing-scale-future-boxplot" 
      class="apexchart chart-layer layer-b"
      style="height: 350px;"
      data-chart="boxplot"
      data-datakey="passing_scale_future_boxplot"
      data-title="Passing Scale"
      data-subtitle="Future"
      >
    </div>
  </div>
  <div class="toggle">
    <label for="passingscalefuture-a" class="noselect">Population Pyramid</label>
    <label for="passingscalefuture-b" class="noselect">Boxplot</label>
  </div>
</div>


#### Years on HRT vs Passing 

This chart shows the relationship between years on HRT (x axis) and current passing scale (y axis). Pretty clear trend of being on HRT for longer
meaning better passing, though for some reason that trend is less clean with men. This also shows that trans women generally need to be on HRT for longer to
achieve the same level of passing as men

<div class="chart-set">
  <input id="passinghrt-a" class="vh" type="radio" name="view-passinghrt" checked>
  <input id="passinghrt-b" class="vh" type="radio" name="view-passinghrt">
  
  <div class="chart-stack" style="min-height: 600px;">
    <div id="passing-hrt-ftm-boxplot" 
      class="apexchart chart-layer layer-a"
      style="height: 600px;"
      data-chart="boxplot"
      data-datakey="passing_hrt_ftm_boxplot"
      data-title="Years On HRT / Passing Scale"
      data-subtitle="FtM"
      data-bounds="15"
      >
    </div>
    <div id="passing-hrt-mtf-boxplot" 
      class="apexchart chart-layer layer-b"
      style="height: 600px;"
      data-chart="boxplot"
      data-datakey="passing_hrt_mtf_boxplot"
      data-title="Years On HRT / Passing Scale"
      data-subtitle="MtF"
      data-bounds="15"
      >
    </div>
  </div>
  <div class="toggle">
    <label for="passinghrt-a" class="noselect">FtM</label>
    <label for="passinghrt-b" class="noselect">MtF</label>
  </div>
</div>

#### Stealth

Unsurprisingly, men are way more likely to be stealth.

<div id="stealth-ratio" 
  class="apexchart"
  style="height: 200px;"
  data-chart="ratio-bar"
  data-datakey="stealth"
  data-title="Stealth"
  data-colors='["#7B61FF", "#3c57f1", "#00E0B8"]'
  >
</div>