const firstPage = document.currentScript?.dataset.firstpage;

fetch(document.currentScript?.dataset.toc ?? "").then(response => response.json()).then(data => {
    const navLinks = document.querySelector(".nav-links")!;
    data.forEach((page: [string, string], i: number) => {
        const link = page[0];
        const name = page[1];
        const a = document.createElement("a");
        const path = window.location.href.split("#")[0].split("?")[0];

        a.href = firstPage + link;
        a.textContent = name;

        if (path.endsWith(firstPage + link) || path.endsWith(firstPage + link + "/"))
            a.classList.add("active");

        navLinks.appendChild(a);
        if (i < data.length - 1)
            navLinks.appendChild(document.createTextNode(' - '));
    });
});