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
    container-type: inline-size;
  }
  .column h3 {
    text-align: center;
    margin-top: 0.75em;
    font-size: 1.25em;
    border-bottom: 1px solid rgba(255,255,255,0.1);
    margin-bottom: 0;
    font-variation-settings: 'wght' 650;
    color: #ccc;
    transition: all 200ms ease;
  }

  .dropdowns {
    display: flex;
    flex-direction: column;
    gap: 10px;
    transition: all 200ms ease;
  }

  .stat {
    display: flex;
    justify-content: space-between;
    padding: 0.25rem 0;
    border-bottom: 1px solid rgba(255,255,255,0.1);
    font-size: 0.75rem;
    transition: all 200ms ease;
  }
  .stat .label { 
    color: #aaa;
    transition: all 200ms ease;
  }

  .stat .value { 
    color: #fff;
    font-weight: 500;
    transition: all 200ms ease;
  }

  @media (max-width: 640px) {
    .column h3 {
      font-size: 1.1rem;
    }

    .stat {
      flex-direction: column;
      align-items: flex-start;
      padding: 0.4rem 0;
      font-size: 0.8rem;
    }
    .stat .label {
      font-size: 0.7rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      opacity: 0.8;
      margin-bottom: 0.15rem;
    }
    .stat .value {
      text-align: left;
      font-size: 0.9rem;
    }
  }

  @container (max-width: 340px) {
    .dropdown {
      font-size: 16px;
    }

    .column h3 {
      font-size: 0.95rem;
    }

    .stat {
      flex-direction: column;
      align-items: flex-start;
      padding: 0.25rem 0;
      font-size: 0.65rem;
    }
    .stat .label {
      font-size: 0.55rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      opacity: 0.8;
      margin-bottom: 0;
    }
    .stat .value {
      text-align: left;
      font-size: 0.75rem;
    }
  }
</style>

test

___



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
    <h3>Firing</h3>
    <div class="stat">
      <span class="label">Firing Mode</span>
      <span class="value" id="firing-mode">-</span>
    </div>
    <div class="stat">
      <span class="label">Firerate</span>
      <span class="value" id="firerate">-</span>
    </div>
  </div>
</div>