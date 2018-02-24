'use strict';
let tHeadDir = document.querySelector('thead').dataset.dir;
let targetName = '';


function handleTableClick(event) {
    if (event.target.dataset.propName != targetName) {
        tHeadDir = 1;
    }
    if (tHeadDir === undefined) {
        tHeadDir = 1;
    }
    targetName = event.target.dataset.propName;
    sortTable(event.target.dataset.propName, tHeadDir);
    table.dataset.sortBy = event.target.dataset.propName;
    if (tHeadDir == 1) {
        tHeadDir = -1;
        return;
    }
    if (tHeadDir == -1) {
        tHeadDir = 1;
        return;
    }
}