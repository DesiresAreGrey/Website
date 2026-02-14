import { API } from "../utils/api.js";
import { JsonFetch } from "../utils/jsonfetch.js";
import { TimeSpan } from "../utils/timespan.js";
import { Utils } from "../utils/utils.js";

{
    const cached = Utils.getCache<string>("apex-season-banner");
    const card = $("#apex-weapon-stats-card") as HTMLElement;

    if (cached) {
        console.log("Using cached Apex season banner");
        card?.style.setProperty(`--image`, `url('${cached}')`);
        card?.classList.remove("unloaded");
    }
    else {
        console.log("Fetching Apex season banner");
        setImage();
    }

    async function setImage() {
        const imageUrl = (await API.get("misc/apex/season-banner"))?.url;
        card?.style.setProperty(`--image`, `url('${imageUrl}')`);
        card?.classList.remove("unloaded");
        Utils.setCache("apex-season-banner", imageUrl, TimeSpan.fromHours(12).ms);
    }
}

{
    const cached = Utils.getCache<string>("minecraft-update-banner");
    const card = $("#modded-minecraft-versions-card") as HTMLElement;

    if (cached) {
        console.log("Using cached Minecraft banner");
        card?.style.setProperty(`--image`, `url('${cached}')`);
        card?.classList.remove("unloaded");
    }
    else {
        console.log("Fetching Minecraft banner");
        setImage();
    }

    async function setImage() {
        const latest = (await JsonFetch.get("https://launchercontent.mojang.com/v2/games.json")).entries.find((entry: any) => entry.productId === "java");
        
        let imageUrl = latest.heroImage.url;
        if (imageUrl.startsWith("/"))
            imageUrl = `https://launchercontent.mojang.com${imageUrl}`;
        
        card?.style.setProperty(`--image`, `url('${imageUrl}')`);
        card?.classList.remove("unloaded");
        Utils.setCache("minecraft-update-banner", imageUrl, TimeSpan.fromHours(12).ms);
    }
}
