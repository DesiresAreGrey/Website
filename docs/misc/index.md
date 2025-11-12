# Miscellaneous

<style>
h1 {
    text-align: center;
    font-size: 2rem !important;
    margin-bottom: 0.25rem !important;
}

.misc-gallery {
    text-align: center;
    padding: 3rem 2rem;
    color: #c8b7f0;
}

.card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
    max-width: 900px;
    margin: 0 auto;
}

.misc-card {
    background-color: rgba(26, 10, 40, 0.5);
    border: .1rem solid;
    border-color: var(--md-primary-fg-color);
    border-radius: 2rem;
    padding: 0 1.5rem;
    text-decoration: none;
    transition: all 0.25s ease;
    box-shadow: 0 0 10px rgba(150, 100, 255, 0.1);
    backdrop-filter: blur(8px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 300px;
    transition: all 200ms ease !important;
}
.misc-card:hover {
    background-color: var(--md-primary-fg-color);
    transform: translateY(-4px);
    box-shadow: 0 0 24px rgba(123, 0, 255, 0.5);
    color: #ffffff;
    text-shadow: 0 0 4px #00000050;
}

.misc-card h2 {
    margin-bottom: 0;
    color: #dcc0ffff;
    font-size: 1.25rem;
    font-variation-settings: 'wght' 500;
    transition: all 200ms ease !important;
}
.misc-card:hover h2 {
    color: #ffffff;
    text-shadow: 0 0 4px #00000050;
}

.misc-card p {
    color: #9f86ccff;
    //color: var(--md-primary-fg-color);
    font-size: 0.9rem;
    font-variation-settings: 'wght' 350;
    transition: all 200ms ease !important;
}
.misc-card:hover p {
    color: #ffffff;
    text-shadow: 0 0 4px #00000050;
}
</style>

<div class="misc-gallery">
  <div class="card-grid">
    <a class="misc-card" href="apex-weapon-stats">
      <h2>Apex Legends Weapon Stats</h2>
      <p>Compare detailed weapon stats for Apex Legends weapons across across seasons, firing modes, and weapon variants.</p>
    </a>
    <a class="misc-card" href="modded-minecraft-versions">
      <h2>Popular Modded Minecraft Versions</h2>
      <p>Charts showing the number of mods for different Minecraft versions</p>
    </a>
    <a class="misc-card" href="dotnet-wasm-test">
      <h2>.NET WebAssembly Test</h2>
      <p>Test of .NET/C# WebAssembly using the default stopwatch template</p>
    </a>
  </div>
</div>