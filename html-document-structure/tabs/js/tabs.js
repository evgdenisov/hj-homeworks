'use strict';

let tabsNav = document.getElementsByClassName('tabs-nav')[0];
let articles = document.getElementsByClassName('tabs-content')[0].children;

function hidder (article) {
    article.classList.add('hidden');
}

function deactive (tab) {
    tab.classList.remove('ui-tabs-active');
}

for (let article of articles) {
    let tab = tabsNav.children[0].cloneNode(true);
    tabsNav.appendChild(tab);
    tab.firstElementChild.textContent = article.dataset.tabTitle;
    tab.firstElementChild.classList.add(article.dataset.tabIcon);
    tab.addEventListener('click', () => {
        Array.from(articles).forEach(hidder);
        Array.from(tabsNav.children).forEach(deactive);
        article.classList.remove('hidden');
        tab.classList.add('ui-tabs-active');
    })
}

tabsNav.removeChild(tabsNav.children[0]);
tabsNav.children[0].classList.add('ui-tabs-active');