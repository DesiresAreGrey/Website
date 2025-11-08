const seasons = [];

await loadSeasons();
await new Promise(resolve => document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", resolve) : resolve());

const comparison = document.querySelector(".comparison");
const columntemplate = document.getElementById("column-template").cloneNode(true);
let numColumns = 2;

const convertedValuesToggle = document.getElementById("converted-values-toggle");
function usingConvertedValues() {
    return !convertedValuesToggle.checked;
}

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

    convertedValuesToggle.addEventListener('change', e => {
        onModeChange(column);
    });

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
    // Ammo

    column.querySelector("#ammo-type").textContent = column.mode.Ammo.Type ?? "-";
    
    column.querySelector("#magazine-size").innerHTML = rarityFormat(column.mode.Ammo.MagazineSize, column.weapon.IsMythic, "Epic");

    // Firing

    column.querySelector("#firing-mode").textContent = column.mode.Firing.FireMode ?? "-";

    if (usingConvertedValues()) {
        column.querySelector("#firerate").innerHTML = rarityFormat(column.mode.Firing.FireRate, column.weapon.IsMythic, undefined, (x, key) => {
            if (column.mode.Firing.RechamberTime?.[key] != null)
                x = 1 / Math.max(1 / x, column.mode.Firing.RechamberTime[key]);
            return Math.round(x * 60);
        });
        column.querySelector("#firerate").previousElementSibling.innerHTML = "Firerate <span class=\"label-subtitle\">RPM</span>";
    }
    else {
        column.querySelector("#firerate").innerHTML = rarityFormat(column.mode.Firing.FireRate, column.weapon.IsMythic);
        column.querySelector("#firerate").previousElementSibling.innerHTML = "Firerate <span class=\"label-subtitle\">RPS</span>";
    }

    if (!usingConvertedValues() && column.mode.Firing.RechamberTime != null) {
        column.querySelector("#rechamber-time").innerHTML = rarityFormat(column.mode.Firing.RechamberTime, column.weapon.IsMythic);
        column.querySelector("#rechamber-time").parentElement.style.display = "flex";
    }
    else if (!usingConvertedValues() && column.mode.Firing.RechamberTime == null) {
        column.querySelector("#rechamber-time").textContent = "-";
        column.querySelector("#rechamber-time").parentElement.style.display = "flex";
    }
    else {
        column.querySelector("#rechamber-time").parentElement.style.display = "none";
    }

    // Shot

    column.querySelector("#projectiles-per-shot").textContent = column.mode.Firing.Shot.Projectiles ?? "-";

    column.querySelector("#ammo-consumed").textContent = column.mode.Firing.Shot.AmmoConsumed ?? "-";

    if (usingConvertedValues()) {
        column.querySelector("#projectile-speed").textContent = column.mode.Firing.Shot.Speed != null ? (column.mode.Firing.Shot.Speed * 0.0254).toFixed(1) / 1 : "-";
        column.querySelector("#projectile-speed").previousElementSibling.innerHTML = "Projectile Speed <span class=\"label-subtitle\">M/S</span>";
    }
    else {
        column.querySelector("#projectile-speed").textContent = column.mode.Firing.Shot.Speed ?? "-";
        column.querySelector("#projectile-speed").previousElementSibling.innerHTML = "Projectile Speed <span class=\"label-subtitle\">H/S</span>";
    }
    
    column.querySelector("#drag-coefficient").textContent = column.mode.Firing.Shot.DragCoefficient ?? "-";

    column.querySelector("#gravity-multiplier").textContent = column.mode.Firing.Shot.GravityMultiplier ?? "-";

    if (usingConvertedValues()) {
        column.querySelector("#max-headshot-distance").textContent = column.mode.Firing.Shot.MaxHeadshotDistance != null ? (column.mode.Firing.Shot.MaxHeadshotDistance * 0.0254).toFixed(1) / 1 : "-";
        column.querySelector("#max-headshot-distance").previousElementSibling.innerHTML = "Max Headshot Distance <span class=\"label-subtitle\">METER</span>";
    }
    else {
        column.querySelector("#max-headshot-distance").textContent = column.mode.Firing.Shot.MaxHeadshotDistance ?? "-";
        column.querySelector("#max-headshot-distance").previousElementSibling.innerHTML = "Max Headshot Distance <span class=\"label-subtitle\">HAMMER</span>";
    }

    // Projectile Damage

    const damageDistanceNear = usingConvertedValues() ? (column.mode.Firing.Shot.Damage.Distance.Near * 0.0254).toFixed(1) / 1 + "m" : column.mode.Firing.Shot.Damage.Distance.Near + "h";
    const damageDistanceFar = usingConvertedValues() ? (column.mode.Firing.Shot.Damage.Distance.Far * 0.0254).toFixed(1) / 1 + "m" : column.mode.Firing.Shot.Damage.Distance.Far + "h";
    const damageDistanceVeryFar = usingConvertedValues() ? (column.mode.Firing.Shot.Damage.Distance.VeryFar * 0.0254).toFixed(1) / 1 + "m" : column.mode.Firing.Shot.Damage.Distance.VeryFar + "h";

    console.log(column.mode.Firing.Shot.Damage.Distance.Near);

    if (column.mode.Firing.Shot.Damage.Amount.Far == null && column.mode.Firing.Shot.Damage.Amount.VeryFar == null) {
        column.querySelector("#damage-distance-near-tab").nextSibling.textContent = "Any Distance";
    }
    else {
        column.querySelector("#damage-distance-near-tab").nextSibling.textContent = damageDistanceNear;
    }

    if (column.mode.Firing.Shot.Damage.Amount.Far != null) {
        column.querySelector("#damage-distance-far-tab").parentElement.style.display = "block";
        column.querySelector("#damage-distance-far-tab").nextSibling.textContent = damageDistanceFar;
    }
    else {
        column.querySelector("#damage-distance-far-tab").parentElement.style.display = "none";
    }
    if (column.mode.Firing.Shot.Damage.Amount.VeryFar != null) {
        column.querySelector("#damage-distance-very-far-tab").parentElement.style.display = "block";
        column.querySelector("#damage-distance-very-far-tab").nextSibling.textContent = damageDistanceVeryFar;
    }
    else {
        column.querySelector("#damage-distance-very-far-tab").parentElement.style.display = "none";
    }

    function damageDistanceTabChanged() {
        let baseDamage = column.mode.Firing.Shot.Damage.Amount.Near;
    
        if (column.querySelector("#damage-distance-near-tab").checked)
            baseDamage = column.mode.Firing.Shot.Damage.Amount.Near;
        else if (column.querySelector("#damage-distance-far-tab").checked)
            baseDamage = column.mode.Firing.Shot.Damage.Amount.Far;
        else if (column.querySelector("#damage-distance-very-far-tab").checked)
            baseDamage = column.mode.Firing.Shot.Damage.Amount.VeryFar;

        const headMultiplier = column.mode.Firing.Shot.Damage.Multipliers.Head ?? 1;
        const legMultiplier = column.mode.Firing.Shot.Damage.Multipliers.Leg ?? 1;

        const fleshMultiplier = column.mode.Firing.Shot.Damage.Multipliers.Flesh ?? 1;
        const shieldMultiplier = column.mode.Firing.Shot.Damage.Multipliers.Shield ?? 1;

        const critHitMultiplier = column.mode.Firing.Shot.Damage.Multipliers.CriticalHit ?? 1;

        column.querySelector("#damage-amount").textContent = `${baseDamage} / ${(headMultiplier * baseDamage).toFixed(2) / 1} / ${(legMultiplier * baseDamage).toFixed(2) / 1}`;

        column.querySelector("#damage-flesh").textContent = `${baseDamage * fleshMultiplier} / ${(headMultiplier * baseDamage * fleshMultiplier).toFixed(2) / 1} / ${(legMultiplier * baseDamage * fleshMultiplier).toFixed(2) / 1}`;

        column.querySelector("#damage-shield").textContent = `${baseDamage * shieldMultiplier} / ${(headMultiplier * baseDamage * shieldMultiplier).toFixed(2) / 1} / ${(legMultiplier * baseDamage * shieldMultiplier).toFixed(2) / 1}`;

        column.querySelector("#damage-critical").textContent = `${(baseDamage * critHitMultiplier).toFixed(2) / 1} / ${(headMultiplier * baseDamage * critHitMultiplier).toFixed(2) / 1} / ${(legMultiplier * baseDamage * critHitMultiplier).toFixed(2) / 1}`;
    }

    damageDistanceTabChanged();
    column.querySelectorAll('input[name="damage-distance"]').forEach(input => input.onchange = damageDistanceTabChanged);

    // Projectile Damage

    const shotDamageDistanceNear = usingConvertedValues() ? (column.mode.Firing.Shot.Damage.Distance.Near * 0.0254).toFixed(1) / 1 + "m" : column.mode.Firing.Shot.Damage.Distance.Near + "h";
    const shotDamageDistanceFar = usingConvertedValues() ? (column.mode.Firing.Shot.Damage.Distance.Far * 0.0254).toFixed(1) / 1 + "m" : column.mode.Firing.Shot.Damage.Distance.Far + "h";
    const shotDamageDistanceVeryFar = usingConvertedValues() ? (column.mode.Firing.Shot.Damage.Distance.VeryFar * 0.0254).toFixed(1) / 1 + "m" : column.mode.Firing.Shot.Damage.Distance.VeryFar + "h";

    console.log(column.mode.Firing.Shot.Damage.Distance.Near);

    if (column.mode.Firing.Shot.Damage.Amount.Far == null && column.mode.Firing.Shot.Damage.Amount.VeryFar == null) {
        column.querySelector("#shot-damage-distance-near-tab").nextSibling.textContent = "Any Distance";
    }
    else {
        column.querySelector("#shot-damage-distance-near-tab").nextSibling.textContent = shotDamageDistanceNear;
    }

    if (column.mode.Firing.Shot.Damage.Amount.Far != null) {
        column.querySelector("#shot-damage-distance-far-tab").parentElement.style.display = "block";
        column.querySelector("#shot-damage-distance-far-tab").nextSibling.textContent = shotDamageDistanceFar;
    }
    else {
        column.querySelector("#shot-damage-distance-far-tab").parentElement.style.display = "none";
    }
    if (column.mode.Firing.Shot.Damage.Amount.VeryFar != null) {
        column.querySelector("#shot-damage-distance-very-far-tab").parentElement.style.display = "block";
        column.querySelector("#shot-damage-distance-very-far-tab").nextSibling.textContent = shotDamageDistanceVeryFar;
    }
    else {
        column.querySelector("#shot-damage-distance-very-far-tab").parentElement.style.display = "none";
    }

    function shotDamageDistanceTabChanged() {
        let baseDamage = column.mode.Firing.Shot.Damage.Amount.Near;
    
        if (column.querySelector("#shot-damage-distance-near-tab").checked)
            baseDamage = column.mode.Firing.Shot.Projectiles *column.mode.Firing.Shot.Damage.Amount.Near;
        else if (column.querySelector("#shot-damage-distance-far-tab").checked)
            baseDamage = column.mode.Firing.Shot.Projectiles * column.mode.Firing.Shot.Damage.Amount.Far;
        else if (column.querySelector("#shot-damage-distance-very-far-tab").checked)
            baseDamage = column.mode.Firing.Shot.Projectiles * column.mode.Firing.Shot.Damage.Amount.VeryFar;

        const headMultiplier = column.mode.Firing.Shot.Damage.Multipliers.Head ?? 1;
        const legMultiplier = column.mode.Firing.Shot.Damage.Multipliers.Leg ?? 1;

        const fleshMultiplier = column.mode.Firing.Shot.Damage.Multipliers.Flesh ?? 1;
        const shieldMultiplier = column.mode.Firing.Shot.Damage.Multipliers.Shield ?? 1;

        const critHitMultiplier = column.mode.Firing.Shot.Damage.Multipliers.CriticalHit ?? 1;

        column.querySelector("#shot-damage-amount").textContent = `${baseDamage} / ${(headMultiplier * baseDamage).toFixed(2) / 1} / ${(legMultiplier * baseDamage).toFixed(2) / 1}`;

        column.querySelector("#shot-damage-flesh").textContent = `${baseDamage * fleshMultiplier} / ${(headMultiplier * baseDamage * fleshMultiplier).toFixed(2) / 1} / ${(legMultiplier * baseDamage * fleshMultiplier).toFixed(2) / 1}`;

        column.querySelector("#shot-damage-shield").textContent = `${baseDamage * shieldMultiplier} / ${(headMultiplier * baseDamage * shieldMultiplier).toFixed(2) / 1} / ${(legMultiplier * baseDamage * shieldMultiplier).toFixed(2) / 1}`;

        column.querySelector("#shot-damage-critical").textContent = `${(baseDamage * critHitMultiplier).toFixed(2) / 1} / ${(headMultiplier * baseDamage * critHitMultiplier).toFixed(2) / 1} / ${(legMultiplier * baseDamage * critHitMultiplier).toFixed(2) / 1}`;
    }

    shotDamageDistanceTabChanged();
    column.querySelectorAll('input[name="shot-damage-distance"]').forEach(input => input.onchange = shotDamageDistanceTabChanged);

    // Projectile Size

    column.querySelector("#initial-size").textContent = column.mode.Firing.Shot.ProjectileSize.InitialSize ?? "-";

    if (column.mode.Firing.Shot.ProjectileSize.Step1 == null) {
        column.querySelector("#step-1").textContent = "-";
        column.querySelector("#step-1").previousElementSibling.textContent = "Step 1";
    }
    else {
        column.querySelector("#step-1").textContent = column.mode.Firing.Shot.ProjectileSize.Step1?.Size ?? "-";
        column.querySelector("#step-1").previousElementSibling.innerHTML = `Step 1 <span class="label-subtitle">${column.mode.Firing.Shot.ProjectileSize.Step1.Time}sec</span>`;
    }

    if (column.mode.Firing.Shot.ProjectileSize.Step2 == null) {
        column.querySelector("#step-2").textContent = "-";
        column.querySelector("#step-2").previousElementSibling.textContent = "Step 2";
    }
    else {
        column.querySelector("#step-2").textContent = column.mode.Firing.Shot.ProjectileSize.Step2?.Size ?? "-";
        column.querySelector("#step-2").previousElementSibling.innerHTML = `Step 2 <span class="label-subtitle">${column.mode.Firing.Shot.ProjectileSize.Step2.Time}sec</span>`;
    }

    if (column.mode.Firing.Shot.ProjectileSize.Final == null) {
        column.querySelector("#final-step").textContent = "-";
        column.querySelector("#final-step").previousElementSibling.textContent = "Final Step";
    }
    else {
        column.querySelector("#final-step").textContent = column.mode.Firing.Shot.ProjectileSize.Final?.Size ?? "-";
        column.querySelector("#final-step").previousElementSibling.innerHTML = `Final Step <span class="label-subtitle">${column.mode.Firing.Shot.ProjectileSize.Final.Time}sec</span>`;
    }
    

}


function rarityFormat(value, isMythic = false, highestRarity = undefined, operation = x => x) {
    const order = ['Base', 'Common', 'Rare', 'Epic', 'Legendary', 'Mythic'];
    const stopIndex = order.indexOf(highestRarity) >= 0 ? order.indexOf(highestRarity) : order.length - 1;
    const totalRarities = Object.keys(value).length;

    const rarities = [];

    if (isMythic && totalRarities == 1)
        return `<span style="color:var(--mythic);">${operation(value["Base"], "Base")}</span>`;

    if (totalRarities == 1)
        return `<span>${operation(value["Base"], "Base")}</span>`;

    for (let i = 0; i <= stopIndex; i++) {
        const rarity = order[i];
        const val = value[rarity];
        if (val != null) {
            rarities.push(`<span style="color:var(--${rarity.toLowerCase()});">${operation(val, rarity)}</span>`);
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