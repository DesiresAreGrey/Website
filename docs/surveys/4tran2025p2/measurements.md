---
description: Results of the Extended 4tran Survey (2025.2)
image: /assets/surveys/4tran2025p2/thumb-measurements.png
---
<script type="importmap">
{
  "imports": {
    "apexcharts": "https://esm.sh/apexcharts"
  }
}
</script>
<script type="module" src="/js/surveys/4tran2025p2/measurements.js?v={{ now() }}"></script>
<style>
.container {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}
.container > div {
  /*background: #141414;
  padding: 0.5rem 0.5rem;
  border-radius: 50vw;
  color: var(--md-typeset-color);
  font-size: .75rem;
  font-variation-settings: 'wght' 400;*/
}
.input {
  padding: .15rem;
  background: #252525;
  border: .1rem solid;
  border-radius: 50vw;
  border-color: transparent;
  font-weight: 200;
  font-size: 17px;
  font-family: Inter, sans-serif;
  text-align: center;
  color: #ccc;
  transition: all 200ms ease;
  &:hover {
    border-color: var(--md-primary-fg-color);
  }
  &:focus-visible {
    border-color: #9152ff;
  }
}
@media (max-width: 640px) {
  .container {
    justify-content: center;
  }
}
</style>

# Extended 4tran Survey (2025.2)
<h6 style="margin: 0 0.2rem">Page 2 - Measurements</h6>

<div class="nav-links" style="margin: 0.25rem 1rem;">
  <a href="../">Demographics</a> - 
  <a href="" class="active">Measurements</a> - 
  <a href="../socialmedia">Social Media</a> - 
  <a href="../transition">Transition</a> - 
  <a href="../sexuality">Sexuality</a> - 
  <a href="../relationships">Relationships</a> - 
  <a href="../health">Health</a> - 
  <a href="../misc">Misc</a> - 
  <a href="../nsfw">NSFW</a> - 
  <a href="../conclusion">Conclusion</a>
</div>

## Measurements



<div class="container">
  <select id="units" class="input" style="width: 10rem;">
    <option value="imperial">Imperial</option>
    <option value="metric">Metric</option>
  </select>
</div>

<div class="container">

<div style="margin-top: 6px;" >
    <span id="height-feet-section">
      <input id="height-feet" class="input" type="text" inputmode="decimal" step="1" value="5" style="width: 2rem;">
      <span style="min-width: 12ch; margin-top: 4px; margin-right: 4px; margin-bottom: -0.325rem; font-size: 14px; font-variation-settings: 'wght' 400; opacity: 0.75">Feet</span>
    </span>
    <input id="height" class="input" type="text" inputmode="decimal" step="1" value="6" style="width: 2rem;">
    <span id="height-units-label" style="min-width: 12ch; margin-top: 4px; margin-bottom: -0.325rem; font-size: 14px; font-variation-settings: 'wght' 400; opacity: 0.75">Inches</span>
  </div>
</div>

<div style="margin-top: 6px;" class="container">
  <div>
    <input id="weight" class="input" type="number" inputmode="decimal" step="1" value="170" style="width: 3rem;">
    <span id="weight-units-label" style="min-width: 12ch; margin-top: 4px; margin-bottom: -0.325rem; font-size: 14px; font-variation-settings: 'wght' 400; opacity: 0.75">Pounds</span>
  </div>
</div>

<div style="margin-top: 6px;">
  <div style="border-radius: 1rem;">
    <span id="info-height" class="container" style="min-width: 12ch; font-size: 14px; font-variation-settings: 'wght' 400; opacity: 0.75">0'0" - 0.0 cm</span>
    <span id="info-weight" class="container" style="min-width: 12ch; margin-top: 4px; font-size: 14px; font-variation-settings: 'wght' 400; opacity: 0.75">0 lbs - 0 kg</span>
    <span id="info-bmi" class="container" style="min-width: 12ch; margin-top: 4px; font-size: 14px; font-variation-settings: 'wght' 400; opacity: 0.75">0 BMI</span>
  </div>
</div>

___

Scatter Plot of Height vs Weight (Imperial)

<div id="height-weight-scatter"
  style="height: 500px;"
  data-chart="scatter"
  data-datakey="height_weight_imperial_scatter"
  data-title="height_weight_imperial_scatter"
  data-hideseries='[]'
  >
</div>


<!--
<div class="container" style="margin-top: 6px;">
  <div style="border-radius: 1rem;">
  <span id="hp-out" class="percentile-container" style="min-width: 12ch; margin-top: -0.125rem; font-size: 21px; font-variation-settings: 'wght' 500;">0th  Percentile</span>
  <span id="hp-out" class="percentile-container" style="min-width: 12ch; margin-top: 0; font-size: 16px; font-variation-settings: 'wght' 400;">You are taller than  0% of FtMs</span>
  <span id="hp-out" class="percentile-container" style="min-width: 12ch; margin-top: 0; font-size: 16px; font-variation-settings: 'wght' 400;">You are shorter than 100% of FtMs</span>
  </div>
</div>
-->
