import { Apex } from "../charts/apex.js";
import { API } from "../utils/api.js";
import { LoadingBar } from "../utils/loadingbar.js";
import { Utils } from "../utils/utils.js";

let versions = [
    "1.12.2",
    "1.16.5",
    "1.17",
    "1.17.1",
    "1.18",
    "1.18.1",
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
    await loadCharts();
    updateButton.classList.add("disabled");
});

loadCharts();

async function loadCharts() {
    LoadingBar.start();
    LoadingBar.update(0, 0.5);

    const versionSpecific = await API.post("misc/minecraft/modded-modrinth-versions", {
        loaders: ["Fabric", "Quilt", "NeoForge", "Forge"],
        versions: versions
    });
    console.log(versionSpecific);

    LoadingBar.update(0.5, 0.9);

    const total = await API.post("misc/minecraft/modded-modrinth-versions", {
        loaders: ["All"],
        versions: versions
    });
    console.log(total);


    const colors = ['rgba(236, 186, 149, 1)', 'rgba(170, 85, 255, 1)', 'rgb(216, 130, 49)', 'rgba(79, 120, 202, 1)'];

    LoadingBar.update(0.9, 0.93);
    $id("modrinth-loader")!.innerHTML = "";
    Apex.createBarChart("modrinth-loader", versionSpecific, "By Loader", `Data Updated ${Utils.readableDate(versionSpecific.lastUpdated)}`, [], colors, 500, false, false, "mods");

    LoadingBar.update(0.93, 0.96);
    $id("modrinth-loader-ratio")!.innerHTML = "";
    Apex.createRatioBarChart("modrinth-loader-ratio", versionSpecific, "By Loader (Ratio)", `Data Updated ${Utils.readableDate(versionSpecific.lastUpdated)}`, [], colors, 500, false, "mods");

    LoadingBar.update(0.96, 1);
    $id("modrinth-total")!.innerHTML = "";
    Apex.createBarChart("modrinth-total", total, "All Mods", `Data Updated ${Utils.readableDate(total.lastUpdated)}`, [], ['#546E7A'], 500, false, false, "mods");

    LoadingBar.finish();
}