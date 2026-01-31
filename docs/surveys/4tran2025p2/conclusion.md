---
title: "Extended 4tran Survey (2025.2) Results: Feedback & Conclusion"
description: The results page for the Extended 4tran Survey (2025.2), a follow up survey to the original 2025 4tran Survey
image: /assets/surveys/4tran2025p2/thumb.png
---
<link rel="stylesheet" href="/stylesheets/surveys/4tran2025p2.css">
<script type="importmap">
{
  "imports": {
    "apexcharts": "https://esm.sh/apexcharts",
    "d3": "https://esm.sh/d3",
    "d3-cloud": "https://esm.sh/d3-cloud"
  }
}
</script>
<script type="module" src="/js/surveys/4tran2025p2/4tran2025p2.js"></script>

# Extended 4tran Survey (2025.2)
<h6 style="margin: 0 0.2rem">Page 12 - Feedback & Conclusion</h6>

<div class="nav-links" style="margin: 0.25rem 1rem;"></div>
<script src="/js/surveys/navlinks.js" data-firstpage="/surveys/4tran2025p2/" data-toc="/assets/surveys/4tran2025p2/toc.json"></script>

## Feedback

### Rating

Glad to see that most people liked the survey :)

<div class="chart-set">
  <input id="surveyrating-a" class="vh" type="radio" name="view-surveyrating" checked>
  <input id="surveyrating-b" class="vh" type="radio" name="view-surveyrating">

  <div class="chart-stack" style="min-height: 300px;">
    <div id="survey-rating-boxplot" 
      class="apexchart chart-layer layer-a"
      style="height: 300px;"
      data-chart="boxplot"
      data-datakey="survey_rating_boxplot"
      data-title="Survey Rating"
      data-subtitle="Boxplot"
      >
    </div>
    <div id="survey-rating-bar" 
      class="apexchart chart-layer layer-b"
      style="height: 300px;"
      data-chart="ratio-bar"
      data-datakey="survey_rating"
      data-title="Survey Rating"
      data-subtitle="Ratio"
      data-colors='["#13003F","#2C0079","#470BB6","#5F3DDA","#6D4FEC","#7B61FF"]'
      >
    </div>
  </div>
  <div class="toggle">
    <label for="surveyrating-a" class="noselect">Boxplot</label>
    <label for="surveyrating-b" class="noselect">Ratio</label>
  </div>
</div>

Reading through the survey comments, people also pretty positive about the survey and a lot of the stuff said was really touching. I also kept a
mental note of the suggestions people gave and I'll make sure to reread it all before making the next survey.

### Participation of the First Survey

Honestly very surprising to me, especially considering the first survey was only 2-3 months prior. I thought that there'd be more overlap with people
who took the first survey, but I guess the turnover rate for people in 4t4 is pretty high.

<div id="participant_of_first_survey-bar" 
  class="apexchart"
  style="height: 300px;"
  data-chart="ratio-bar"
  data-datakey="participant_of_first_survey"
  data-title="First Survey Participation"
  data-colors='["#7B61FF", "#00E0B8"]'
  >
</div>

### Survey Length

People generally liked the survey length, but there were a few whought thought it was too short. Personally, I think it was way too long. It wasn't
long from a survey taking perspective but getting these results done took forever, and there are 12 whole pages of results which is a lot compared to
the 4 pages of the first survey.

<div id="survey-length-ratio" 
  class="apexchart"
  style="height: 250px;"
  data-chart="ratio-bar"
  data-datakey="survey_length"
  data-title="Survey Length Rating"
  data-colors='["#7B61FF", "#5642bd", "#2E294E"]'
  >
</div>

## Conclusion

___

<div class="button-container">
  <a class="big-button" href="../nsfw">Previous Page</a>
</div>