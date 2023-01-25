const gridContainer = document.getElementById('gridContainer');
let column = document.getElementsByClassName("column");
let row = document.getElementsByClassName("row");

let blackBtn = document.querySelector(".blackBtn");
let rainbowBtn = document.querySelector(".rainbowBtn");

function makeGrid(rowDivs, columnDivs) {
    for (let r = 0; r < columnDivs; r++) {
        let column = document.createElement('div');
        column.classList.add('column');
        for (let j = 0; j < rowDivs; j++) {
            let row = document.createElement('div');
            row.classList.add('row');
            column.appendChild(row);
        }
        gridContainer.appendChild(column);
    }
    document.body.appendChild(gridContainer);
}

makeGrid(64, 64);