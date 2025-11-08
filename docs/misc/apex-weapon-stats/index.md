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
    transition: none;
  }

  .dropdowns {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .dropdowns .dropdown {
    transition: none !important;
  }

  .stat {
    display: flex;
    justify-content: space-between;
    padding: 0.25rem 0;
    border-bottom: 1px solid rgba(255,255,255,0.1);
    font-size: 0.75rem;
  }
  .stat .label { 
    color: #aaa;
  }

  .stat .value { 
    color: #fff;
    font-weight: 500;
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

  @container (max-width: 280px) {
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

  .toggleContainer {
    position: relative;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: fit-content;
    border: .1rem solid var(--md-primary-fg-color);
    border-radius: 100vh;
    font-weight: bold;
    cursor: pointer;
    height: 40px; 
  }
  .toggleContainer::before {
    content: '';
    position: absolute;
    left: 2px;
    top: 2px;
    bottom: 2px;
    width: calc(50% - 2px); 
    border-radius: 100vh;
    background: var(--md-primary-fg-color);
    transition: all 0.3s;
  }
  .toggleCheckbox:checked + .toggleContainer::before {
    transform: translateX(100%);
  }
  .toggleContainer div {
    padding: 4px 16px;
    text-align: center;
    z-index: 1;
  }
  .toggleCheckbox {
    display: none;
  }
  .toggleCheckbox:checked + .toggleContainer div:first-child {
    color: var(--md-primary-fg-color);
    transition: color 0.3s;
  }
  .toggleCheckbox:checked + .toggleContainer div:last-child {
    color: white;
    transition: color 0.3s;
  }
  .toggleCheckbox + .toggleContainer div:first-child {
    color: white;
    transition: color 0.3s;
  }
  .toggleCheckbox + .toggleContainer div:last-child {
    color: var(--md-primary-fg-color);
    transition: color 0.3s;
  }

  .side {
    display: flex;
    justify-content: space-between;
  }
  .side .label {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .side label {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .side p {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .circle-button {
    padding: 4px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    aspect-ratio: 1 / 1;
    font-size: 1.3rem;
    font-weight: 500;
    border: 0;
    background: transparent !important;
  }
</style>

___

<div style="margin: -0.5rem 0; gap: 1rem;">
  <div class="side">
    <div class="label">Columns</div>
    <div class="side">
      <a id="decrease-columns" class="big-button circle-button noselect">-</a>
      <p id="column-count" class="noselect" style="margin: 0; font-size: 0.9rem;">2</p>
      <a id="increase-columns" class="big-button circle-button noselect">+</a>
    </div>
  </div>
  <div style="height: 0.5rem;"></div>
  <div class="side">
    <div class="label">Display Converted Values</div>
    <input type="checkbox" id="converted-values-toggle" class="toggleCheckbox" />
    <label for="converted-values-toggle" class='toggleContainer'>
      <div class="noselect">Converted</div>   
      <div class="noselect">Respawn</div>
    </label>
  </div>
</div>

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
    <div class="stat">
      <span class="label">Rechamber Time</span>
      <span class="value" id="rechamber-time">-</span>
    </div>
  </div>
</div>