import * as d3 from 'd3';
import cloud from 'd3-cloud';

export function createWordCloud(cloudId: string, data: any[], height: number, textScale: number): void {
    const myWords: cloud.Word[] = data.map(d => ({text: d.text, size: (d.count * textScale)}));

    const containerWidth = $(`#${cloudId}`)!.offsetWidth;
    
    let margin = { top: 10, right: 10, bottom: 10, left: 10 },
        width = containerWidth - margin.left - margin.right,
        contentHeight = height - margin.top - margin.bottom;
        
    let svg = d3.select(`#${cloudId}`).append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", contentHeight + margin.top + margin.bottom)
        .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    let layout = cloud()
        .size([width, contentHeight])
        .words(myWords)
        .padding(5)
        .rotate(() => ~~(Math.random() * 2) * 90)
        .font("Inter")
        .fontSize(d => d.size!)
        .on("end", draw);
    layout.start();
    
    function draw(words: any[]) {
        svg.append("g")
            .attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")")
            .selectAll("text")
                .data(words)
            .enter().append("text")
                .style("font-size", d => d.size)
                .style("fill", "#a47bea")
                .attr("text-anchor", "middle")
                .style("font-family", "Inter")
                .style("font-weight", "800")
                .attr("transform", d => {
                  return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
                })
                .text(d => d.text);
    }
}