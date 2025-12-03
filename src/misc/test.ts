import "../utils.js"; 

console.log("Test file");

await loaded();

// repeating test

$$("p").forEach(p => $("#output")?.appendHtml(`<span> ${p.textContent}</span>`));

// unit input test

const unitInput = $("#unit-input")!;

unitInput.$("#value")!.addEventListener("input", update);
unitInput.$("#unit")!.addEventListener("change", update);
update();

function update() {
    const num = Number((unitInput.$("#value") as HTMLInputElement).value);
    const unit = (unitInput.$("#unit") as HTMLSelectElement).value as LengthUnit;
    
    unitInput!.$("#output")!.textContent = `${num.toFeetInches(1, unit)} - ${num.asCm(unit).roundTo(1)} cm`;
}