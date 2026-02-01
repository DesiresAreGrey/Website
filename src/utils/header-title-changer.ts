const newTitle = document.currentScript?.dataset.title;
if (newTitle) {
    const headerTitleSpan = document.querySelector('.md-header__inner.md-grid .md-header__title .md-header__topic[data-md-component="header-topic"] > span');
    if (headerTitleSpan)
        headerTitleSpan.textContent = newTitle;
}