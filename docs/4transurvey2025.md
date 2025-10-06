---
description: Results of the 2025 4tran Survey 
image: https://desiresaregrey.github.io/Website/assets/survey2025/thumb.png
---
<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
<script src="../4transurvey2025.js?2"></script>
<!-- js is gonna make me 41 -->

# The 2025 4tran Survey

write stuff here

## Overall Gender Divide

write stuff here

<div class="charts-grid">
  <div>
    <div id="gender-overall-binary"></div>
    <script>createPieChart("gender-overall-binary", "gender_binary.json", undefined, true)</script>
  </div>

  <div>
    <div id="gender-overall"></div>
    <script>createPieChart("gender-overall", "gender.json", undefined)</script>
  </div>
</div>

___

## Demographics

### Age

write stuff here  

<div class="chart-set">
  <input id="age-a" class="vh" type="radio" name="view-age" checked>
  <input id="age-b" class="vh" type="radio" name="view-age">
  
  <div class="chart-stack">
    <div id="age-capped-pop-pyramid" class="chart-layer layer-a"></div>
    <div id="age-capped-overall" class="chart-layer layer-b"></div>
  </div>
  <script>
    createPopPyramidChart("age-capped-pop-pyramid", "age_capped_pop_pyramid.json", "Age (Population Pyramid)", 16);
    createBarChart("age-capped-overall", "age_capped_reversed.json", "Age (Overall)");
  </script>
  <div class="toggle">
    <label for="age-a" class="noselect">Population Pyramid</label>
    <label for="age-b" class="noselect">Overall</label>
  </div>
</div>

write stuff here

<div id="under18"></div>
<script>
    createRatioBarChart("under18", "under18.json", "Under 18", [], ["#7B61FF", "#00E0B8"]);
</script>

### Height

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
    createPopPyramidChart("height-pop-pyramid", "height_reversed_pop_pyramid.json", "Height (Population Pyramid)", 18);
  </script>
  <div class="toggle">
    <label for="height-a" class="noselect">Population Pyramid</label>
    <label for="height-b" class="noselect">Overall</label>
  </div>
</div>

### Sexuality

write stuff here

<div id="sexuality-chart"></div>
<script>
    createRatioBarChart("sexuality-chart", "sexuality_flipped.json", "Sexuality", [], ['#8AA0B3', '#8E5CF1', '#FF4D88', '#2E294E']);
</script>

### Assigned Sex at Birth

#### Intersex

write stuff here

<div id="intersex-chart"></div>
<script>
    createRatioBarChart("intersex-chart", "intersex.json", "Intersex", [3, 4, 5], ["#7B61FF", "#00E0B8"], 225);
</script>

#### Nonbinary ASAB

write stuff here

<div id="nbasab"></div>
<script>
    createPieChart("nbasab", "nb_asab.json", "Nonbinary ASAB", false, ['#259efa', '#ff4f69', '#00E396', '#2E294E']);
</script>

### Location

write stuff here  
i need a library that does maps...

___

## Reddit

### Main/Favorite Subreddit

write stuff here  

<div class="chart-set">
  <input id="favsub-a" class="vh" type="radio" name="view-favsub" checked>
  <input id="favsub-b" class="vh" type="radio" name="view-favsub">
  
  <div class="chart-stack" style="min-height: 300px;">
    <div id="favsub-ratio" class="chart-layer layer-a"></div>
    <div id="favsub-bar" class="chart-layer layer-b"></div>
  </div>
  <script>
    createRatioBarChart("favsub-ratio", "favorite_subreddit.json", "Main/Favorite Subreddit (Ratio)", [3, 4]);
    createBarChart("favsub-bar", "favorite_subreddit.json", "Main/Favorite Subreddit (Total)", [3, 4], undefined, 300);
  </script>
  <div class="toggle">
    <label for="favsub-a" class="noselect">Ratio</label>
    <label for="favsub-b" class="noselect">Total</label>
  </div>
</div>

write stuff here

<div id="favsub-ages"></div>
<script>
    createBoxPlot("favsub-ages", "favorite_subreddit_age.json", "Main/Favorite Subreddits Age Distribution", false, undefined, 300);
</script>

### Used Subreddits

write stuff here  

<div class="chart-set">
  <input id="usedsub-a" class="vh" type="radio" name="view-usedsub" checked>
  <input id="usedsub-b" class="vh" type="radio" name="view-usedsub">
  
  <div class="chart-stack" style="min-height: 500px;">
    <div id="usedsub-ratio" class="chart-layer layer-a"></div>
    <div id="usedsub-bar" class="chart-layer layer-b"></div>
  </div>
  <script>
    createRatioBarChart("usedsub-ratio", "used_subreddits.json", "Used Subreddits (Ratio)", [3, 4], undefined, 500);
    createBarChart("usedsub-bar", "used_subreddits.json", "Used Subreddits (Total)", [3, 4], undefined, 500);
  </script>
  <div class="toggle">
    <label for="usedsub-a" class="noselect">Ratio</label>
    <label for="usedsub-b" class="noselect">Total</label>
  </div>
</div>

### Where You Came From

write stuff here  

### Contributer or Lurker

