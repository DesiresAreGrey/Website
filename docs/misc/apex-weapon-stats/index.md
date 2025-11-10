---
description: Compare detailed weapon stats for Apex Legends weapons across across seasons, firing modes, and weapon variants.
image: https://desiresaregrey.com/assets/misc/apex-weapon-stats/apex-keyart.jpg
---
# Apex Legends Weapon Stats

<script type="module" src="apex-weapon-stats.js?v={{ now() }}"></script>

<style>
  /* colors */

  :root {
    --base: #7A7A7A;
    --common: #D1D7D7;
    --rare: #31C1FF;
    --epic: #C85CFF;
    --legendary: #FFCD3C;
    --mythic: #E72323;
  }

  /* columns */

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
    border-bottom: 1px solid rgba(255,255,255,0.125);
    margin-bottom: 0;
    font-variation-settings: 'wght' 650;
    color: #ccc;
    transition: none;
  }

  /* dropdowns */

  .dropdowns {
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: sticky;
    z-index: 20; 
    top: 2.8rem;
    isolation: isolate;
  }
  .dropdowns::before {
    content: "";
    position: absolute;
    inset: 0;
    background: var(--md-default-bg-color);
    pointer-events: none;
    z-index: -1; 
    width: calc(100% + 1rem);
    height: calc(100% + 1rem);
    left: 50%;
    top: 47.5%;
    transform: translateX(-50%) translateY(-50%);
    isolation: isolate;
  }

  .dropdowns .dropdown {
    transition: border 200ms ease !important;
    font-size: 16px;
    border-radius: 50vw;
  }

  /* stats */

  .stat {
    display: flex;
    justify-content: space-between;
    padding: 0.25rem 0;
    border-bottom: 1px solid rgba(255,255,255,0.125);
    font-size: 0.75rem;
    overflow: clip;
  }
  .stat .label { 
    color: #aaa;
    white-space: nowrap;
    overflow: clip;
    text-overflow: ellipsis;
  }

  .stat .value { 
    color: #fff;
    font-weight: 500;
    white-space: nowrap;
    overflow: clip;
    text-overflow: ellipsis;
  }

  /* toggle switch */

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
  .label .label-subtitle {
    font-size: 0.5rem;
    opacity: 0.7;
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

  /* plus/minus buttons */

  .plusminus-button {
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

  /* distance tabs */

  .tabs .toggle {
    display: flex; 
    justify-content: center; 
    gap: 0.25rem; 
    align-items: flex-end;
    margin: 0.15rem 0 -0.2rem;
  }

  .tabs .toggle label {
    position: relative;
    padding: 0 0.35rem; 
    cursor: pointer;
    font-variation-settings: 'wght' 400;
    font-size: 0.7rem;
    opacity: 0.69;
    transition: opacity 200ms ease, color 200ms ease, font-variation-settings 200ms ease;
  }

  .tabs .toggle label:hover {
    opacity: 1;
    font-variation-settings: 'wght' 500;
  }

  .tabs .toggle label::before {
    content: ""; 
    position: absolute; 
    inset: -0.1rem 0 auto;
    height: 0.15rem; 
    border-radius: 2px; 
    transform: scaleX(0);
    transition: transform 200ms ease, background-color 200ms ease;
  }
  .tabs .toggle label::after {
    content: '';
    position: absolute;
    inset: -.4rem 0 auto;
    height: 2.25rem; 
    cursor: pointer;
    transform: scaleX(1);
  }

  .tabs .toggle label:has(> input:checked) { 
    color: #fff;
    opacity: 1;
    font-variation-settings: 'wght' 750;
  }

  .tabs .toggle label:has(> input:checked)::before {
    background: var(--md-primary-fg-color);
    transform: scaleX(1);
  }

  /* recoil pattern and blast pattern */

  .pattern {
    width: 300px !important;
    height: auto !important;
    margin: 0.2rem 0;
    aspect-ratio: 1 / 1;
  }
  
  /* mobile */
  @media (max-width: 640px) {
    /* columns */

    .column h3 {
      font-size: 1.1rem;
    }

    /* stats */

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
    .label .label-subtitle {
      font-size: 0.45rem;
    }
    .stat .value {
      text-align: left;
      font-size: 0.9rem;
    }

    /* distance tabs */

    .tabs .toggle label {
      font-size: 0.6rem;
    }

    /* recoil pattern and blast pattern */
    
    .pattern {
      width: 100% !important;
      height: 100% !important;
    }
  }

  /* small columns */
  @container (max-width: 400px) {
  
    /* columns */

    .column h3 {
      font-size: 0.95rem;
    }

    /* dropdowns */

    .dropdown {
      font-size: 16px;
    }

    /* stats */

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
    .label .label-subtitle {
      font-size: 0.45rem;
    }
    .stat .value {
      text-align: left;
      font-size: 0.75rem;
    }

    /* distance tabs */

    .tabs .toggle label {
      font-size: 0.6rem;
    }

    /* recoil pattern and blast pattern */

    .pattern {
      width: 100% !important;
      height: 100% !important;
    }
  }
</style>

___

<div style="margin: -0.5rem 0; gap: 1rem;">
  <div class="side">
    <div class="label">Columns</div>
    <div class="side">
      <a id="decrease-columns" class="big-button plusminus-button noselect" style="opacity: 0.5; pointer-events: none;">-</a>
      <p id="column-count" class="noselect" style="margin: 0; font-size: 0.9rem;">2</p>
      <a id="increase-columns" class="big-button plusminus-button noselect" style="opacity: 0.5; pointer-events: none;">+</a>
    </div>
  </div>
  <div style="height: 0.5rem;"></div>
  <div class="side">
    <div class="label">Units</div>
    <input type="checkbox" id="converted-values-toggle" class="toggleCheckbox" />
    <label for="converted-values-toggle" class='toggleContainer'>
      <div class="noselect" style="margin-right: 48px;margin-left: 24px;padding-left: 0px;padding-right: 16px;">Converted</div>   
      <div class="noselect" style="margin-right: 24px;margin-left: 0px;padding-left: 0px;padding-right: 16px;">Engine</div>
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
    <div class="stat">
      <span class="label">Time to Empty</span>
      <span class="value" id="time-to-empty">-</span>
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
    <div class="stat">
      <span class="label">Burst Count</span>
      <span class="value" id="burst-count">-</span>
    </div>
    <div class="stat">
      <span class="label">Burst Delay</span>
      <span class="value" id="burst-delay">-</span>
    </div>
    <div class="stat">
      <span class="label">Burst Firerate</span>
      <span class="value" id="burst-firerate">-</span>
    </div>
    <h3>Shot</h3>
    <div class="stat">
      <span class="label">Projectiles Per Shot</span>
      <span class="value" id="projectiles-per-shot">-</span>
    </div>
    <div class="stat">
      <span class="label">Ammo Consumed</span>
      <span class="value" id="ammo-consumed">-</span>
    </div>
    <div class="stat">
      <span class="label">Projectile Speed</span>
      <span class="value" id="projectile-speed">-</span>
    </div>
    <div class="stat">
      <span class="label">Drag Coefficient</span>
      <span class="value" id="drag-coefficient">-</span>
    </div>
    <div class="stat">
      <span class="label">Gravity Multiplier</span>
      <span class="value" id="gravity-multiplier">-</span>
    </div>
    <div class="stat">
      <span class="label">Max Headshot Distance</span>
      <span class="value" id="max-headshot-distance">-</span>
    </div>
    <div style="border-bottom: 1px solid rgba(255,255,255,0.125);">
      <h3 style="border-bottom: none;">Projectile Damage</h3>
      <div style="font-size: 0.5rem; opacity: 0.7; margin-top: 0; display: flex; align-items: center; justify-content: center;">Body / Head / Limb</div>
    </div>
    <div class="stat">
      <span class="label">Base</span>
      <span class="value" id="damage-amount">-</span>
    </div>
    <div class="stat">
      <span class="label">Flesh</span>
      <span class="value" id="damage-flesh">-</span>
    </div>
    <div class="stat">
      <span class="label">Shield</span>
      <span class="value" id="damage-shield">-</span>
    </div>
    <div class="stat">
      <span class="label">Critical Hit</span>
      <span class="value" id="damage-critical">-</span>
    </div>
    <form class="tabs">
      <div class="toggle">
        <label class="noselect"><input id="damage-distance-near-tab" class="vh" type="radio" name="damage-distance" checked>Near</label>
        <label class="noselect"><input id="damage-distance-far-tab" class="vh" type="radio" name="damage-distance">Far</label>
        <label class="noselect"><input id="damage-distance-very-far-tab" class="vh" type="radio" name="damage-distance">Very Far</label>
      </div>
    </form>
    <div style="border-bottom: 1px solid rgba(255,255,255,0.125);">
      <h3 style="border-bottom: none;">Shot Damage</h3>
      <div style="font-size: 0.5rem; opacity: 0.7; margin-top: 0; display: flex; align-items: center; justify-content: center;">Body / Head / Limb</div>
    </div>
    <div class="stat">
      <span class="label">Base</span>
      <span class="value" id="shot-damage-amount">-</span>
    </div>
    <div class="stat">
      <span class="label">Flesh</span>
      <span class="value" id="shot-damage-flesh">-</span>
    </div>
    <div class="stat">
      <span class="label">Shield</span>
      <span class="value" id="shot-damage-shield">-</span>
    </div>
    <div class="stat">
      <span class="label">Critical Hit</span>
      <span class="value" id="shot-damage-critical">-</span>
    </div>
    <form class="tabs">
      <div class="toggle">
        <label class="noselect"><input id="shot-damage-distance-near-tab" class="vh" type="radio" name="shot-damage-distance" checked>Near</label>
        <label class="noselect"><input id="shot-damage-distance-far-tab" class="vh" type="radio" name="shot-damage-distance">Far</label>
        <label class="noselect"><input id="shot-damage-distance-very-far-tab" class="vh" type="radio" name="shot-damage-distance">Very Far</label>
      </div>
    </form>
    <div style="border-bottom: 1px solid rgba(255,255,255,0.125);">
      <h3 style="border-bottom: none;">Shots To Kill</h3>
      <div style="font-size: 0.5rem; opacity: 0.7; margin-top: 0; display: flex; align-items: center; justify-content: center;">Body / Head / Limb</div>
    </div>
    <div class="stat">
      <span class="label" style="color:var(--base);">No Armor</span>
      <span class="value" id="shotstokill-base">-</span>
    </div>
    <div class="stat">
      <span class="label" style="color:var(--common);">Common</span>
      <span class="value" id="shotstokill-common">-</span>
    </div>
    <div class="stat">
      <span class="label" style="color:var(--rare);">Rare</span>
      <span class="value" id="shotstokill-rare">-</span>
    </div>
    <div class="stat">
      <span class="label" style="color:var(--epic);">Epic</span>
      <span class="value" id="shotstokill-epic">-</span>
    </div>
    <div class="stat">
      <span class="label" style="color:var(--mythic);">Mythic</span>
      <span class="value" id="shotstokill-mythic">-</span>
    </div>
    <form class="tabs">
      <div class="toggle">
        <label class="noselect"><input id="shotstokill-distance-near-tab" class="vh" type="radio" name="shotstokill-distance" checked>Near</label>
        <label class="noselect"><input id="shotstokill-distance-far-tab" class="vh" type="radio" name="shotstokill-distance">Far</label>
        <label class="noselect"><input id="shotstokill-distance-very-far-tab" class="vh" type="radio" name="shotstokill-distance">Very Far</label>
      </div>
    </form>
    <h3>Damage Per Second</h3>
    <div class="stat" style="border-bottom: 1px solid rgba(255,255,255,0.035);">
      <span class="label">Body <span class="label-subtitle">BASE</span></span>
      <span class="value" id="dps-base-body">-</span>
    </div>
    <div class="stat" style="border-bottom: 1px solid rgba(255,255,255,0.035);">
      <span class="label">Head <span class="label-subtitle">BASE</span></span>
      <span class="value" id="dps-base-head">-</span>
    </div>
    <div class="stat">
      <span class="label">Limb <span class="label-subtitle">BASE</span></span>
      <span class="value" id="dps-base-limb">-</span>
    </div>
    <div class="stat" style="border-bottom: 1px solid rgba(255,255,255,0.035);">
      <span class="label">Body <span class="label-subtitle">FLESH</span></span>
      <span class="value" id="dps-flesh-body">-</span>
    </div>
    <div class="stat" style="border-bottom: 1px solid rgba(255,255,255,0.035);">
      <span class="label">Head <span class="label-subtitle">FLESH</span></span>
      <span class="value" id="dps-flesh-head">-</span>
    </div>
    <div class="stat">
      <span class="label">Limb <span class="label-subtitle">FLESH</span></span>
      <span class="value" id="dps-flesh-limb">-</span>
    </div>
    <div class="stat" style="border-bottom: 1px solid rgba(255,255,255,0.035);">
      <span class="label">Body <span class="label-subtitle">SHIELD</span></span>
      <span class="value" id="dps-shield-body">-</span>
    </div>
    <div class="stat" style="border-bottom: 1px solid rgba(255,255,255,0.035);">
      <span class="label">Head <span class="label-subtitle">SHIELD</span></span>
      <span class="value" id="dps-shield-head">-</span>
    </div>
    <div class="stat">
      <span class="label">Limb <span class="label-subtitle">SHIELD</span></span>
      <span class="value" id="dps-shield-limb">-</span>
    </div>
    <form class="tabs">
      <div class="toggle">
        <label class="noselect"><input id="dps-distance-near-tab" class="vh" type="radio" name="dps-distance" checked>Near</label>
        <label class="noselect"><input id="dps-distance-far-tab" class="vh" type="radio" name="dps-distance">Far</label>
        <label class="noselect"><input id="dps-distance-very-far-tab" class="vh" type="radio" name="dps-distance">Very Far</label>
      </div>
    </form>
    <h3>Total Damage Per Magazine</h3>
    <div class="stat" style="border-bottom: 1px solid rgba(255,255,255,0.035);">
      <span class="label">Body <span class="label-subtitle">BASE</span></span>
      <span class="value" id="tdpm-base-body">-</span>
    </div>
    <div class="stat" style="border-bottom: 1px solid rgba(255,255,255,0.035);">
      <span class="label">Head <span class="label-subtitle">BASE</span></span>
      <span class="value" id="tdpm-base-head">-</span>
    </div>
    <div class="stat">
      <span class="label">Limb <span class="label-subtitle">BASE</span></span>
      <span class="value" id="tdpm-base-limb">-</span>
    </div>
    <div class="stat" style="border-bottom: 1px solid rgba(255,255,255,0.035);">
      <span class="label">Body <span class="label-subtitle">FLESH</span></span>
      <span class="value" id="tdpm-flesh-body">-</span>
    </div>
    <div class="stat" style="border-bottom: 1px solid rgba(255,255,255,0.035);">
      <span class="label">Head <span class="label-subtitle">FLESH</span></span>
      <span class="value" id="tdpm-flesh-head">-</span>
    </div>
    <div class="stat">
      <span class="label">Limb <span class="label-subtitle">FLESH</span></span>
      <span class="value" id="tdpm-flesh-limb">-</span>
    </div>
    <div class="stat" style="border-bottom: 1px solid rgba(255,255,255,0.035);">
      <span class="label">Body <span class="label-subtitle">SHIELD</span></span>
      <span class="value" id="tdpm-shield-body">-</span>
    </div>
    <div class="stat" style="border-bottom: 1px solid rgba(255,255,255,0.035);">
      <span class="label">Head <span class="label-subtitle">SHIELD</span></span>
      <span class="value" id="tdpm-shield-head">-</span>
    </div>
    <div class="stat">
      <span class="label">Limb <span class="label-subtitle">SHIELD</span></span>
      <span class="value" id="tdpm-shield-limb">-</span>
    </div>
    <form class="tabs">
      <div class="toggle">
        <label class="noselect"><input id="tdpm-distance-near-tab" class="vh" type="radio" name="tdpm-distance" checked>Near</label>
        <label class="noselect"><input id="tdpm-distance-far-tab" class="vh" type="radio" name="tdpm-distance">Far</label>
        <label class="noselect"><input id="tdpm-distance-very-far-tab" class="vh" type="radio" name="tdpm-distance">Very Far</label>
      </div>
    </form>
    <h3>Time To Kill</h3>
    <div class="stat" style="border-bottom: 1px solid rgba(255,255,255,0.035);">
      <span class="label">Body <span class="label-subtitle" style="color:var(--base); opacity: 0.8;">NO ARMOR</span></span>
      <span class="value" id="ttk-no-armor-body">-</span>
    </div>
    <div class="stat" style="border-bottom: 1px solid rgba(255,255,255,0.035);">
      <span class="label">Head <span class="label-subtitle" style="color:var(--base); opacity: 0.8;">NO ARMOR</span></span>
      <span class="value" id="ttk-no-armor-head">-</span>
    </div>
    <div class="stat">
      <span class="label">Limb <span class="label-subtitle" style="color:var(--base); opacity: 0.8;">NO ARMOR</span></span>
      <span class="value" id="ttk-no-armor-limb">-</span>
    </div>
    <div class="stat" style="border-bottom: 1px solid rgba(255,255,255,0.035);">
      <span class="label">Body <span class="label-subtitle" style="color:var(--common); opacity: 0.8;">COMMON</span></span>
      <span class="value" id="ttk-common-body">-</span>
    </div>
    <div class="stat" style="border-bottom: 1px solid rgba(255,255,255,0.035);">
      <span class="label">Head <span class="label-subtitle" style="color:var(--common); opacity: 0.8;">COMMON</span></span>
      <span class="value" id="ttk-common-head">-</span>
    </div>
    <div class="stat">
      <span class="label">Limb <span class="label-subtitle" style="color:var(--common); opacity: 0.8;">COMMON</span></span>
      <span class="value" id="ttk-common-limb">-</span>
    </div>
    <div class="stat" style="border-bottom: 1px solid rgba(255,255,255,0.035);">
      <span class="label">Body <span class="label-subtitle" style="color:var(--rare); opacity: 0.8;">RARE</span></span>
      <span class="value" id="ttk-rare-body">-</span>
    </div>
    <div class="stat" style="border-bottom: 1px solid rgba(255,255,255,0.035);">
      <span class="label">Head <span class="label-subtitle" style="color:var(--rare); opacity: 0.8;">RARE</span></span>
      <span class="value" id="ttk-rare-head">-</span>
    </div>
    <div class="stat">
      <span class="label">Limb <span class="label-subtitle" style="color:var(--rare); opacity: 0.8;">RARE</span></span>
      <span class="value" id="ttk-rare-limb">-</span>
    </div>
    <div class="stat" style="border-bottom: 1px solid rgba(255,255,255,0.035);">
      <span class="label">Body <span class="label-subtitle" style="color:var(--epic); opacity: 0.8;">EPIC</span></span>
      <span class="value" id="ttk-epic-body">-</span>
    </div>
    <div class="stat" style="border-bottom: 1px solid rgba(255,255,255,0.035);">
      <span class="label">Head <span class="label-subtitle" style="color:var(--epic); opacity: 0.8;">EPIC</span></span>
      <span class="value" id="ttk-epic-head">-</span>
    </div>
    <div class="stat">
      <span class="label">Limb <span class="label-subtitle" style="color:var(--epic); opacity: 0.8;">EPIC</span></span>
      <span class="value" id="ttk-epic-limb">-</span>
    </div>
    <div class="stat" style="border-bottom: 1px solid rgba(255,255,255,0.035);">
      <span class="label">Body <span class="label-subtitle" style="color:var(--mythic); opacity: 0.8;">MYTHIC</span></span>
      <span class="value" id="ttk-mythic-body">-</span>
    </div>
    <div class="stat" style="border-bottom: 1px solid rgba(255,255,255,0.035);">
      <span class="label">Head <span class="label-subtitle" style="color:var(--mythic); opacity: 0.8;">MYTHIC</span></span>
      <span class="value" id="ttk-mythic-head">-</span>
    </div>
    <div class="stat">
      <span class="label">Limb <span class="label-subtitle" style="color:var(--mythic); opacity: 0.8;">MYTHIC</span></span>
      <span class="value" id="ttk-mythic-limb">-</span>
    </div>
    <form class="tabs">
      <div class="toggle">
        <label class="noselect"><input id="ttk-distance-near-tab" class="vh" type="radio" name="ttk-distance" checked>Near</label>
        <label class="noselect"><input id="ttk-distance-far-tab" class="vh" type="radio" name="ttk-distance">Far</label>
        <label class="noselect"><input id="ttk-distance-very-far-tab" class="vh" type="radio" name="ttk-distance">Very Far</label>
      </div>
    </form>
    <h3>Projectile Size</h3>
    <div class="stat">
      <span class="label">Initial Size</span>
      <span class="value" id="initial-size">-</span>
    </div>
    <div class="stat">
      <span class="label">Step 1</span>
      <span class="value" id="step-1">-</span>
    </div>
    <div class="stat">
      <span class="label">Step 2</span>
      <span class="value" id="step-2">-</span>
    </div>
    <div class="stat">
      <span class="label">Final Step</span>
      <span class="value" id="final-step">-</span>
    </div>
    <h3>Patterns</h3>
    <div class="stat">
      <span class="label">Recoil Pattern</span>
      <svg class="pattern" id="recoil-pattern" style="background:#111;border:1px solid #333"></svg>
    </div>
    <div class="stat">
      <span class="label">Blast Pattern</span>
      <svg class="pattern" id="blast-pattern" style="background:#111;border:1px solid #333"></svg>
    </div>
  </div>
</div>

___

<div style="display: flex; text-align: center; align-items: center; justify-content: center; margin-bottom: 1rem;">
  <h1>this is still WIP/unfinished and not all stats are implemented and etc</h1>
</div>

___

<div>
  <div style="display: flex; align-items: center; justify-content: center;">
    <a href="https://github.com/DesiresAreGrey/Website/tree/main/docs/assets/misc/apex-weapon-stats/data">Browse/Download data</a>
  </div>
  <p style="margin-top: 0.25rem; font-size: 0.6rem; opacity: 0.7;">Data was extracted from the game using RSX (exported as .vdf files), then later parsed into json using a C# program. The folder linked above contains a _index.json file, which is the list of all the seasons. sXX.json is the json file loaded by the site, while the sXX-archive.zip file contains all the vdf files, individual weapon json files, and csv files of all the blast/recoil patterns.</p>
  <p style="margin-top: 0; font-size: 0.6rem; opacity: 0.7;">The process is automated so it should be very easy to update as Apex updates with new seasons/splits.</p>
</div>
