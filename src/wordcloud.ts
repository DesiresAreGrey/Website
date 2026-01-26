import * as d3 from 'd3';
import cloud from 'd3-cloud';

interface WordCloudData {
    id: string;
    loadTime: number;
    minSize: number;
    maxSize: number;
}

export class WordCloud {
    static get isMobile() { return window.innerWidth > 768 ? false : true; }

    static #wordclouds: WordCloudData[] = [];

    static get wordclouds() {
        return [...WordCloud.#wordclouds]; 
    }

    static async createWordCloud(cloudId: string, data: any[], height: number, minSize: number, maxSize: number, color: string): Promise<void> {
        await document.fonts.load("700 1em 'Bitter'")
        const start = performance.now();

        if (WordCloud.isMobile){
            minSize *= 0.9;
            maxSize *= 0.6;
        }

        const counts = data.map(d => d.count);
        const [minCount, maxCount] = [Math.min(...counts), Math.max(...counts)];

        const fontSize = d3.scaleSqrt()
            .domain([minCount, maxCount])
            .range([minSize, maxSize]);
        
        const myWords: cloud.Word[] = data.map(d => ({text: d.text, size: fontSize(d.count)}));

        const container = $id(cloudId);
        if (!container) return;
        container.innerHTML = "";

        const width = container.offsetWidth;

        const svg = d3.select(container).append("svg")
            .attr("width", width)
            .attr("height", height)

        const layout = cloud()
            .size([width, height])
            .words(myWords)
            .padding(5)
            .rotate(() => ~~(Math.random() * 2) * 90)
            .font("Bitter")
            .fontSize(d => d.size!)
            .on("end", draw);
        layout.start();

        function draw(words: any[]) {
            svg
            .style("overflow", "visible")
            .append("g")
                .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
            .selectAll("text")
                .data(words)
            .enter().append("text")
                .style("font-size", d => d.size + "px")
                .style("fill", color)
                .attr("text-anchor", "middle")
                .style("font-family", "Bitter")
                .style("font-weight", "700")
                .attr("transform", d => "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")")
                .text(d => d.text);
        }
        WordCloud.#wordclouds.push({
            id: cloudId,
            loadTime: (performance.now() - start).roundTo(0),
            minSize: minSize,
            maxSize: maxSize
        });
    }
}