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

## Age Distribution

### Overall

<div id="age-capped"></div>
<script>createBarChart("age-capped", "age_capped_reversed.json")</script>

<div id="age-capped-pop-pyramid"></div>
<script>createPopPyramidChart("age-capped-pop-pyramid", "age_capped_pop_pyramid.json")</script>

## test

<div id="chart1"></div>
<script>createBarChart("chart1", "height.json", [2, 3, 4])</script>