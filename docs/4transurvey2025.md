---
description: Results of the 2025 4tran Survey 
image: https://desiresaregrey.github.io/Website/assets/survey2025/thumb.png
---
<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
<script src="../4transurvey2025.js?1"></script>
<!-- js is gonna make me 41 -->

# The 2025 4tran Survey

write stuff here

## Overall Gender Divide

write stuff here

<div class="charts-grid">
  <div>
    <div id="gender-overall-binary"></div>
    <script>createPieChart("gender-overall-binary", "gender_binary.json", true)</script>
  </div>

  <div>
    <div id="gender-overall"></div>
    <script>createPieChart("gender-overall", "gender.json")</script>
  </div>
</div>

## Age

write stuff here  

<div class="chart-set">
  <input id="age-a" class="vh" type="radio" name="view-age" checked>
  <input id="age-b" class="vh" type="radio" name="view-age">
  
  <div class="chart-stack">
    <div id="age-capped-pop-pyramid" class="chart-layer layer-a"></div>
    <div id="age-capped-overall" class="chart-layer layer-b"></div>
  </div>
  <script>
    createPopPyramidChart("age-capped-pop-pyramid", "age_capped_pop_pyramid.json", "Age (Population Pyramid)");
    createBarChart("age-capped-overall", "age_capped_reversed.json", "Age (Overall)");
  </script>
  <div class="toggle">
    <label for="age-a" class="noselect">Population Pyramid</label>
    <label for="age-b" class="noselect">Overall</label>
  </div>
</div>

 <div id="under18"></div>
<script>
    createRatioBarChart("under18", "under18.json", "Under 18", [], ["#7B61FF", "#00E0B8"]);
</script>

## Height

write stuff here

<div class="chart-set">
  <input id="height-a" class="vh" type="radio" name="view-height" checked>
  <input id="height-b" class="vh" type="radio" name="view-height">
  
  <div class="chart-stack">
    <div id="height-pop-pyramid" class="chart-layer layer-a"></div>
    <div id="height-overall" class="chart-layer layer-b"></div>
  </div>
  <script>
    createBarChart("height-overall", "height_reversed.json", "Height (Overall)");
    createPopPyramidChart("height-pop-pyramid", "height_reversed_pop_pyramid.json", "Height (Population Pyramid)");
  </script>
  <div class="toggle">
    <label for="height-a" class="noselect">Population Pyramid</label>
    <label for="height-b" class="noselect">Overall</label>
  </div>
</div>