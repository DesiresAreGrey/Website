---
title: Popularity of Modded Minecraft Versions
description: Charts showing the number of mods for different Minecraft versions (on Modrinth).
image: https://desiresaregrey.com/assets/misc/minecraft/thumb.png
---
<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
<script src="../misc.js?v={{ now() }}" data-path="../../assets/misc/minecraft/"></script>

# Popularity of Modded Minecraft Versions

## Modrinth

<div class="chart-set">
  <input id="modrinth-a" class="vh" type="radio" name="view-modrinth" checked>
  <input id="modrinth-b" class="vh" type="radio" name="view-modrinth">
  <input id="modrinth-c" class="vh" type="radio" name="view-modrinth">
  
  <div class="chart-stack" style="min-height: 500px;">
    <div id="modrinth-loader" class="chart-layer layer-a"></div>
    <div id="modrinth-loader-ratio" class="chart-layer layer-b"></div>
    <div id="modrinth-total" class="chart-layer layer-c"></div>
  </div>
  <script>
    createColumnChart("modrinth-loader", "modrinth_apexcharts_loader.json", {title: "By Loader", subtitle: "Data from %generatedAt%", units: "mods", colors: ['rgba(236, 186, 149, 1)', 'rgba(170, 85, 255, 1)', 'rgb(216, 130, 49)', 'rgba(79, 120, 202, 1)']});
    createRatioBarChart("modrinth-loader-ratio", "modrinth_apexcharts_loader.json", {title: "By Loader (Ratio)", subtitle: "Data from %generatedAt%", units: "mods", colors: ['rgba(236, 186, 149, 1)', 'rgba(170, 85, 255, 1)', 'rgb(216, 130, 49)', 'rgba(79, 120, 202, 1)']});
    createColumnChart("modrinth-total", "modrinth_apexcharts_total.json", {title: "All Mods", subtitle: "Data from %generatedAt%", units: "mods", colors: ['#546E7A']});
  </script>
  <div class="toggle">
    <label for="modrinth-a" class="noselect">Loader</label>
    <label for="modrinth-b" class="noselect">Ratio</label>
    <label for="modrinth-c" class="noselect">All</label>
  </div>
</div>