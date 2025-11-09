// big disclaimer im not a js/web dev so i dont know whats the proper way to be doing anything. if for some reason anyone actually looks at and/or contributes to this code youll prob be sad

const u = utils();

const seasons = [];

await new Promise(resolve => document.readyState === "loading" ? document.addEventListener("DOMContentLoaded", resolve) : resolve());

let numColumns = 2;

updateColumnButtonStyles(false);
const comparison = document.querySelector(".comparison");
const columntemplate = document.getElementById("column-template").cloneNode(true);
document.getElementById("column-template").remove();
for (let i = 0; i < numColumns; i++) {
    const clone = columntemplate.cloneNode(true);
    clone.id = `column-${i + 1}`;
    comparison.appendChild(clone);
}

await loadSeasons();

const convertedValuesToggle = document.getElementById("converted-values-toggle");
function usingConvertedValues() {
    return !convertedValuesToggle.checked;
}

for (const column of u.columns) {
    setupColumn(column);
}
updateColumnButtonStyles();

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

function updateColumnButtonStyles(loaded = true) {
    if (numColumns >= 5 || !loaded) {
        document.getElementById("increase-columns").style.opacity = "0.5";
        document.getElementById("increase-columns").style.pointerEvents = "none";
    }
    else {
        document.getElementById("increase-columns").style.opacity = "1";
        document.getElementById("increase-columns").style.pointerEvents = "auto";
    }

    if (numColumns > 1 && loaded) {
        document.getElementById("decrease-columns").style.opacity = "1";
        document.getElementById("decrease-columns").style.pointerEvents = "auto";
    }
    else {
        document.getElementById("decrease-columns").style.opacity = "0.5";
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
        updateWeaponStats(column);
    };

    convertedValuesToggle.addEventListener('change', e => {
        updateWeaponStats(column);
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

function updateWeaponStats(column) {
    // Ammo

    column.querySelector("#ammo-type").textContent = column.mode.Ammo.Type ?? "-";
    
    column.querySelector("#magazine-size").innerHTML = rarityFormat(column.mode.Ammo.MagazineSize, undefined, "Epic");

    // Firing

    column.querySelector("#firing-mode").textContent = column.mode.Firing.FireMode ?? "-";

    function rpm(fireRate = column.mode.Firing.FireRate, key = "Base") {
        if (column.mode.Firing.RechamberTime?.[key] != null)
            fireRate = 1 / Math.max(1 / fireRate, column.mode.Firing.RechamberTime[key]);
        else if (column.mode.Firing.BurstCount > 1)
            fireRate = column.mode.Firing.BurstCount / (column.mode.Firing.BurstCount / fireRate + column.mode.Firing.BurstDelay);
        return fireRate.mult(60).roundTo(0);
    }

    if (usingConvertedValues()) {
        column.querySelector("#firerate").innerHTML = rarityFormat(column.mode.Firing.FireRate, rpm);
        column.querySelector("#firerate").previousElementSibling.innerHTML = "Firerate <span class=\"label-subtitle\">RPM</span>";
    }
    else {
        column.querySelector("#firerate").innerHTML = rarityFormat(column.mode.Firing.FireRate);
        column.querySelector("#firerate").previousElementSibling.innerHTML = "Firerate <span class=\"label-subtitle\">RPS</span>";
    }

    if (!usingConvertedValues() && column.mode.Firing.RechamberTime != null) {
        column.querySelector("#rechamber-time").innerHTML = rarityFormat(column.mode.Firing.RechamberTime);
        column.querySelector("#rechamber-time").parentElement.style.display = "flex";
    }
    else if (!usingConvertedValues() && column.mode.Firing.RechamberTime == null) {
        column.querySelector("#rechamber-time").textContent = "-";
        column.querySelector("#rechamber-time").parentElement.style.display = "flex";
    }
    else {
        column.querySelector("#rechamber-time").parentElement.style.display = "none";
    }

    column.querySelector("#burst-count").textContent = column.mode.Firing.BurstCount ?? "-";

    if (column.mode.Firing.BurstDelay != null) {
        column.querySelector("#burst-delay").innerHTML = column.mode.Firing.BurstDelay;

        if (usingConvertedValues()) {
           column.querySelector("#burst-firerate").innerHTML = rarityFormat(column.mode.Firing.FireRate, (x, key) => {
               if (column.mode.Firing.RechamberTime?.[key] != null)
                   x = 1 / Math.max(1 / x, column.mode.Firing.RechamberTime[key]);
               return x.mult(60).roundTo(0);
           });
           column.querySelector("#burst-firerate").innerHTML = rarityFormat(column.mode.Firing.FireRate, (x, key) => {
               if (column.mode.Firing.RechamberTime?.[key] != null)
                   x = 1 / Math.max(1 / x, column.mode.Firing.RechamberTime[key]);
               return x.mult(60).roundTo(0);
           });
           column.querySelector("#burst-firerate").previousElementSibling.innerHTML = "Burst Firerate <span class=\"label-subtitle\">RPM</span>";
        }
        else {
           column.querySelector("#burst-firerate").innerHTML = rarityFormat(column.mode.Firing.FireRate);
           column.querySelector("#burst-firerate").previousElementSibling.innerHTML = "Burst Firerate <span class=\"label-subtitle\">RPS</span>";
        }
    }
    else {
        column.querySelector("#burst-delay").textContent = "-";
        column.querySelector("#burst-firerate").textContent = "-";
        if (usingConvertedValues()) {
           column.querySelector("#burst-firerate").previousElementSibling.innerHTML = "Burst Firerate <span class=\"label-subtitle\">RPM</span>";
        }
        else {
           column.querySelector("#burst-firerate").previousElementSibling.innerHTML = "Burst Firerate <span class=\"label-subtitle\">RPS</span>";
        }
    }

    // Shot

    column.querySelector("#projectiles-per-shot").textContent = column.mode.Firing.Shot.Projectiles ?? "-";

    column.querySelector("#ammo-consumed").textContent = column.mode.Firing.Shot.AmmoConsumed ?? "-";

    if (usingConvertedValues()) {
        column.querySelector("#projectile-speed").textContent = column.mode.Firing.Shot.Speed != null ? column.mode.Firing.Shot.Speed.toMeters(1) : "-";
        column.querySelector("#projectile-speed").previousElementSibling.innerHTML = "Projectile Speed <span class=\"label-subtitle\">M/S</span>";
    }
    else {
        column.querySelector("#projectile-speed").textContent = column.mode.Firing.Shot.Speed ?? "-";
        column.querySelector("#projectile-speed").previousElementSibling.innerHTML = "Projectile Speed <span class=\"label-subtitle\">H/S</span>";
    }
    
    column.querySelector("#drag-coefficient").textContent = column.mode.Firing.Shot.DragCoefficient ?? "-";

    column.querySelector("#gravity-multiplier").textContent = column.mode.Firing.Shot.GravityMultiplier ?? "-";

    if (usingConvertedValues()) {
        column.querySelector("#max-headshot-distance").textContent = column.mode.Firing.Shot.MaxHeadshotDistance != null ? column.mode.Firing.Shot.MaxHeadshotDistance.toMeters(1) : "-";
        column.querySelector("#max-headshot-distance").previousElementSibling.innerHTML = "Max Headshot Distance <span class=\"label-subtitle\">METER</span>";
    }
    else {
        column.querySelector("#max-headshot-distance").textContent = column.mode.Firing.Shot.MaxHeadshotDistance ?? "-";
        column.querySelector("#max-headshot-distance").previousElementSibling.innerHTML = "Max Headshot Distance <span class=\"label-subtitle\">HAMMER</span>";
    }

    // Projectile Damage

    const distanceNear = usingConvertedValues() ? column.mode.Firing.Shot.Damage.Distance.Near.toMeters(1) + "m" : column.mode.Firing.Shot.Damage.Distance.Near + "h";
    const distanceFar = usingConvertedValues() ? column.mode.Firing.Shot.Damage.Distance.Far.toMeters(1) + "m" : column.mode.Firing.Shot.Damage.Distance.Far + "h";
    const distanceVeryFar = usingConvertedValues() ? column.mode.Firing.Shot.Damage.Distance.VeryFar.toMeters(1) + "m" : column.mode.Firing.Shot.Damage.Distance.VeryFar + "h";

    if (column.mode.Firing.Shot.Damage.Amount.Far == null && column.mode.Firing.Shot.Damage.Amount.VeryFar == null) {
        column.querySelector("#damage-distance-near-tab").nextSibling.textContent = "Any Distance";
    }
    else {
        column.querySelector("#damage-distance-near-tab").nextSibling.textContent = distanceNear;
    }

    if (column.mode.Firing.Shot.Damage.Amount.Far != null) {
        column.querySelector("#damage-distance-far-tab").parentElement.style.display = "block";
        column.querySelector("#damage-distance-far-tab").nextSibling.textContent = distanceFar;
    }
    else {
        column.querySelector("#damage-distance-far-tab").parentElement.style.display = "none";
    }
    if (column.mode.Firing.Shot.Damage.Amount.VeryFar != null) {
        column.querySelector("#damage-distance-very-far-tab").parentElement.style.display = "block";
        column.querySelector("#damage-distance-very-far-tab").nextSibling.textContent = distanceVeryFar;
    }
    else {
        column.querySelector("#damage-distance-very-far-tab").parentElement.style.display = "none";
    }
    
    const headMultiplier = column.mode.Firing.Shot.Damage.Multipliers.Head ?? 1;
    const legMultiplier = column.mode.Firing.Shot.Damage.Multipliers.Leg ?? 1;

    const fleshMultiplier = column.mode.Firing.Shot.Damage.Multipliers.Flesh ?? 1;
    const shieldMultiplier = column.mode.Firing.Shot.Damage.Multipliers.Shield ?? 1;

    const critHitMultiplier = column.mode.Firing.Shot.Damage.Multipliers.CriticalHit ?? 1;

    function damageDistanceTabChanged() {
        let baseDamage = column.mode.Firing.Shot.Damage.Amount.Near;
    
        if (column.querySelector("#damage-distance-near-tab").checked)
            baseDamage = column.mode.Firing.Shot.Damage.Amount.Near;
        else if (column.querySelector("#damage-distance-far-tab").checked)
            baseDamage = column.mode.Firing.Shot.Damage.Amount.Far;
        else if (column.querySelector("#damage-distance-very-far-tab").checked)
            baseDamage = column.mode.Firing.Shot.Damage.Amount.VeryFar;

        column.querySelector("#damage-amount").textContent = `${baseDamage} / ${baseDamage.mult(headMultiplier).roundTo()} / ${baseDamage.mult(legMultiplier).roundTo()}`;

        column.querySelector("#damage-flesh").textContent = `${baseDamage.mult(fleshMultiplier).roundTo()} / ${baseDamage.mult(headMultiplier * fleshMultiplier).roundTo()} / ${baseDamage.mult(legMultiplier * fleshMultiplier).roundTo()}`;

        column.querySelector("#damage-shield").textContent = `${baseDamage.mult(shieldMultiplier).roundTo()} / ${baseDamage.mult(headMultiplier * shieldMultiplier).roundTo()} / ${baseDamage.mult(legMultiplier * shieldMultiplier).roundTo()}`;

        column.querySelector("#damage-critical").textContent = `${baseDamage.mult(critHitMultiplier).roundTo()} / ${baseDamage.mult(headMultiplier * critHitMultiplier).roundTo()} / ${baseDamage.mult(legMultiplier * critHitMultiplier).roundTo()}`;
    }

    damageDistanceTabChanged();
    column.querySelectorAll('input[name="damage-distance"]').forEach(input => input.onchange = damageDistanceTabChanged);

    // Shot Damage

    if (column.mode.Firing.Shot.Damage.Amount.Far == null && column.mode.Firing.Shot.Damage.Amount.VeryFar == null) {
        column.querySelector("#shot-damage-distance-near-tab").nextSibling.textContent = "Any Distance";
    }
    else {
        column.querySelector("#shot-damage-distance-near-tab").nextSibling.textContent = distanceNear;
    }

    if (column.mode.Firing.Shot.Damage.Amount.Far != null) {
        column.querySelector("#shot-damage-distance-far-tab").parentElement.style.display = "block";
        column.querySelector("#shot-damage-distance-far-tab").nextSibling.textContent = distanceFar;
    }
    else {
        column.querySelector("#shot-damage-distance-far-tab").parentElement.style.display = "none";
    }
    if (column.mode.Firing.Shot.Damage.Amount.VeryFar != null) {
        column.querySelector("#shot-damage-distance-very-far-tab").parentElement.style.display = "block";
        column.querySelector("#shot-damage-distance-very-far-tab").nextSibling.textContent = distanceVeryFar;
    }
    else {
        column.querySelector("#shot-damage-distance-very-far-tab").parentElement.style.display = "none";
    }

    function shotDamageDistanceTabChanged() {
        let baseDamage = column.mode.Firing.Shot.Damage.Amount.Near;
    
        if (column.querySelector("#shot-damage-distance-near-tab").checked)
            baseDamage = column.mode.Firing.Shot.Projectiles * column.mode.Firing.Shot.Damage.Amount.Near;
        else if (column.querySelector("#shot-damage-distance-far-tab").checked)
            baseDamage = column.mode.Firing.Shot.Projectiles * column.mode.Firing.Shot.Damage.Amount.Far;
        else if (column.querySelector("#shot-damage-distance-very-far-tab").checked)
            baseDamage = column.mode.Firing.Shot.Projectiles * column.mode.Firing.Shot.Damage.Amount.VeryFar;

        column.querySelector("#shot-damage-amount").textContent = `${baseDamage} / ${baseDamage.mult(headMultiplier).roundTo()} / ${baseDamage.mult(legMultiplier).roundTo()}`;

        column.querySelector("#shot-damage-flesh").textContent = `${baseDamage.mult(fleshMultiplier).roundTo()} / ${baseDamage.mult(headMultiplier * fleshMultiplier).roundTo()} / ${baseDamage.mult(legMultiplier * fleshMultiplier).roundTo()}`;

        column.querySelector("#shot-damage-shield").textContent = `${baseDamage.mult(shieldMultiplier).roundTo()} / ${baseDamage.mult(headMultiplier * shieldMultiplier).roundTo()} / ${baseDamage.mult(legMultiplier * shieldMultiplier).roundTo()}`;

        column.querySelector("#shot-damage-critical").textContent = `${baseDamage.mult(critHitMultiplier).roundTo()} / ${baseDamage.mult(headMultiplier * critHitMultiplier).roundTo()} / ${baseDamage.mult(legMultiplier * critHitMultiplier).roundTo()}`;
    }

    shotDamageDistanceTabChanged();
    column.querySelectorAll('input[name="shot-damage-distance"]').forEach(input => input.onchange = shotDamageDistanceTabChanged);

    // Shots to Kill

    if (column.mode.Firing.Shot.Damage.Amount.Far == null && column.mode.Firing.Shot.Damage.Amount.VeryFar == null) {
        column.querySelector("#shotstokill-distance-near-tab").nextSibling.textContent = "Any Distance";
    }
    else {
        column.querySelector("#shotstokill-distance-near-tab").nextSibling.textContent = distanceNear;
    }

    if (column.mode.Firing.Shot.Damage.Amount.Far != null) {
        column.querySelector("#shotstokill-distance-far-tab").parentElement.style.display = "block";
        column.querySelector("#shotstokill-distance-far-tab").nextSibling.textContent = distanceFar;
    }
    else {
        column.querySelector("#shotstokill-distance-far-tab").parentElement.style.display = "none";
    }
    if (column.mode.Firing.Shot.Damage.Amount.VeryFar != null) {
        column.querySelector("#shotstokill-distance-very-far-tab").parentElement.style.display = "block";
        column.querySelector("#shotstokill-distance-very-far-tab").nextSibling.textContent = distanceVeryFar;
    }
    else {
        column.querySelector("#shotstokill-distance-very-far-tab").parentElement.style.display = "none";
    }

    function stkCalc(hp, baseDamage, baseMultiplier, partMultiplier = 1) {
        return hp / (baseDamage * baseMultiplier * partMultiplier);
    }
    function stkHealth(health, baseDamage, partMultiplier = 1) {
        return Math.ceil(stkCalc(health, baseDamage, fleshMultiplier, partMultiplier));
    }
    function stkHealthAndShield(health, shield, baseDamage, partMultiplier = 1) {
        return Math.ceil(stkCalc(health, baseDamage, fleshMultiplier, partMultiplier) + stkCalc(shield, baseDamage, shieldMultiplier, partMultiplier));
    }

    function shotstokillDistanceTabChanged() {
        let baseDamage = column.mode.Firing.Shot.Damage.Amount.Near;

        if (column.querySelector("#shotstokill-distance-near-tab").checked)
            baseDamage = column.mode.Firing.Shot.Projectiles * column.mode.Firing.Shot.Damage.Amount.Near;
        else if (column.querySelector("#shotstokill-distance-far-tab").checked)
            baseDamage = column.mode.Firing.Shot.Projectiles * column.mode.Firing.Shot.Damage.Amount.Far;
        else if (column.querySelector("#shotstokill-distance-very-far-tab").checked)
            baseDamage = column.mode.Firing.Shot.Projectiles * column.mode.Firing.Shot.Damage.Amount.VeryFar;
        
        column.querySelector("#shotstokill-base").textContent = `${stkHealth(100, baseDamage)} / ${stkHealth(100, baseDamage, headMultiplier)} / ${stkHealth(100, baseDamage, legMultiplier)}`;

        column.querySelector("#shotstokill-common").textContent = `${stkHealthAndShield(100, 50, baseDamage)} / ${stkHealthAndShield(100, 50, baseDamage, headMultiplier)} / ${stkHealthAndShield(100, 50, baseDamage, legMultiplier)}`;

        column.querySelector("#shotstokill-rare").textContent = `${stkHealthAndShield(100, 75, baseDamage)} / ${stkHealthAndShield(100, 75, baseDamage, headMultiplier)} / ${stkHealthAndShield(100, 75, baseDamage, legMultiplier)}`;

        column.querySelector("#shotstokill-epic").textContent = `${stkHealthAndShield(100, 100, baseDamage)} / ${stkHealthAndShield(100, 100, baseDamage, headMultiplier)} / ${stkHealthAndShield(100, 100, baseDamage, legMultiplier)}`;

        column.querySelector("#shotstokill-mythic").textContent = `${stkHealthAndShield(100, 125, baseDamage)} / ${stkHealthAndShield(100, 125, baseDamage, headMultiplier)} / ${stkHealthAndShield(100, 125, baseDamage, legMultiplier)}`;
    }

    shotstokillDistanceTabChanged();
    column.querySelectorAll('input[name="shotstokill-distance"]').forEach(input => input.onchange = shotstokillDistanceTabChanged);

    // DPS
    
    if (column.mode.Firing.Shot.Damage.Amount.Far == null && column.mode.Firing.Shot.Damage.Amount.VeryFar == null) {
        column.querySelector("#dps-distance-near-tab").nextSibling.textContent = "Any Distance";
    }
    else {
        column.querySelector("#dps-distance-near-tab").nextSibling.textContent = distanceNear;
    }

    if (column.mode.Firing.Shot.Damage.Amount.Far != null) {
        column.querySelector("#dps-distance-far-tab").parentElement.style.display = "block";
        column.querySelector("#dps-distance-far-tab").nextSibling.textContent = distanceFar;
    }
    else {
        column.querySelector("#dps-distance-far-tab").parentElement.style.display = "none";
    }
    if (column.mode.Firing.Shot.Damage.Amount.VeryFar != null) {
        column.querySelector("#dps-distance-very-far-tab").parentElement.style.display = "block";
        column.querySelector("#dps-distance-very-far-tab").nextSibling.textContent = distanceVeryFar;
    }
    else {
        column.querySelector("#dps-distance-very-far-tab").parentElement.style.display = "none";
    }

    function dpsTabChanged() {
        let baseDamage = column.mode.Firing.Shot.Damage.Amount.Near;
    
        if (column.querySelector("#dps-distance-near-tab").checked)
            baseDamage = column.mode.Firing.Shot.Projectiles * column.mode.Firing.Shot.Damage.Amount.Near;
        else if (column.querySelector("#dps-distance-far-tab").checked)
            baseDamage = column.mode.Firing.Shot.Projectiles * column.mode.Firing.Shot.Damage.Amount.Far;
        else if (column.querySelector("#dps-distance-very-far-tab").checked)
            baseDamage = column.mode.Firing.Shot.Projectiles * column.mode.Firing.Shot.Damage.Amount.VeryFar;

        column.querySelector("#dps-base-body").innerHTML = rarityFormat(column.mode.Firing.FireRate, (x, key) => {
            x = rpm(x, key) / 60;
            return Math.round(baseDamage * x);
        });
        column.querySelector("#dps-base-head").innerHTML = rarityFormat(column.mode.Firing.FireRate, (x, key) => {
            x = rpm(x, key) / 60;
            return Math.round(baseDamage * x * headMultiplier);
        });
        column.querySelector("#dps-base-limb").innerHTML = rarityFormat(column.mode.Firing.FireRate, (x, key) => {
            x = rpm(x, key) / 60;
            return Math.round(baseDamage * x * legMultiplier);
        });

        column.querySelector("#dps-flesh-body").innerHTML = rarityFormat(column.mode.Firing.FireRate, (x, key) => {
            x = rpm(x, key) / 60;
            return Math.round(baseDamage * x * fleshMultiplier);
        });
        column.querySelector("#dps-flesh-head").innerHTML = rarityFormat(column.mode.Firing.FireRate, (x, key) => {
            x = rpm(x, key) / 60;
            return Math.round(baseDamage * x * headMultiplier * fleshMultiplier);
        });
        column.querySelector("#dps-flesh-limb").innerHTML = rarityFormat(column.mode.Firing.FireRate, (x, key) => {
            x = rpm(x, key) / 60;
            return Math.round(baseDamage * x * legMultiplier * fleshMultiplier);
        });

        column.querySelector("#dps-shield-body").innerHTML = rarityFormat(column.mode.Firing.FireRate, (x, key) => {
            x = rpm(x, key) / 60;
            return Math.round(baseDamage * x * shieldMultiplier);
        });
        column.querySelector("#dps-shield-head").innerHTML = rarityFormat(column.mode.Firing.FireRate, (x, key) => {
            x = rpm(x, key) / 60;
            return Math.round(baseDamage * x * headMultiplier * shieldMultiplier);
        });
        column.querySelector("#dps-shield-limb").innerHTML = rarityFormat(column.mode.Firing.FireRate, (x, key) => {
            x = rpm(x, key) / 60;
            return Math.round(baseDamage * x * legMultiplier * shieldMultiplier);
        });
    }

    dpsTabChanged();
    column.querySelectorAll('input[name="dps-distance"]').forEach(input => input.onchange = dpsTabChanged);

    // TTK :(

    if (column.mode.Firing.Shot.Damage.Amount.Far == null && column.mode.Firing.Shot.Damage.Amount.VeryFar == null) {
        column.querySelector("#ttk-distance-near-tab").nextSibling.textContent = "Any Distance";
    }
    else {
        column.querySelector("#ttk-distance-near-tab").nextSibling.textContent = distanceNear;
    }

    if (column.mode.Firing.Shot.Damage.Amount.Far != null) {
        column.querySelector("#ttk-distance-far-tab").parentElement.style.display = "block";
        column.querySelector("#ttk-distance-far-tab").nextSibling.textContent = distanceFar;
    }
    else {
        column.querySelector("#ttk-distance-far-tab").parentElement.style.display = "none";
    }
    if (column.mode.Firing.Shot.Damage.Amount.VeryFar != null) {
        column.querySelector("#ttk-distance-very-far-tab").parentElement.style.display = "block";
        column.querySelector("#ttk-distance-very-far-tab").nextSibling.textContent = distanceVeryFar;
    }
    else {
        column.querySelector("#ttk-distance-very-far-tab").parentElement.style.display = "none";
    }

    function ttkTabChanged() {
        let baseDamage = column.mode.Firing.Shot.Damage.Amount.Near;
    
        if (column.querySelector("#ttk-distance-near-tab").checked)
            baseDamage = column.mode.Firing.Shot.Projectiles * column.mode.Firing.Shot.Damage.Amount.Near;
        else if (column.querySelector("#ttk-distance-far-tab").checked)
            baseDamage = column.mode.Firing.Shot.Projectiles * column.mode.Firing.Shot.Damage.Amount.Far;
        else if (column.querySelector("#ttk-distance-very-far-tab").checked)
            baseDamage = column.mode.Firing.Shot.Projectiles * column.mode.Firing.Shot.Damage.Amount.VeryFar;

        const precision = column.offsetWidth <= 300 ? 2 : 3;

        column.querySelector("#ttk-no-armor-body").innerHTML = rarityFormat(column.mode.Firing.FireRate, (x, key) => {
            x = rpm(x, key) / 60;
            return ((stkHealth(100, baseDamage) - 1) / x).roundTo(precision);
        });
        column.querySelector("#ttk-no-armor-head").innerHTML = rarityFormat(column.mode.Firing.FireRate, (x, key) => {
            x = rpm(x, key) / 60;
            return ((stkHealth(100, baseDamage, headMultiplier) - 1) / x).roundTo(precision);
        });
        column.querySelector("#ttk-no-armor-limb").innerHTML = rarityFormat(column.mode.Firing.FireRate, (x, key) => {
            x = rpm(x, key) / 60;
            return ((stkHealth(100, baseDamage, legMultiplier) - 1) / x).roundTo(precision);
        });

        column.querySelector("#ttk-common-body").innerHTML = rarityFormat(column.mode.Firing.FireRate, (x, key) => {
            x = rpm(x, key) / 60;
            return ((stkHealthAndShield(100, 50, baseDamage) - 1) / x).roundTo(precision);
        });
        column.querySelector("#ttk-common-head").innerHTML = rarityFormat(column.mode.Firing.FireRate, (x, key) => {
            x = rpm(x, key) / 60;
            return ((stkHealthAndShield(100, 50, baseDamage, headMultiplier) - 1) / x).roundTo(precision);
        });
        column.querySelector("#ttk-common-limb").innerHTML = rarityFormat(column.mode.Firing.FireRate, (x, key) => {
            x = rpm(x, key) / 60;
            return ((stkHealthAndShield(100, 50, baseDamage, legMultiplier) - 1) / x).roundTo(precision);
        });

        column.querySelector("#ttk-rare-body").innerHTML = rarityFormat(column.mode.Firing.FireRate, (x, key) => {
            x = rpm(x, key) / 60;
            return ((stkHealthAndShield(100, 75, baseDamage) - 1) / x).roundTo(precision);
        });
        column.querySelector("#ttk-rare-head").innerHTML = rarityFormat(column.mode.Firing.FireRate, (x, key) => {
            x = rpm(x, key) / 60;
            return ((stkHealthAndShield(100, 75, baseDamage, headMultiplier) - 1) / x).roundTo(precision);
        });
        column.querySelector("#ttk-rare-limb").innerHTML = rarityFormat(column.mode.Firing.FireRate, (x, key) => {
            x = rpm(x, key) / 60;
            return ((stkHealthAndShield(100, 75, baseDamage, legMultiplier) - 1) / x).roundTo(precision);
        });

        column.querySelector("#ttk-epic-body").innerHTML = rarityFormat(column.mode.Firing.FireRate, (x, key) => {
            x = rpm(x, key) / 60;
            return ((stkHealthAndShield(100, 100, baseDamage) - 1) / x).roundTo(precision);
        });
        column.querySelector("#ttk-epic-head").innerHTML = rarityFormat(column.mode.Firing.FireRate, (x, key) => {
            x = rpm(x, key) / 60;
            return ((stkHealthAndShield(100, 100, baseDamage, headMultiplier) - 1) / x).roundTo(precision);
        });
        column.querySelector("#ttk-epic-limb").innerHTML = rarityFormat(column.mode.Firing.FireRate, (x, key) => {
            x = rpm(x, key) / 60;
            return ((stkHealthAndShield(100, 100, baseDamage, legMultiplier) - 1) / x).roundTo(precision);
        });

        column.querySelector("#ttk-mythic-body").innerHTML = rarityFormat(column.mode.Firing.FireRate, (x, key) => {
            x = rpm(x, key) / 60;
            return ((stkHealthAndShield(100, 125, baseDamage) - 1) / x).roundTo(precision);
        });
        column.querySelector("#ttk-mythic-head").innerHTML = rarityFormat(column.mode.Firing.FireRate, (x, key) => {
            x = rpm(x, key) / 60;
            return ((stkHealthAndShield(100, 125, baseDamage, headMultiplier) - 1) / x).roundTo(precision);
        });
        column.querySelector("#ttk-mythic-limb").innerHTML = rarityFormat(column.mode.Firing.FireRate, (x, key) => {
            x = rpm(x, key) / 60;
            return ((stkHealthAndShield(100, 125, baseDamage, legMultiplier) - 1) / x).roundTo(precision);
        });
    }

    ttkTabChanged();
    column.querySelectorAll('input[name="ttk-distance"]').forEach(input => input.onchange = ttkTabChanged);

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
    
    // Patterns

    column.querySelector("#recoil-pattern").drawPattern(column.mode.Firing.Shot.RecoilPattern, [-7, -13, 7, 1], true, true, 0.15, 0.1, '#fff', '#666');

    column.querySelector("#blast-pattern").drawPattern(column.mode.Firing.Shot.BlastPattern, undefined, false, false, 1);

    column.querySelectorAll("[id$='-distance-near-tab']").forEach(tab => {
        if (u.columns.toArray().every(c => c.querySelector(`#${tab.id}`).nextSibling.textContent === "Any Distance"))
            u.columns.forEach(c => c.querySelector(`#${tab.id}`).parentElement.style.display = "none");
        else
            u.columns.forEach(c => c.querySelector(`#${tab.id}`).parentElement.style.display = "flex");
    });
}


function rarityFormat(value, operation = x => x, highestRarity = undefined) {
    const order = ['Base', 'Common', 'Rare', 'Epic', 'Legendary', 'Mythic'];
    const stopIndex = order.indexOf(highestRarity) >= 0 ? order.indexOf(highestRarity) : order.length - 1;
    const totalRarities = Object.keys(value).length;

    const rarities = [];

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

function utils() {
    const utils = {
        get columns() { return document.querySelectorAll(".column"); }
    };

    Object.defineProperty(NodeList.prototype, 'toArray', { value: function() { return [...this]; } });

    Object.defineProperty(Number.prototype, 'roundTo', { value: function(precision = 0) { return this.toFixed(precision) / 1 } });
    Object.defineProperty(Number.prototype, 'mult', { value: function(multiplier) { return this * multiplier } });

    Object.defineProperty(Number.prototype, 'toMeters', { value: function(precision = 0) { return (this * 0.0254).roundTo(precision) } });

    Object.defineProperty(Element.prototype, 'drawPattern', {
        value: function(points = [], bounds = [-20, -20, 20, 20], drawAxes = true, connectPoints = false, pointRadius = 1, lineWidth = 0.1, pointColor = '#ffffff', lineColor = '#666666') {
            const axisColor = '#444444';
            this.setAttribute('viewBox', `${bounds[0]} ${bounds[1]} ${bounds[2] - bounds[0]} ${bounds[3] - bounds[1]}`);
            this.innerHTML = '';
            if (drawAxes)
                this.innerHTML = `<line x1="${bounds[0]}" y1="0" x2="${bounds[2]}" y2="0" stroke="${axisColor}" stroke-width="0.04" /><line x1="0.01" y1="${bounds[1]}" x2="0.01" y2="${bounds[3]}" stroke="${axisColor}" stroke-width="0.04" />`;
            const NS  = 'http://www.w3.org/2000/svg';

            if (connectPoints && points.length > 1) {
                for (let i = 1; i < points.length; i++) {
                    const p1 = points[i - 1];
                    const p2 = points[i];
                    const line = document.createElementNS(NS, 'line');
                    line.setAttribute('x1', p1.X);
                    line.setAttribute('y1', -p1.Y);
                    line.setAttribute('x2', p2.X);
                    line.setAttribute('y2', -p2.Y);
                    line.setAttribute('stroke', lineColor);
                    line.setAttribute('stroke-width', lineWidth);
                    this.appendChild(line);
                }
            }

            for (const point of points) {
                const dot = document.createElementNS(NS, 'circle');
                dot.setAttribute('cx', point.X);
                dot.setAttribute('cy', -point.Y);
                dot.setAttribute('r', pointRadius + "px");
                dot.setAttribute('fill', pointColor);
                this.appendChild(dot);
            }
        }
    });

    return utils;
}