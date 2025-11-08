const seasons = [];

async function loadSeasons() {
    const files = await(await fetch('../../assets/misc/apex-weapon-stats/data/_index.json')).json();

    for (const file of files) {
        const json = await (await fetch(`/assets/misc/apex-weapon-stats/data/${file}`)).json();
        seasons.push(json);
    }

    seasons.sort((a, b) => new Date(b.GeneratedDate) - new Date(a.GeneratedDate));
}

await loadSeasons();
await new Promise(resolve => document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", resolve) : resolve());

const comparison = document.querySelector(".comparison");
const columntemplate = document.getElementById("column-template").cloneNode(true);
const numColumns = 2;

document.getElementById("column-template").remove();
for (let i = 0; i < numColumns; i++) {
    const clone = columntemplate.cloneNode(true);
    clone.id = `column-${i + 1}`;
    comparison.appendChild(clone);
}

const columns = document.querySelectorAll(".column");
for (const column of columns) {
    const seasonDropdown = column.querySelector(".season-dropdown");
    const weaponDropdown = column.querySelector(".weapon-dropdown");
    const modeDropdown = column.querySelector(".mode-dropdown");

    seasonDropdown.innerHTML = '';

    for (const season of seasons) {
        const opt = document.createElement('option');
        opt.value = season.ID;
        opt.textContent = season.FullName;
        seasonDropdown.appendChild(opt);
    }

    seasonDropdown.onchange = e => {
        column.season = seasons.find(s => s.ID === e.target.value);
        onSeasonChange(column);
    };

    weaponDropdown.onchange = e => {
        column.weapon = column.season.Weapons[e.target.value];
        onWeaponChange(column);
    };

    modeDropdown.onchange = e => {
        column.mode = column.weapon.WeaponModes[e.target.value];
        onModeChange(column);
    };

    seasonDropdown.dispatchEvent(new Event('change'));
}

function onSeasonChange(column) {
    const weaponDropdown = column.querySelector(".weapon-dropdown");
    weaponDropdown.innerHTML = '';

    for (const [index, weapon] of Object.entries(column.season.Weapons)) {
        const opt = document.createElement('option');
        opt.value = index;
        opt.textContent = weapon.Name;
        weaponDropdown.appendChild(opt);
    }

    weaponDropdown.dispatchEvent(new Event('change'));
}

function onWeaponChange(column) {
    const modeDropdown = column.querySelector(".mode-dropdown");
    modeDropdown.innerHTML = '';

    for (const [index, mode] of Object.entries(column.weapon.WeaponModes)) {
        const opt = document.createElement('option');
        opt.value = index;
        opt.textContent = mode.Name;
        modeDropdown.appendChild(opt);
    }

    modeDropdown.dispatchEvent(new Event('change'));
}

function onModeChange(column) {
    console.log(column.weapon);

    column.querySelector("#ammo-type").textContent = column.mode.Ammo.Type;
    
    column.querySelector("#magazine-size").innerHTML = rarityFormat(column.mode.Ammo.MagazineSize, column.weapon.IsMythic, "Epic");
}


function rarityFormat(value, isMythic = false, highestRarity = undefined) {
    const order = ['Base', 'Common', 'Rare', 'Epic', 'Legendary', 'Mythic'];
    const stopIndex = order.indexOf(highestRarity) >= 0 ? order.indexOf(highestRarity) : order.length - 1;
    const rarities = [];

    if (isMythic && Object.keys(value).length == 1)
        return `<span style="color:var(--mythic);">${value["Base"]}</span>`;
    
    for (let i = 0; i <= stopIndex; i++) {
        const rarity = order[i];
        const val = value[rarity];
        if (val != null) {
            rarities.push(`<span style="color:var(--${rarity.toLowerCase()});">${val}</span>`);
        }
    }

    return rarities.join(' / ');
}