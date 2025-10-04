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
    <div id="overallgenderbinary"></div>
    <script>createPieChart("overallgenderbinary", "gender_binary.json", true)</script>
  </div>

  <div>
    <div id="overallgender"></div>
    <script>createPieChart("overallgender", "gender.json")</script>
  </div>
</div>

## test

<div id="chart1"></div>
<script>createBarChart("chart1", "height.json", [2, 3, 4])</script>