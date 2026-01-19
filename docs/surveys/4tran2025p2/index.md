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

<div id="test-chart-ratio" 
  class="apexchart"
  style="height: 250px;"
  data-chart="ratio-bar"
  data-datakey="adults"
  data-title="Adulthood"
  data-colors='["#7B61FF", "#03a9f4", "#00E0B8"]'
  >
</div>