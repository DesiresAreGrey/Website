import { API } from "../utils/api.js";
import { Utils } from "../utils/utils.js";

{
    const cached = localStorage.getItem("apex-season-banner")?.parseJson();
    const card = document.querySelector("#apex-weapon-stats-card") as HTMLElement;

    if (cached?.url) {
        card?.style.setProperty(`--image`, `url('${cached.url}')`);
        
        // 86400000 is 24hours
        if (Date.now() - cached.time > 86400000) {
            console.log("Apex season banner cache expired, fetching new banner");
            setImage();
        }
        else
            console.log("Using cached Apex season banner");
    }
    else {
        console.log("No cached Apex season banner found, fetching new banner");
        setImage();
    }

    async function setImage() {
        const imageUrl = (await API.fetchJson("misc/apex/season-banner"))?.url;
        card?.style.setProperty(`--image`, `url('${imageUrl}')`);
        localStorage.setItem("apex-season-banner", ({ time: Date.now(), url: imageUrl }).toJson());
    }
}

{
    const cached = localStorage.getItem("minecraft-update-banner")?.parseJson();
    const card = document.querySelector("#modded-minecraft-versions-card") as HTMLElement;

    if (cached?.url) {
        card?.style.setProperty(`--image`, `url('${cached.url}')`);
        
        // 86400000 is 24hours
        if (Date.now() - cached.time > 86400000) {
            console.log("Minecraft banner cache expired, fetching new banner");
            setImage();
        }
        else
            console.log("Using cached Minecraft banner");
    }
    else {
        console.log("No cached Minecraft banner found, fetching new banner");
        setImage();
    }

    async function setImage() {
        const latest = (await Utils.fetchJson("https://launchercontent.mojang.com/v2/games.json")).entries.find((entry: any) => entry.productId === "java");
        
        let imageUrl = latest.heroImage.url;
        if (imageUrl.startsWith("/"))
            imageUrl = `https://launchercontent.mojang.com${imageUrl}`;
        
        card?.style.setProperty(`--image`, `url('${imageUrl}')`);
        localStorage.setItem("minecraft-update-banner", ({ time: Date.now(), url: imageUrl }).toJson());
    }
}
