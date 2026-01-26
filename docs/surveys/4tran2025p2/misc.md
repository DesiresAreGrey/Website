---
description: Results of the Extended 4tran Survey (2025.2)
image: /assets/surveys/4tran2025p2/thumb.png
---
<script type="importmap">
{
  "imports": {
    "apexcharts": "https://esm.sh/apexcharts",
    "d3": "https://esm.sh/d3",
    "d3-cloud": "https://esm.sh/d3-cloud"
  }
}
</script>
<script type="module" src="/js/surveys/4tran2025p2/4tran2025p2.js?v={{ now() }}"></script>

# Extended 4tran Survey (2025.2)
<h6 style="margin: 0 0.2rem">Page 9 - Miscellaneous</h6>

<div class="nav-links" style="margin: 0.25rem 1rem;"></div>
<script src="/js/surveys/navlinks.js?v={{ now() }}" data-firstpage="/surveys/4tran2025p2/" data-toc="/assets/surveys/4tran2025p2/toc.json"></script>

## Miscellaneous

### Views On DIY

At first I thought this boxplot was broken for men and women, but it actually turns out so many men/women voted 10 that every answer other than 10 is counted as an
outlier. 1307/1675 (78%) of respondents voted 10.

I originally wrote that above line before I remembered to include the data for nonbinary people, where this isn't true. 9 is the minimum (excluding
outliers) value for nonbinary people, but the lowest outlier is 0 with 2 respondents picking it (men and women did not pick 0 at all).

<div class="chart-set">
  <input id="viewdiy-a" class="vh" type="radio" name="view-viewdiy" checked>
  <input id="viewdiy-b" class="vh" type="radio" name="view-viewdiy">

  <div class="chart-stack" style="min-height: 300px;">
    <div id="views-on-diy-boxplot" 
      class="apexchart chart-layer layer-a"
      style="height: 300px;"
      data-chart="boxplot"
      data-datakey="views_on_diy_boxplot"
      data-title="Views On DIY"
      data-subtitle="Boxplot"
      >
    </div>
    <div id="views-on-diy-bar" 
      class="apexchart chart-layer layer-b"
      style="height: 300px;"
      data-chart="ratio-bar"
      data-datakey="views_on_diy"
      data-title="Views On DIY"
      data-subtitle="Ratio"
      data-colors='["#02000D","#080025","#13003F","#1F005B","#2C0079","#390099","#470BB6","#5328C8","#5F3DDA","#6D4FEC","#7B61FF"]'
      >
    </div>
  </div>
  <div class="toggle">
    <label for="viewdiy-a" class="noselect">Boxplot</label>
    <label for="viewdiy-b" class="noselect">Ratio</label>
  </div>
</div>

### NEET Status

Men are the least likely to be a NEET (Not in Education, Employment, or Training).

<div id="isneet-ratio" 
  class="apexchart"
  style="height: 250px;"
  data-chart="ratio-bar"
  data-datakey="is_neet"
  data-title="Is NEET"
  data-colors='["#7B61FF", "#00E0B8"]'
  >
</div>

### Malebrained/Fembrained

Interestingly, men are the most likely to believe in the malebrained/fembrained concept. It does make sense that nonbinary people are the least likely
to believe in it, since the concept is more binary in nature.

<div id="xbrained-ratio" 
  class="apexchart"
  style="height: 250px;"
  data-chart="ratio-bar"
  data-datakey="belief_in_xbrained"
  data-title="Believes in Malebrained/Fembrained"
  data-colors='["#7B61FF", "#5642bd", "#2E294E"]'
  >
</div>

### Conformity to Gender Roles

The data for this is a lot more interesting than I expected. 

Almost 50% of men conform to male gender roles, with less than 1% conforming to female gender roles. However, only 23% of women conform to female
gender roles, with about 5% conforming to male gender roles. This is a pretty big difference, and shows that men are much more likely to conform to
their actual gender roles than women. 

Nonbinary people generally conform to male gender roles significantly more than female, however most do not conform to either or are unsure.

Only 14% of men conform to no gender roles, while for women thats almost 31%. Women are also more likely to be unsure about their conformity to gender
roles where 42% are unsure compared to 36% of men.

<div id="conform-gender-roles-ratio" 
  class="apexchart"
  style="height: 250px;"
  data-chart="ratio-bar"
  data-datakey="conform_gender_roles"
  data-title="Conforms to Gender Roles"
  data-colors='["#259efa", "#ff4f69", "#7B61FF", "#2E294E"]'
  >
</div>

### Connection to AGAB

Interestingly, this is the opposite of what you might expect if you are used to mainstream trans communities. Trans men are the least connected to
their AGAB, with trans women being a bit more connected, and nonbinary people being the most connected (relatively).

<div id="connection-to-agab-boxplot" 
  class="apexchart"
  style="height: 300px;"
  data-chart="boxplot"
  data-datakey="connection_to_agab_boxplot"
  data-title="Connection to AGAB"
  data-subtitle="Boxplot"
  >
</div>

### Feelings/Views

#### Feelings on Being Trans

Men are also the least likely to have positive feelings on being trans, with nonbinary people being the most likely to have positive feelings (still
mostly negative or negative though).

<div id="feelings-on-being-trans-ratio" 
  class="apexchart"
  style="height: 250px;"
  data-chart="ratio-bar"
  data-datakey="feelings_on_being_trans"
  data-title="Feelings on Being Trans"
  data-colors='["#7B61FF", "#5642bd", "#2E294E"]'
  >
</div>

#### Views on the Trans Flag

The trans flag is generally liked rather than disliked, however men are by far the most neutral on it.

<div id="views-on-trans-flag-ratio" 
  class="apexchart"
  style="height: 250px;"
  data-chart="ratio-bar"
  data-datakey="view_on_trans_flag"
  data-title="Views on the Trans Flag"
  data-colors='["#7B61FF", "#5642bd", "#2E294E"]'
  >
</div>

#### Views on the Trans Community

The common theme seems to be that men have the least connection with the idea of being trans and the things that are associated with it.

<div id="views-on-trans-community-ratio" 
  class="apexchart"
  style="height: 250px;"
  data-chart="ratio-bar"
  data-datakey="view_on_trans_community"
  data-title="Views on the Trans Community"
  data-colors='["#7B61FF", "#5642bd", "#2E294E"]'
  >
</div>

### Tattoos and Piercings

Most people do not have tattoos/piercings, but men are more likely to have them than women or nonbinary people.

<div id="has-tattoos-piercings-ratio" 
  class="apexchart"
  style="height: 250px;"
  data-chart="ratio-bar"
  data-datakey="has_tattoos_piercings"
  data-title="Has Tattoos or Piercings"
  data-colors='["#7B61FF", "#00E0B8"]'
  >
</div>

When it comes to number of tattoos/piercings (of the people who do have them), men tend to have more than women.

<div id="tattoos-piercings-boxplot" 
  class="apexchart"
  style="height: 300px;"
  data-chart="boxplot"
  data-datakey="tattoos_piercings_boxplot"
  data-title="Number of Tattoos and Piercings"
  data-subtitle="Boxplot"
  >
</div>
