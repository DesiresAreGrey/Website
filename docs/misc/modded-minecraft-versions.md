---
description: Most popular modded Minecraft versions on Modrinth.
image: https://desiresaregrey.com/assets/survey2025/thumb.png
---
<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
<script src="../misc.js" data-path="../../assets/misc/"></script>

# Most Popular Modded Minecraft Versions

## Modrinth

<div id="modrinth"></div>
<script>
  
</script>

<div class="chart-set">
  <input id="modrinth-a" class="vh" type="radio" name="view-modrinth" checked>
  <input id="modrinth-b" class="vh" type="radio" name="view-modrinth">
  
  <div class="chart-stack" style="min-height: 500px;">
    <div id="modrinth-loader" class="chart-layer layer-a"></div>
    <div id="modrinth-total" class="chart-layer layer-b"></div>
  </div>
  <script>
    createColumnChart("modrinth-loader", "modrinth_apexcharts_loader.json", "Per Loader", "Data from %generatedAt%", [], ['rgba(236, 186, 149, 1)', 'rgba(170, 85, 255, 1)', 'rgb(216, 130, 49)', 'rgba(79, 120, 202, 1)']);
    createColumnChart("modrinth-total", "modrinth_apexcharts_total.json", "All Mods", "Data from %generatedAt%", [], ['#546E7A']);
  </script>
  <div class="toggle">
    <label for="modrinth-a" class="noselect">Loader</label>
    <label for="modrinth-b" class="noselect">Total</label>
  </div>
</div>