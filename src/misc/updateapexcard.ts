import { Utils } from "../utils/utils.js"; 

const cached = localStorage.getItem("apex-season-banner")?.parseJson();
const card = document.querySelector("#apex-weapon-stats-card") as HTMLElement;

if (cached?.url) {
    card?.style.setProperty(`--image`, `url('${cached.url}')`);
    
    // 86400000 is 24hours
    if (Date.now() - cached.time > 86400000) {
        setImage();
    }
}
else {
    setImage();
}

async function setImage() {
    const imageUrl = (await Utils.fetchJson("https://desiresapi.vercel.app/api/apex/season-banner"))?.url;
    card?.style.setProperty(`--image`, `url('${imageUrl}')`);
    localStorage.setItem("apex-season-banner", ({ time: Date.now(), url: imageUrl }).toJson());
}