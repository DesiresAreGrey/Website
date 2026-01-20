---
description: Results of the 2025 4tran Survey 
image: https://desiresaregrey.com/assets/surveys/4tran2025p2/thumb.png
---
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
<style>
.reddit {
    color: #ff5719 !important;
    font-variation-settings: 'wght' 650;
    transition: all 200ms ease !important;
}
.reddit:hover {
    color: #ff6026 !important;
    text-shadow: 0 0 32px #ff3c00;
    font-variation-settings: 'wght' 800;
}
.twitter {
    color: #1DA1F2 !important;
    font-variation-settings: 'wght' 650;
    transition: all 200ms ease !important;
}
.twitter:hover {
    color: #2ca6f2 !important;
    text-shadow: 0 0 32px #0091ff;
    font-variation-settings: 'wght' 800;
}
</style>

<script type="importmap">
{
  "imports": {
    "apexcharts": "https://esm.sh/apexcharts"
  }
}
</script>
<script type="module" src="/js/surveys/4tran2025p2/4tran2025p2.js?v={{ now() }}&path=../../assets/surveys/4tran2025p2/results/"></script>

# Extended 4tran Survey (2025.2)
<h6 style="margin: 0 0.2rem">Page 1 - Demographics</h6>

<div class="nav-links" style="margin: 0.25rem 1rem;">
  <a href="" class="active">Demographics</a> - 
  <a href="measurements">Measurements</a> - 
  <a href="socialmedia">Social Media</a> - 
  <a href="transition">Transition</a> - 
  <a href="sexuality">Sexuality</a> - 
  <a href="relationships">Relationships</a> - 
  <a href="health">Health</a> - 
  <a href="misc">Misc</a> - 
  <a href="nsfw">NSFW</a> - 
  <a href="conclusion">Conclusion</a>
</div>

