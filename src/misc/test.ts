import "../utils.js"; 
//import * as Utils from "../utils.js"; // if i need types/etc i replace the above with this

console.log("Test file");

await loaded();

$$("p").forEach(p => {
    $("#output")?.appendHtml(`<span> ${p.textContent}</span>`);
});

