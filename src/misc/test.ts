import * as Utils from "../utils.js"; 

console.log("Test file");

await Utils.loaded();

document.querySelectorAll("p").forEach(p => {
    document.getElementById("output")?.appendHtml(`<p>${p.textContent}</p>`);
});