write stuff here

<div id="contributer-chart"></div>
<script>
    createRatioBarChart("contributer-chart", "contributer.json", "Contributer or Lurker", [], ["#7B61FF", "#00E0B8"]);
</script>

___

## Transition

### HRT

write stuff here

<div id="onhrt-chart"></div>
<script>
    createRatioBarChart("onhrt-chart", "hrt_nocis.json", "On HRT", [], ["#7B61FF", "#00E0B8"], 225);
</script>

write stuff here  

<div class="chart-set">
  <input id="hrt-time-a" class="vh" type="radio" name="view-hrt-time" checked>
  <input id="hrt-time-b" class="vh" type="radio" name="view-hrt-time">
  
  <div class="chart-stack" style="min-height: 400px;">
    <div id="hrt-time-pop-pyramid" class="chart-layer layer-a"></div>
    <div id="hrt-time-overall" class="chart-layer layer-b"></div>
  </div>
  <script>
    createPopPyramidChart("hrt-time-pop-pyramid", "hrt_time_pop_pyramid.json", "Time on HRT (Population Pyramid)", 30, 400);
    createBarChart("hrt-time-overall", "hrt_time_reversed.json", "Time on HRT (Overall)", [3, 4, 5], undefined, 400);
  </script>
  <div class="toggle">
    <label for="hrt-time-a" class="noselect">Population Pyramid</label>
    <label for="hrt-time-b" class="noselect">Overall</label>
  </div>
</div>

### Surgery

write stuff here

<div id="hassurgery-chart"></div>
<script>
    createRatioBarChart("hassurgery-chart", "surgery_nocis.json", "Has Had Surgery", [], ["#7B61FF", "#00E0B8"], 225);
</script>

write stuff here

<div id="surgeries-chart"></div>
<script>
    createRatioBarChart("surgeries-chart", "surgeries_nocis.json", "Surgeries", [], ["#2983FF", "#EA3546", "#4caf50", "#FEB019", "#FF9800", "#449DD1", "#43BCCD", "#00E396", "#7D02EB", "#775DD0", "#546E7A", "#2E294E"], 275);
</script>

### Coming Out

write stuff here

<div id="came-out-chart"></div>
<script>
    createRatioBarChart("came-out-chart", "came_out_nocis.json", "Came Out", [], ["#7B61FF", "#00E0B8"], 225);
</script>


write stuff here  

<div class="chart-set">
  <input id="came-out-time-a" class="vh" type="radio" name="came-out-time" checked>
  <input id="came-out-time-b" class="vh" type="radio" name="came-out-time">
  
  <div class="chart-stack" style="min-height: 400px;">
    <div id="came-out-time-pop-pyramid" class="chart-layer layer-a"></div>
    <div id="came-out-time-overall" class="chart-layer layer-b"></div>
  </div>
  <script>
    createPopPyramidChart("came-out-time-pop-pyramid", "years_came_out_pop_pyramid.json", "Time Since Coming Out (Population Pyramid)", 30, 400);
    createBarChart("came-out-time-overall", "years_came_out_reversed.json", "Time Since Coming Out (Overall)", [3, 4, 5], undefined, 400);
  </script>
  <div class="toggle">
    <label for="came-out-time-a" class="noselect">Population Pyramid</label>
    <label for="came-out-time-b" class="noselect">Overall</label>
  </div>
</div>

write stuff here  

<div class="chart-set">
  <input id="realizing-time-a" class="vh" type="radio" name="realizing-time" checked>
  <input id="realizing-time-b" class="vh" type="radio" name="realizing-time">
  
  <div class="chart-stack" style="min-height: 400px;">
    <div id="realizing-time-pop-pyramid" class="chart-layer layer-a"></div>
    <div id="realizing-time-overall" class="chart-layer layer-b"></div>
  </div>
  <script>
    createPopPyramidChart("realizing-time-pop-pyramid", "years_realized_pop_pyramid.json", "Time Since Realizing (Population Pyramid)", 30, 400);
    createBarChart("realizing-time-overall", "years_realized_reversed.json", "Time Since Realizing (Overall)", [3, 4, 5], undefined, 400);
  </script>
  <div class="toggle">
    <label for="realizing-time-a" class="noselect">Population Pyramid</label>
    <label for="realizing-time-b" class="noselect">Overall</label>
  </div>
</div>

### Passing

write stuff here

<div id="passing-level-chart"></div>
<script>
    createRatioBarChart("passing-level-chart", "passing_level_reversed_nocis.json", "Current Passing Level", [], ["#333f44", "#2E294E", "#5653FE", "#8210e6", "#A300D6"], 225);
</script>

write stuff here

<div id="future-passing-level-chart"></div>
<script>
    createRatioBarChart("future-passing-level-chart", "future_passing_level_reversed_nocis.json", "Future Passing Level", [], ["#333f44", "#2E294E", "#5653FE", "#7D02EB", "#A300D6"], 225);
</script>

write stuff here

<div id="stealth-chart"></div>
<script>
    createRatioBarChart("stealth-chart", "stealth_nocis.json", "Stealth", [], ["#8210e6", "#2E294E", "#333f44"], 225);
</script>

___