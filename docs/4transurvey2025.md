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
    <script>createPieChart("gender-overall-binary", "gender_binary.json", true)</script>
  </div>

  <div>
    <div id="gender-overall"></div>
    <script>createPieChart("gender-overall", "gender.json")</script>
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
    createPieChart("nbasab", "nb_asab.json", false, ['#259efa', '#ff4f69', '#00E396', '#2E294E']);
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

<div id="usedsubs-ages"></div>
<script>
    createBoxPlot("usedsubs-ages", "used_subreddits_age.json", "Used Subreddits Age Distribution", false, undefined, 500);
</script>

### Where You Came From

write stuff here  

___