This is the results page for the Extended 4tran Survey (2025.2) which is a follow up survey to the original 2025 4tran Survey, and includes questions that were requested but missing from the original survey. The survey was open from December 5 to December 31, 2025 and got **1,675** (real) responses. Duplicates were automatically filtered (if you submitted more than once, only your last submission was kept), and spam/etc was manually removed (thanks [u/ILoveFurnaceGenocide](https://www.reddit.com/user/ILoveFurnaceGenocide/){ target="_blank" } for the help). 

Sorry for taking so long to publish the results, I had a lot of stuff going on in December and January including recovery from FFS.

Its heavily recommended you view this site on desktop! The charts are interactive (click on the legend options to show/hide them). 

<p>
  Follow me on:
  <a class="noselect reddit" style="margin-right: 0.15rem;" href="https://www.reddit.com/user/DesiresAreGrey" target="_blank">
    <i class="fa-brands fa-reddit-alien" style="margin-right: -0.1rem;"></i>
    <span>Reddit</span>
  </a>
  <a class="noselect twitter" href="https://twitter.com/DesiresAreGrey" target="_blank">
    <i class="fa-brands fa-twitter" style="margin-right: -0.1rem;"></i>
    <span>Twitter</span>
  </a>
</p>

## Demographics

### Gender

The ratio between men and women is a bit better this time! Last time the binary pie chart had men at 23% and women at 77%, while here men are at 26%. A 3% increase isn't crazy but it's still pretty cool to see that number go up instead of down.

<div class="charts-grid">
  <div id="gender-binary-pie" 
    class="apexchart"
    style="height: 325px;"
    data-chart="pie"
    data-datakey="gender_binary"
    >
  </div>
  <div id="gender-all-pie" 
    class="apexchart"
    style="height: 325px;"
    data-chart="pie"
    data-datakey="gender_all"
    >
  </div>
</div>

### Age

Just like last time, trans men are younger. Theres also fewer older men with kinda a sharp-ish dropoff after 27, while with women its quite a bit more gradual.

<p style="font-size: 12px; color: #888">You can switch between the population pyramid and box plot with the tabs underneath the chart!</p>

<div class="chart-set">
  <input id="age-a" class="vh" type="radio" name="view-age" checked>
  <input id="age-b" class="vh" type="radio" name="view-age">
  
  <div class="chart-stack">
    <div id="age-pop-pyramid" 
      class="apexchart chart-layer layer-a"
      style="height: 500px;"
      data-chart="pop-pyramid"
      data-datakey="age_capped_pop_pyramid"
      data-title="Age"
      data-subtitle="Population Pyramid"
      data-bounds="18"
      >
    </div>
    <div id="age-boxplot" 
      class="apexchart chart-layer layer-b"
      style="height: 500px;"
      data-chart="boxplot"
      data-datakey="age_boxplot"
      data-subtitle="Box Plot"
      data-title="Age"
      >
    </div>
  </div>
  <div class="toggle">
    <label for="age-a" class="noselect">Population Pyramid</label>
    <label for="age-b" class="noselect">Column</label>
  </div>
</div>

This time for the adult graph I also included a section for those in between 18 and 20, since 21 is kinda "adult 2" especially in the US. Only 36% of men are legally able to drink in the US, compared to 62% of women. Obviously the number of men who are under 18 is also insane, but we went over that last time.

<div id="adults-ratio" 
  class="apexchart"
  style="height: 250px;"
  data-chart="ratio-bar"
  data-datakey="adults"
  data-title="Adulthood"
  data-colors='["#7B61FF", "#03a9f4", "#00E0B8"]'
  >
</div>

### Unit System

Thought that this would be kinda interesting since on the subreddits most people use inches/feet/pounds. I guess its not a surprise that on the survey most people used the imperial system.

If you're wondering where Height and Weight are, I made a dedicated measurements page (the next page) for it. (It has calculators and charts and stuff).

<div id="unit-system-ratio" 
  class="apexchart"
  style="height: 250px;"
  data-chart="ratio-bar"
  data-datakey="unit_systems"
  data-title="Unit System"
  data-colors='["#7B61FF", "#00E0B8"]'
  >
</div>

### Ethnicity

No surprise that everyone is white.

<div class="chart-set">
  <input id="ethnicity-a" class="vh" type="radio" name="view-ethnicity" checked>
  <input id="ethnicity-b" class="vh" type="radio" name="view-ethnicity">
  
  <div class="chart-stack" style="min-height: 450px;">
    <div id="ethnicity-bar" 
      class="apexchart chart-layer layer-a"
      style="height: 450px;"
      data-chart="bar"
      data-datakey="ethnicity_flipped"
      data-title="Ethnicity"
      data-subtitle="Bar"
      >
    </div>
    <div id="ethnicity-ratio" 
      class="apexchart chart-layer layer-b"
      style="height: 450px;"
      data-chart="ratio-bar"
      data-datakey="ethnicity"
      data-title="Ethnicity"
      data-subtitle="Ratio Bar"
      data-colors='["#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0", "#3F51B5"]'
      >
    </div>
  </div>
  <div class="toggle">
    <label for="ethnicity-a" class="noselect">Bar</label>
    <label for="ethnicity-b" class="noselect">Ratio</label>
  </div>
</div>

### Sex At Birth

<h4>Cis People</h4>

We can use sex at birth to separate cis people by their gender. I didn't include cis man and cis woman as options due to in the first survey a lot of passoids and self haters picked cis options instead of the proper trans options. Its fine to do that literally anywhere else but cis responses are generally ignored on here, so you're basically just spending 10 minutes filling out a survey for no reason. If you're a cis lurker or something then the cis option was meant for you. If you are a cis lurker feel free to dm me on reddit or twitter, I am always interested in hearing from cis lurkers about why they lurk.

<div id="cisgender-pie" 
  class="apexchart"
  style="height: 325px;"
  data-chart="pie"
  data-datakey="cis_genders"
  >
</div>

<h4>Nonbinary People</h4>

We can also use sex at birth to separate nonbinary people (controversial).

<div id="nb-asab-pie" 
  class="apexchart"
  style="height: 325px;"
  data-chart="pie"
  data-datakey="nb_sab"
  >
</div>

___
<div class="button-container">
  <a class="big-button" href="2">Next Page</a>
</div>