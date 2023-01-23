const gridContainer = document.getElementById('gridContainer');

function makeGrid() {
    makeColumn();
    makeRow();
}

function makeColumn(numDivs) {
    for (let i = 0; i < numDivs; i++) {
        let column = document.createElement('div');
        column.classList.add('column');
        gridContainer.appendChild(column);
    }
}
function makeRow(numDivs) {
    for (let j = 0; j < numDivs; j++) {
        let row = document.createElement('div');
        row.classList.add('row');
        gridContainer.appendChild(row);
    }
}

makeGrid(64);