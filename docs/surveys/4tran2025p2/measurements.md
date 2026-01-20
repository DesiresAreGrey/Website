---
description: Results of the 2025 4tran Survey 
image: https://desiresaregrey.com/assets/surveys/4tran2025p2/thumb.png
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
  justify-content: center;
  gap: 6px;
  flex-wrap: wrap;
}
.container > div {
  background: #141414;
  padding: 0.5rem 0.5rem;
  border-radius: 1rem;
  color: var(--md-typeset-color);
  font-size: .75rem;
  font-variation-settings: 'wght' 400;
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

<div class="container" style="margin-bottom: 6px;">
  <div>
    <select id="gender" class="input" style="width: 10rem; margin-bottom: 6px;" >
      <option>Man (FtM)</option>
      <option selected>Woman (MtF)</option>
      <option>Nonbinary</option>
    </select>
    <div>
      <select id="units" class="input" style="width: 10rem;">
        <option value="imperial">Imperial</option>
        <option value="metric">Metric</option>
      </select>
    </div>
  </div>
</div>
<div class="container">
  <div>
    <span id="height-feet-section">
      <input id="height-feet" class="input" type="number" inputmode="decimal" step="1" value="5" style="width: 2rem;">
      <span style="min-width: 12ch; margin-top: 4px; margin-right: 4px; margin-bottom: -0.325rem; font-size: 14px; font-variation-settings: 'wght' 400; opacity: 0.75">Feet</span>
    </span>
    <input id="height" class="input" type="number" inputmode="decimal" step="1" value="6" style="width: 2rem;">
    <span style="min-width: 12ch; margin-top: 4px; margin-bottom: -0.325rem; font-size: 14px; font-variation-settings: 'wght' 400; opacity: 0.75">Inches</span>
  </div>
  <div>
    <input id="weight" class="input" type="number" inputmode="decimal" step="1" value="66" style="width: 2.5rem;">
    <span style="min-width: 12ch; margin-top: 4px; margin-bottom: -0.325rem; font-size: 14px; font-variation-settings: 'wght' 400; opacity: 0.75">Pounds</span>
  </div>
</div>