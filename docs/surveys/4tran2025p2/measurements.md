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
.toggleContainer {
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: fit-content;
  border: .1rem solid var(--md-primary-fg-color);
  border-radius: 100vh;
  cursor: pointer;
  height: 40px; 
  font-variation-settings: 'wght' 400;
}
.toggleContainer::before {
  content: '';
  position: absolute;
  left: 2px;
  top: 2px;
  bottom: 2px;
  width: calc(50% - 2px); 
  border-radius: 100vh;
  background: var(--md-primary-fg-color);
  transition: all 0.3s;
}
.toggleCheckbox:checked + .toggleContainer::before {
  transform: translateX(100%);
}
.toggleContainer div {
  padding: 4px 16px;
  text-align: center;
  z-index: 1;
}
.toggleCheckbox {
  display: none;
}
.toggleCheckbox:checked + .toggleContainer div:first-child {
  color: var(--md-primary-fg-color);
  transition: color 0.3s;
}
.toggleCheckbox:checked + .toggleContainer div:last-child {
  color: white;
  transition: color 0.3s;
}
.toggleCheckbox + .toggleContainer div:first-child {
  color: white;
  transition: color 0.3s;
}
.toggleCheckbox + .toggleContainer div:last-child {
  color: var(--md-primary-fg-color);
  transition: color 0.3s;
}
.label .label-subtitle {
  font-size: 0.5rem;
  opacity: 0.7;
  margin-top: -0.2rem;
  margin-bottom: 0.2rem;
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


<div id="height-weight-scatter" style="height: 500px;" class="apexchart"></div>

<div class="label">Enable Scatter Plot
  <div class="label-subtitle">May be heavy on mobile</div>
</div>
<div style="margin-bottom: 6px; display: flex;">
  <input type="checkbox" id="scatterplot-toggle" class="toggleCheckbox" />
  <label for="scatterplot-toggle" class='toggleContainer'>
    <div class="noselect" style="margin-right: 16px; margin-left: 16px;">Show</div>   
    <div class="noselect" style="margin-right: 16px; margin-left: 16px;">Hide</div>
  </label>
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
