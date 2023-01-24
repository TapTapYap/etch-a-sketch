const gridContainer = document.getElementById('gridContainer');
let column = document.getElementsByClassName("column");
let row = document.getElementsByClassName("row");

function makeGrid() {
    makeColumn(16);
    makeRow(16);
}

function makeColumn(columnDivs) {
    for (let i = 0; i < columnDivs; i++) {
        let column = document.createElement('div');
        column.classList.add('column');
        gridContainer.appendChild(column);
    }
}
function makeRow(rowDivs) {
    for (let r = 0; r < column.legnth; r++) {
        for (let j = 0; j < rowDivs; j++) {
            let row = document.createElement('div');
            row.classList.add('row');
            column[j].gridContainer.appendChild(row);
        }
    }
}

makeGrid();