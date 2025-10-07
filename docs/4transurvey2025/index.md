---
description: Results of the 2025 4tran Survey 
image: https://desiresaregrey.github.io/Website/assets/survey2025/thumb.png
---
<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
<script src="https://cdn.amcharts.com/lib/5/index.js"></script>
<script src="https://cdn.amcharts.com/lib/5/map.js"></script>
<script src="https://cdn.amcharts.com/lib/5/geodata/usaLow.js"></script>
<script src="https://cdn.amcharts.com/lib/5/geodata/worldLow.js"></script>
<script src="../4transurvey2025.js?8"></script>
<!-- js is gonna make me 41 :( -->

# The 2025 4tran Survey
<h6 style="margin: 0 0.2rem">Page 1</h6>

[**Page 1**]() - [Page 2](2) - [Page 3](3) - [Page 4](4) - [Amekyras's Analysis](amekyras)

Here are some of the results of the survey I conducted from September 30th to October 6th 2025! Some of you may remember that a year ago I ran a bunch of polls over the few months I've been posting on r/4tran4, and then in November I went through all the polls and compiled all the results into a [document](https://www.reddit.com/r/4tran4/comments/1gi24vt/the_desiresaregrey_poll_report_november/). I remember being a bit frustrated since I wasn't good at figuring out how to do charts and whatever and so I just put everything into excel and pasted the outputted images into a google doc lol. I had since wanted to do a survey but I was lazy and didn't wanna go through all that trouble, but a few days ago I kinda felt like finally making that survey I've been wanting to make for months.

I expected to get maybe about 50-100 results after weeks of keeping the survey open, but to my surprise I got *hundreds* of responses in hours! I felt a bit overwhelmed tbh and I didn't think that doing the same thing where I put excel generated charts into a google doc and call it a day. So I created a website. I've already had some experience with doing this stuff so I didn't think it'd be too hard, I also had to learn how to use a charting library (ApexCharts) for interactive charts so they'd look nice and would actually be useful. I used C# to aggregate results and generate json files that apex charts could easily accept, cause I absolutely hate javascript and I would not want to parse/aggregate all this data using it (also the raw data would be sensitive, so I would have to process it anyways). Maybe I'm dumb for using C# to go through the data but like C# is my favorite language and usually people use Python for data stuff and I am Python's number one hater.

Anyways after several hours/days of figuring all this stuff out, here is everything I've been able to aggregate and stuff. It's a lot but its not every possible thing I could've found using this data since most of the stuff is just separated by gender. 

Also some of you may have noticed that you were able to submit multiple responses by changing your IP; unfortunately for you, tally.so also assigns a respondent ID to people based on multiple factors. I chose to prevent duplicate submissions by IP address because I removed all duplicate responses from the same ID in a step afterwards. Unfortunately since duplicate responses usually means a troll response, I removed everyone who submitted multiple responses.

Its heavily recommended you view this site on desktop! The charts are interactive (click on the legend options to show/hide them) and also they are a bit heavier to render than I originally thought, which is why I've separated everything into 3 separate pages, to hopefully reduce the amount your phone would have to render at once. There is also a table of contents to the right side on desktop and in the menu at the top left on mobile!

## Overall Gender Divide

Majority trans women, how surprising...  
Not much to say here, but its interesting (and depressing) how [in 2024](https://docs.google.com/document/d/1FwnTI2Z-d3gwFIgVM8KpuV5rKnzBW8GGBmNoEHqT45c/edit?tab=t.0#heading=h.2g9r57wchu7g), the ratio was quite a bit better with 32% of total votes being trans men, compared to only 23% now...  

Also, for future reference, the cis man and women responses aren't really as relevent since some gigapassoids or reppers chose to list themselves as cis. There were some seemingly actual cis people who who responded.

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

I had noticed a while ago that generally, trans men I notice commenting/posting are generally much younger than the trans women ive noticed. It's kinda depressing as a 24yo how most men are younger. Something I noticed with this graph is that the heights of trans men are a more concentrated.

<p style="font-size: 12px; color: #888">You can switch between the population pyramid and the overall view with the 2 tabs underneath the chart!</p>


<div class="chart-set">
  <input id="age-a" class="vh" type="radio" name="view-age" checked>
  <input id="age-b" class="vh" type="radio" name="view-age">
  
  <div class="chart-stack">
    <div id="age-capped-pop-pyramid" class="chart-layer layer-a"></div>
    <div id="age-capped-overall" class="chart-layer layer-b"></div>
  </div>
  <script>
    createPopPyramidChart("age-capped-pop-pyramid", "age_capped_pop_pyramid.json", "Age", "Population Pyramid", 16);
    createBarChart("age-capped-overall", "age_capped_reversed.json", "Age", "Overall");
  </script>
  <div class="toggle">
    <label for="age-a" class="noselect">Population Pyramid</label>
    <label for="age-b" class="noselect">Overall</label>
  </div>
</div>

Well well well...nearly a quarter of trans men are minors. I knew that a decent chunk of trans men would be, but I really didnt expect it to be this many. 

<div id="under18"></div>
<script>
    createRatioBarChart("under18", "under18.json", "Under 18", undefined, [], ["#7B61FF", "#00E0B8"]);
</script>

### Height

Probably the most brutal of the comparisons out of the entire survey. Not only is the ftm height lower than the mtf height, its also less spread out. I had to extend the bounds of this chart all the way to 20% so it could fit the 5'5 bar being at ~18%, while the most popular mtf choice (5'8) is only ~13% of the population.  

Fun fact: The one 6'2 trans guy is 17 years old (gigaluckshit)

<div class="chart-set">
  <input id="height-a" class="vh" type="radio" name="view-height" checked>
  <input id="height-b" class="vh" type="radio" name="view-height">
  
  <div class="chart-stack">
    <div id="height-pop-pyramid" class="chart-layer layer-a"></div>
    <div id="height-overall" class="chart-layer layer-b"></div>
  </div>
  <script>
    createBarChart("height-overall", "height_reversed.json", "Height", "Overall");
    createPopPyramidChart("height-pop-pyramid", "height_reversed_pop_pyramid.json", "Height", "Population Pyramid", 20);
  </script>
  <div class="toggle">
    <label for="height-a" class="noselect">Population Pyramid</label>
    <label for="height-b" class="noselect">Overall</label>
  </div>
</div>

### Sexuality

Men be straight.

Bi being the most common choice is very much expected too. All the numbers here honestly just makes perfect sense, not much to talk about (except for the one single straight nonbinary person). 

You can enable/disable sexualities by clicking on them in the legend at the bottom, and if you disable bi and ace people, you see that there are more straight trans men than gay trans men, but more lesbian trans women than straight trans women.

<div id="sexuality-chart"></div>
<script>
    createRatioBarChart("sexuality-chart", "sexuality_flipped.json", "Sexuality", undefined, [], ['#8AA0B3', '#8E5CF1', '#FF4D88', '#2E294E']);
</script>

### Assigned Sex at Birth

The dreaded ASAB question. I really wasn't sure if I wanted to include it, I ended up doing it anyway while making it obvious that the question is optional so that people don't get (maybe rightfully) annoyed with it.

I was mostly only interested in the question for 2 reasons, the first one was to see how many people are intersex. Theres no real statistical difference between any of the genders being intersex so this was mostly just useless

<div id="intersex-chart"></div>
<script>
    createRatioBarChart("intersex-chart", "intersex.json", "Intersex", undefined, [3, 4, 5], ["#7B61FF", "#00E0B8"], 225);
</script>

This is probably the most controversial part of the entire survey. I wanted to see the ratio between theyfabs and theymabs, and tbh I assumed there would be a lot more afab nbs considering how most people view amab nbs.

<div id="nbasab"></div>
<script>
    createPieChart("nbasab", "nb_asab.json", "Nonbinary ASAB", false, ['#259efa', '#ff4f69', '#00E396', '#2E294E']);
</script>

### Location

The US is obviously in first place, not much to write here tbh.

<p style="font-size: 12px; color: #888">Scrolling over these charts might hard on mobile, I tried a bunch to fix it but couldn't</p>

<div id="country" style="height: 500px;"></div>
<script>createWorldMap("country", "location_country.json");</script>

I knew California was gonna be popular but I didn't expect it to be this much. Rip Montana, North Dakota, and West Virginia, no one lives in those states I guess...

<p style="font-size: 12px; color: #888">Use this area to help with scrolling :)</p>

<div id="states" style="height: 500px;"></div>
<script>createUSMap("states", "location_state.json");</script>
___

## Reddit

### Main/Favorite Subreddit

This question was pretty self explanatory, I wanted to see the popularity of the main 4tran subreddits as well as the gender ratios between them. Tbh I've noticed that the people who primarily use r/Tranistan leaned male but I didn't really realize that about r/4trancirclejerk.

<p style="font-size: 12px; color: #888">You can switch between the ratio view and the total/overall view with the 2 tabs underneath the chart! You can also enable/disable genders by clicking them on the bottom of the chart</p>

<div class="chart-set">
  <input id="favsub-a" class="vh" type="radio" name="view-favsub" checked>
  <input id="favsub-b" class="vh" type="radio" name="view-favsub">
  
  <div class="chart-stack" style="min-height: 300px;">
    <div id="favsub-ratio" class="chart-layer layer-a"></div>
    <div id="favsub-bar" class="chart-layer layer-b"></div>
  </div>
  <script>
    createRatioBarChart("favsub-ratio", "favorite_subreddit.json", "Main/Favorite Subreddit", "Ratio", [3, 4]);
    createBarChart("favsub-bar", "favorite_subreddit.json", "Main/Favorite Subreddit", "Total", [3, 4], undefined, 300);
  </script>
  <div class="toggle">
    <label for="favsub-a" class="noselect">Ratio</label>
    <label for="favsub-b" class="noselect">Total</label>
  </div>
</div>

Interestingly r/Tranistan is a bit younger than the other subreddits, which I have not noticed (especially considering r/4Tranistan exists). r/ttttrans skews older which is obviously completely expected, the oldfag sub is old who woulda thought. What is surprising is that ttttrans is the second most popular (main) subreddit, only behind 4tran4.

<div id="favsub-ages"></div>
<script>
    createBoxPlot("favsub-ages", "favorite_subreddit_age.json", "Main/Favorite Subreddit", "Age Distribution", false, undefined, 300);
</script>

### Used Subreddits

Used subreddits was to see all the subreddits that people used and had access to. smutttt and the selfie subreddits are both mostly women, while fitttts, 4tography and 4trancooking have a bit more men in them. The total distribution makes a lot more sense here since popular/open subreddits like 4tran, 4tran4, and 4Tranistan are the most popular.

<div class="chart-set">
  <input id="usedsub-a" class="vh" type="radio" name="view-usedsub" checked>
  <input id="usedsub-b" class="vh" type="radio" name="view-usedsub">
  
  <div class="chart-stack" style="min-height: 500px;">
    <div id="usedsub-ratio" class="chart-layer layer-a"></div>
    <div id="usedsub-bar" class="chart-layer layer-b"></div>
  </div>
  <script>
    createRatioBarChart("usedsub-ratio", "used_subreddits.json", "Used Subreddits", "Ratio", [3, 4], undefined, 500);
    createBarChart("usedsub-bar", "used_subreddits.json", "Used Subreddits", "Total", [3, 4], undefined, 500);
  </script>
  <div class="toggle">
    <label for="usedsub-a" class="noselect">Ratio</label>
    <label for="usedsub-b" class="noselect">Total</label>
  </div>
</div>

### Where You Came From

If you noticed the little `?source=r/4tran4` thing at the end of the survey link, this is what that was used for. I was curious where people came from, and if it was different from their main sub. I sent the survey out on some 4tran related discords as well and was curious how many survey respondents were from discord. (Unsurprisingly) the most female heavy space, even when compared to the other questions, happens to be Discord (94% female).

<div class="chart-set">
  <input id="camefrom-a" class="vh" type="radio" name="view-camefrom">
  <input id="camefrom-b" class="vh" type="radio" name="view-camefrom" checked>
  
  <div class="chart-stack" style="min-height: 350px;">
    <div id="camefrom-ratio" class="chart-layer layer-a"></div>
    <div id="camefrom-bar" class="chart-layer layer-b"></div>
  </div>
  <script>
    createRatioBarChart("camefrom-ratio", "came_from.json", "Where You Came From", "Ratio", [3, 4], undefined, 350);
    createBarChart("camefrom-bar", "came_from.json", "Where You Came From", "Total", [3, 4], undefined, 350);
  </script>
  <div class="toggle">
    <label for="camefrom-a" class="noselect">Ratio</label>
    <label for="camefrom-b" class="noselect">Total</label>
  </div>
</div>

### Contributer or Lurker

I expected the differences between the genders to be way higher here tbh. I feel like a lot of trans men are lurkers, but the difference is only like 5% between men and women here. Cis people are also the most likely to be lurkers (unsurprising) 

<div id="contributer-chart"></div>
<script>
    createRatioBarChart("contributer-chart", "contributer.json", "Contributer or Lurker", undefined, [], ["#7B61FF", "#00E0B8"]);
</script>

___
<div class="button-container">
  <a class="big-button" href="2">Next Page</a>
</div>