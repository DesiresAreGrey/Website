const seasons = [];

async function loadSeasons() {
  const res = await fetch('../../assets/misc/apex-weapon-stats/data/_index.json');
  const files = await res.json();

  const jsonData = await Promise.all(
    files.map(async file => {
      const res = await fetch(`../../assets/misc/apex-weapon-stats/data/${file}`);
      return res.json();
    })
  );

  seasons.push(jsonData);
}

loadSeasons();

console.log(seasons);