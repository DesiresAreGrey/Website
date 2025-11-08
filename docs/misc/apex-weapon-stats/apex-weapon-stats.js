const seasons = [];

await loadSeasons();
await new Promise(resolve => document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", resolve) : resolve());

const comparison = document.querySelector(".comparison");
const columntemplate = document.getElementById("column-template").cloneNode(true);
let numColumns = 2;

document.getElementById("column-template").remove();
for (let i = 0; i < numColumns; i++) {
    const clone = columntemplate.cloneNode(true);
    clone.id = `column-${i + 1}`;
    comparison.appendChild(clone);
}

const columns = document.querySelectorAll(".column");
for (const column of columns) {
    setupColumn(column);
}

document.getElementById("decrease-columns").onclick = e => {
    if (numColumns > 1) {
        numColumns--;
        removeColumn();
        document.getElementById("column-count").textContent = numColumns;
    }
    updateColumnButtonStyles();
};

document.getElementById("increase-columns").onclick = e => {
    if (numColumns < 5) {
        numColumns++;
        addColumn();
        document.getElementById("column-count").textContent = numColumns;
    }
    updateColumnButtonStyles();
};

function updateColumnButtonStyles() {
if (numColumns >= 5) {
        document.getElementById("increase-columns").style.opacity = "0.5";
        document.getElementById("increase-columns").style.cursor = "default";
        document.getElementById("increase-columns").style.pointerEvents = "none";
    }
    else {
        document.getElementById("increase-columns").style.opacity = "1";
        document.getElementById("increase-columns").style.cursor = "pointer";
        document.getElementById("increase-columns").style.pointerEvents = "auto";
    }
    if (numColumns > 1) {
        document.getElementById("decrease-columns").style.opacity = "1";
        document.getElementById("decrease-columns").style.cursor = "pointer";
        document.getElementById("decrease-columns").style.pointerEvents = "auto";
    }
    else {
        document.getElementById("decrease-columns").style.opacity = "0.5";
        document.getElementById("decrease-columns").style.cursor = "default";
        document.getElementById("decrease-columns").style.pointerEvents = "none";
    }
}

function addColumn() {
    const clone = columntemplate.cloneNode(true);
    clone.id = `column-${numColumns}`;
    comparison.appendChild(clone);

    setupColumn(clone);
}

function removeColumn() {
    const columns = document.querySelectorAll(".column");
    columns[columns.length - 1].remove();
}

function setupColumn(column) {
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

    column.querySelector("#firing-mode").textContent = column.mode.Firing.FireMode;

    column.querySelector("#firerate").innerHTML = rarityFormat(column.mode.Firing.FireRate, column.weapon.IsMythic, undefined, x => Math.round(x * 60));


}


function rarityFormat(value, isMythic = false, highestRarity = undefined, operation = x => x) {
    const order = ['Base', 'Common', 'Rare', 'Epic', 'Legendary', 'Mythic'];
    const stopIndex = order.indexOf(highestRarity) >= 0 ? order.indexOf(highestRarity) : order.length - 1;
    const totalRarities = Object.keys(value).length;

    const rarities = [];

    if (isMythic && totalRarities == 1)
        return `<span style="color:var(--mythic);">${operation(value["Base"])}</span>`;

    if (totalRarities == 1)
        return `<span>${operation(value["Base"])}</span>`;

    for (let i = 0; i <= stopIndex; i++) {
        const rarity = order[i];
        const val = value[rarity];
        if (val != null) {
            rarities.push(`<span style="color:var(--${rarity.toLowerCase()});">${operation(val)}</span>`);
        }
    }

    return rarities.join(' / ');
}


async function loadSeasons() {
    const files = await(await fetch('../../assets/misc/apex-weapon-stats/data/_index.json')).json();

    for (const file of files) {
        const json = await (await fetch(`/assets/misc/apex-weapon-stats/data/${file}`)).json();
        seasons.push(json);
    }

    seasons.sort((a, b) => new Date(b.GeneratedDate) - new Date(a.GeneratedDate));
}