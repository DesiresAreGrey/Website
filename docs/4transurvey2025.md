---
description: Results of the 2025 4tran Survey 
image: https://desiresaregrey.github.io/Website/assets/survey2025/thumb.png
---
<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
<script src="../4transurvey2025.js"></script>

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

<div id="age-capped"></div>
<script>createBarChart("age-capped", "age_capped_reversed.json", "Age (Overall)")</script>

<div id="age-capped-pop-pyramid"></div>
<script>createPopPyramidChart("age-capped-pop-pyramid", "age_capped_pop_pyramid.json", "Age (Population Pyramid)")</script>

## Height

<div id="height-reversed"></div>
<script>createBarChart("height-reversed", "height_reversed.json", "Height (Overall)")</script>

<div id="height-reversed-pop-pyramid"></div>
<script>createPopPyramidChart("height-reversed-pop-pyramid", "height_reversed_pop_pyramid.json", "Height (Population Pyramid)")</script>