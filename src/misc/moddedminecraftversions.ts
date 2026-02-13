import { Apex } from "../charts/apex.js";
import { API } from "../utils/api.js";
import { LoadingBar } from "../utils/loadingbar.js";
import { Utils } from "../utils/utils.js";

let versions = [
    "1.7.10",
    "1.12.2",
    "1.16.5",
    "1.17.1",
    "1.18.2",
    "1.19.2",
    "1.20",
    "1.20.1",
    "1.20.4",
    "1.21",
    "1.21.1",
    "1.21.10",
    "1.21.11"
];

const parseVersions = (input: string) => input.split(/(?:,| |\n)/).map(v => v.trim()).filter(v => v.length > 0);

await loadModrinthCharts(0, 0.5);
await loadCurseforgeCharts(0.5, 1);

async function loadModrinthCharts(loadStart = 0, loadEnd = 1) {
    const input = $id("modrinth-versions-input") as HTMLTextAreaElement;
    const updateButton = $id("modrinth-versions-update") as HTMLDivElement;

    input.value = versions.join(", ");
    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            updateButton.click();
        }
    });
    input.addEventListener("input", () => updateButton.classList.toggle("disabled", parseVersions(input.value).join(", ") === versions.join(", ")));
    updateButton.classList.toggle("disabled", parseVersions(input.value).join(", ") === versions.join(", "));

    updateButton.addEventListener("click", async () => {
        versions = parseVersions(input.value);
        await loadModrinthCharts(0, 1);
        updateButton.classList.add("disabled");
    });

    LoadingBar.start();
    LoadingBar.update(loadStart, 0.5 * (1 - loadStart) + loadStart);

    const versionSpecific = await API.post("/misc/minecraft/modrinth/modded-versions", {
        loaders: ["Fabric", "Quilt", "NeoForge", "Forge"],
        versions: versions
    });
    console.log(versionSpecific);

    LoadingBar.update(0.5 * (1 - loadStart) + loadStart, 0.9 * (1 - loadStart) + loadStart);

    const total = await API.post("/misc/minecraft/modrinth/modded-versions", {
        loaders: ["All"],
        versions: versions
    });
    console.log(total);


    const colors = ['rgba(236, 186, 149, 1)', 'rgba(170, 85, 255, 1)', 'rgb(216, 130, 49)', 'rgba(79, 120, 202, 1)'];

    LoadingBar.update(0.9 * (1 - loadStart) + loadStart, 0.93 * (1 - loadStart) + loadStart);
    $id("modrinth-loader")!.innerHTML = "";
    Apex.createBarChart("modrinth-loader", versionSpecific, "Modrinth - By Loader", `Data Updated ${Utils.readableDate(versionSpecific.lastUpdated)}`, [], colors, 500, false, false, "mods");

    LoadingBar.update(0.93 * (1 - loadStart) + loadStart, 0.96 * (1 - loadStart) + loadStart);
    $id("modrinth-loader-ratio")!.innerHTML = "";
    Apex.createRatioBarChart("modrinth-loader-ratio", versionSpecific, "Modrinth - By Loader (Ratio)", `Data Updated ${Utils.readableDate(versionSpecific.lastUpdated)}`, [], colors, 500, false, "mods");

    LoadingBar.update(0.96 * (1 - loadStart) + loadStart, 1);
    $id("modrinth-total")!.innerHTML = "";
    Apex.createBarChart("modrinth-total", total, "Modrinth - All Mods", `Data Updated ${Utils.readableDate(total.lastUpdated)}`, [], ['#1bd96a'], 500, false, false, "mods");

    if (loadEnd === 1)
        LoadingBar.finish();
}

async function loadCurseforgeCharts(loadStart = 0, loadEnd = 1) {
    const input = $id("curseforge-versions-input") as HTMLTextAreaElement;
    const updateButton = $id("curseforge-versions-update") as HTMLDivElement;

    input.value = versions.join(", ");
    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            updateButton.click();
        }
    });
    input.addEventListener("input", () => updateButton.classList.toggle("disabled", parseVersions(input.value).join(", ") === versions.join(", ")));
    updateButton.classList.toggle("disabled", parseVersions(input.value).join(", ") === versions.join(", "));

    updateButton.addEventListener("click", async () => {
        versions = parseVersions(input.value);
        await loadCurseforgeCharts(0, 1);
        updateButton.classList.add("disabled");
    });

    LoadingBar.start();
    LoadingBar.update(loadStart, 0.5 * (1 - loadStart) + loadStart);

    const versionSpecific = await API.post("/misc/minecraft/curseforge/modded-versions", {
        loaders: ["Fabric", "Quilt", "NeoForge", "Forge"],
        versions: versions
    });
    console.log(versionSpecific);

    LoadingBar.update(0.5 * (1 - loadStart) + loadStart, 0.9 * (1 - loadStart) + loadStart);

    const total = await API.post("/misc/minecraft/curseforge/modded-versions", {
        loaders: ["All"],
        versions: versions
    });
    console.log(total);


    const colors = ['rgba(236, 186, 149, 1)', 'rgba(170, 85, 255, 1)', 'rgb(216, 130, 49)', 'rgba(79, 120, 202, 1)'];

    LoadingBar.update(0.9 * (1 - loadStart) + loadStart, 0.93 * (1 - loadStart) + loadStart);
    $id("curseforge-loader")!.innerHTML = "";
    Apex.createBarChart("curseforge-loader", versionSpecific, "Curseforge - By Loader", `Data Updated ${Utils.readableDate(versionSpecific.lastUpdated)}`, [], colors, 500, false, false, "mods");

    LoadingBar.update(0.93 * (1 - loadStart) + loadStart, 0.96 * (1 - loadStart) + loadStart);
    $id("curseforge-loader-ratio")!.innerHTML = "";
    Apex.createRatioBarChart("curseforge-loader-ratio", versionSpecific, "Curseforge - By Loader (Ratio)", `Data Updated ${Utils.readableDate(versionSpecific.lastUpdated)}`, [], colors, 500, false, "mods");

    LoadingBar.update(0.96 * (1 - loadStart) + loadStart, 1);
    $id("curseforge-total")!.innerHTML = "";
    Apex.createBarChart("curseforge-total", total, "Curseforge - All Mods", `Data Updated ${Utils.readableDate(total.lastUpdated)}`, [], ['#f16436'], 500, false, false, "mods");

    if (loadEnd === 1)
        LoadingBar.finish();
}