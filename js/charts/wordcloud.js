var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _a, _WordCloud_wordclouds;
import * as d3 from 'd3';
import cloud from 'd3-cloud';
export class WordCloud {
    static get isMobile() { return window.innerWidth > 768 ? false : true; }
    static get wordclouds() {
        return [...__classPrivateFieldGet(_a, _a, "f", _WordCloud_wordclouds)];
    }
    static createWordCloud(cloudId, data, height, minSize, maxSize, padding, color, scaleLinear) {
        const start = performance.now();
        if (_a.isMobile) {
            minSize *= 0.85;
            maxSize *= 0.5;
        }
        const counts = data.map(d => d.count);
        const [minCount, maxCount] = [Math.min(...counts), Math.max(...counts)];
        const rotate = false;
        let fontSize = d3.scaleSqrt()
            .domain([minCount, maxCount])
            .range([minSize, maxSize]);
        if (scaleLinear) {
            fontSize = d3.scaleLinear()
                .domain([minCount, maxCount])
                .range([minSize, maxSize]);
        }
        const opacity = d3.scaleLog()
            .domain([minCount, maxCount])
            .range([0.69, 1]);
        const myWords = data.sort((a, b) => b.count - a.count).map((d, i) => ({ text: d.text, count: d.count, size: fontSize(d.count), index: i }));
        const container = $id(cloudId);
        if (!container)
            return;
        container.innerHTML = "";
        const tooltip = document.createElement('div');
        tooltip.className = 'wordcloud-tooltip';
        container.appendChild(tooltip);
        const width = container.offsetWidth;
        const svg = d3.select(container).append("svg")
            .attr("width", width)
            .attr("height", height);
        const layout = cloud()
            .size([width, height])
            .words(myWords)
            .padding(padding)
            .rotate(rotate ? (_, index) => index == 0 ? 0 : ~~(Math.random() * 2) * 90 : 0)
            .font("Bitter")
            .fontSize(d => d.size)
            .on("end", draw);
        layout.start();
        function draw(words) {
            svg
                .style("overflow", "visible")
                .append("g")
                .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
                .selectAll("text")
                .data(words)
                .enter().append("text")
                .classed("wordcloud-word", true)
                .classed("noselect", true)
                .style("font-size", d => d.size + "px")
                .style("--color", color)
                .attr("text-anchor", "middle")
                .style("font-family", "Bitter")
                .style("font-weight", "700")
                .style("--opacity", d => opacity(d.count).toString())
                .attr("transform", d => "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")")
                .attr("data-word", d => d.text)
                .attr("data-count", d => d.count)
                .attr("data-index", d => d.index)
                .text(d => d.text);
        }
        container.$$('svg .wordcloud-word').forEach(wordEl => {
            wordEl.addEventListener('mouseenter', () => {
                const word = wordEl.dataset.word;
                const count = wordEl.dataset.count;
                const place = Number(wordEl.dataset.index) + 1;
                tooltip.innerHTML = `
                    <div class="word">${word}</div>
                    <span class="place">#${place}</span> <span class="count">(${count} respondents)</span>
                    `;
                if (!tooltip.classList.contains('active')) {
                    tooltip.classList.add('active');
                }
                const wordRect = wordEl.getBoundingClientRect();
                const containerRect = tooltip.offsetParent?.getBoundingClientRect() ?? container.getBoundingClientRect();
                let x = wordRect.right - containerRect.left;
                let y = wordRect.top - tooltip.offsetHeight - containerRect.top;
                if (x + tooltip.offsetWidth > containerRect.width)
                    x = (wordRect.left - containerRect.left) - tooltip.offsetWidth;
                if (wordRect.top - tooltip.offsetHeight - 15 < 0)
                    y = wordRect.bottom - containerRect.top;
                x = Math.max(0, x);
                tooltip.style.left = `${x}px`;
                tooltip.style.top = `${y}px`;
            });
            wordEl.addEventListener('mouseleave', () => {
                tooltip.classList.remove('active');
            });
        });
        __classPrivateFieldGet(_a, _a, "f", _WordCloud_wordclouds).push({
            id: cloudId,
            loadTime: (performance.now() - start).roundTo(0),
            minSize: minSize,
            maxSize: maxSize
        });
    }
}
_a = WordCloud;
_WordCloud_wordclouds = { value: [] };
