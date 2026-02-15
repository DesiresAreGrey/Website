import { Utils } from "../utils/utils.js";
console.log("Test file");
await Utils.pageLoaded();
$$("p").forEach(p => $("#output")?.appendHtml(`<span> ${p.textContent}</span>`));
const unitInput = $("#unit-input");
unitInput.$("#value").addEventListener("input", update);
unitInput.$("#unit").addEventListener("change", update);
update();
function update() {
    const num = Number(unitInput.$("#value").value);
    const unit = unitInput.$("#unit").value;
    unitInput.$("#output").textContent = `${num.toFeetInches(1, unit)} - ${num.asCm(unit).roundTo(1)} cm`;
}
