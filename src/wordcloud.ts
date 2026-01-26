import * as d3 from 'd3';
import cloud from 'd3-cloud';

interface WordCloudData {
    id: string;
    loadTime: number;
}

export class WordCloud {
    static get isMobile() { return window.innerWidth > 768 ? false : true; }

    static #wordclouds: WordCloudData[] = [];

    static get wordclouds() {
        return [...WordCloud.#wordclouds]; 
    }

    static createWordCloud(cloudId: string, data: any[], height: number, textScale: number, color: string): void {
        const start = performance.now();

        if (WordCloud.isMobile)
            textScale *= 0.75;

        const myWords: cloud.Word[] = data.map(d => ({text: d.text, size: (d.count * textScale)}));

        const width = $(`#${cloudId}`)!.offsetWidth;

        let svg = d3.select(`#${cloudId}`).append("svg")
                .attr("width", width)
                .attr("height", height)

        let layout = cloud()
            .size([width, height])
            .words(myWords)
            .padding(5)
            .rotate(() => ~~(Math.random() * 2) * 90)
            .font("Inter")
            .fontSize(d => d.size!)
            .on("end", draw);
        layout.start();

        function draw(words: any[]) {
            svg.append("g")
                .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
            .selectAll("text")
                .data(words)
            .enter().append("text")
                .style("font-size", d => d.size)
                .style("fill", color)
                .attr("text-anchor", "middle")
                .style("font-family", "Inter")
                .style("font-weight", "800")
                .attr("transform", d => "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")")
                .text(d => d.text);
        }
        WordCloud.#wordclouds.push({
            id: cloudId,
            loadTime: (performance.now() - start).roundTo(0),
        });
    }
}