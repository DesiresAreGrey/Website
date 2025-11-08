const seasons = [];

async function loadSeasons() {
  const files = await(await fetch('../../assets/misc/apex-weapon-stats/data/_index.json')).json();

  for (const file of files) {
    const json = await (await fetch(`/assets/misc/apex-weapon-stats/data/${file}`)).json();
    seasons.push(json);
  }
}

await loadSeasons();
await new Promise(resolve => document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", resolve) : resolve());

console.log(seasons);

