import { Apex } from "../charts/apex.js";
import { API } from "../utils/api.js";
import { LoadingBar } from "../utils/loadingbar.js";
import { Utils } from "../utils/utils.js";

const versions = [
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

loadCharts();

async function loadCharts() {
    LoadingBar.start();
    LoadingBar.update(0, 0.5);

    const versionSpecific = await API.post("misc/minecraft/modded-modrinth-versions", {
        loaders: ["Fabric", "Quilt", "NeoForge", "Forge"],
        versions: versions
    });

    LoadingBar.update(0.5, 0.9);

    const total = await API.post("misc/minecraft/modded-modrinth-versions", {
        loaders: ["All"],
        versions: versions
    });


    const colors = ['rgba(236, 186, 149, 1)', 'rgba(170, 85, 255, 1)', 'rgb(216, 130, 49)', 'rgba(79, 120, 202, 1)'];

    LoadingBar.update(0.9, 0.93);
    Apex.createBarChart("modrinth-loader", versionSpecific, "By Loader", `Data Updated ${Utils.readableDate(versionSpecific.lastUpdated)}`, [], colors, 500, false, false, "mods");

    LoadingBar.update(0.93, 0.96);
    Apex.createRatioBarChart("modrinth-loader-ratio", versionSpecific, "By Loader (Ratio)", `Data Updated ${Utils.readableDate(versionSpecific.lastUpdated)}`, [], colors, 500, false, "mods");

    LoadingBar.update(0.96, 1);
    Apex.createBarChart("modrinth-total", total, "All Mods", `Data Updated ${Utils.readableDate(total.lastUpdated)}`, [], ['#546E7A'], 500, false, false, "mods");

    LoadingBar.finish();
}