# Apex Legends Weapon Stats

<script type="module" src="apex-weapon-stats.js?v={{ now() }}"></script>

<style>
  :root {
    --base: #949494;
    --common: #cacaca;
    --rare: #62c8ff;
    --epic: #c84dff;
    --legendary: #ffcd3c;
    --mythic: #ff4e1d;
  }

  .comparison {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
  }

  .column {
    flex: 1;
  }
  .column h3 {
    text-align: center;
    margin-top: 0.75em;
    font-size: 1.25em;
  }

  .dropdowns {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .stat {
    display: flex;
    justify-content: space-between;
    padding: 0.25rem 0;
    border-bottom: 1px solid rgba(255,255,255,0.05);
    font-size: 0.75rem;
  }
  .stat .label { 
    color: #aaa;
  }

  .stat .value { 
    color: #fff;
    font-weight: 500;
  }
</style>

test

<div class="comparison">

  <div class="column" id="column-template">
    <div class="dropdowns">
      <select class="dropdown season-dropdown" style="width: 100%;"><option value="">Season</option></select>
      <select class="dropdown weapon-dropdown" style="width: 100%;"><option value="">Weapon</option></select>
      <select class="dropdown mode-dropdown" style="width: 100%;"><option value="">Mode</option></select>
    </div>
    <h3>Ammo</h3>
    <div class="stat">
      <span class="label">Type</span>
      <span class="value" id="ammo-type">-</span>
    </div>
    <div class="stat">
      <span class="label">Magazine Size</span>
      <span class="value" id="magazine-size">-</span>
    </div>
  </div>
</div>