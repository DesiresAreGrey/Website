import { Utils } from "../utils/utils.js"; 

const cached = localStorage.getItem("apex-season-banner")?.parseJson();
const card = document.querySelector("#apex-weapon-stats-card") as HTMLElement;
console.log(cached.url);

if (card && cached?.url) {
    card.style.setProperty(`--image`, `url('${cached.url}')`);
    console.log(card.style);
    
    // 86400000 is 24hours
    if (Date.now() - cached.time > 86400000) {
        console.log(Date.now() - cached.time);
        const imageUrl = (await Utils.fetchJson("https://desiresapi.vercel.app/api/apex/season-banner"))?.url;
        card.style.setProperty(`--image`, `url('${imageUrl}')`);
        localStorage.setItem("apex-season-banner", ({ time: Date.now(), url: imageUrl }).toJson());
    }
}