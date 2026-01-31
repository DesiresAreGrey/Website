---
title: "Extended 4tran Survey (2025.2) Results: Feedback & Conclusion"
description: The results page for the Extended 4tran Survey (2025.2), a follow up survey to the original 2025 4tran Survey
image: /assets/surveys/4tran2025p2/thumb.png
---
<link rel="stylesheet" href="/stylesheets/surveys/4tran2025p2.css">
<link rel="stylesheet" href="/stylesheets/socialmedia.css">
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

I'm glad the survey did well and that people liked it. I think next time my plan would be to do a survey across more of the trans community, rather
than just a 4tran survey. I have no idea how well that would go and if it would even be allowed, since for this survey I worked with 4tran's mods to
get my posts to stay up and get them pinned so that people would see them, and I have no idea if other more mainstream communities would be open to
that. <span style="font-size: 12px; color: #888">If you are a mod for one of those mainstream communities please reach out to me on Reddit if you're
interested.</span>

Again, disclaimer that I'm not a statistician or math person, so I can't really do any deeper sorta analysis of the data. There's also a lot of places
I could've gone deeper, like further breaking things down, but at the same time I already have 12 entire pages of results and I've spent so much time
working on this to the point I've been kinda neglecting myself so I could finish this asap. Its nice being on the end stretch now, writing out this
conclusion.

<p>
  Follow me on:
  <a class="noselect reddit" style="margin-right: 0.15rem;" href="https://www.reddit.com/user/DesiresAreGrey" target="_blank">
    <i class="fa-brands fa-reddit-alien" style="margin-right: -0.1rem;"></i>
    <span>Reddit</span>
  </a>
  <a class="noselect twitter" style="margin-right: 0.15rem;" href="https://twitter.com/DesiresAreGrey" target="_blank">
    <i class="fa-brands fa-twitter" style="margin-right: -0.1rem;"></i>
    <span>Twitter</span>
  </a>
  <a class="noselect youtube" style="margin-right: 0.15rem;" href="https://www.youtube.com/@DesiresAreGrey" target="_blank">
    <i class="fa-brands fa-youtube" style="margin-right: -0.1rem;"></i>
    <span>YouTube</span>
  </a>
</p>

___

<div class="button-container">
  <a class="big-button" href="../nsfw">Previous Page</a>
</div>