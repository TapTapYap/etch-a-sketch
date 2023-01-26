const gridContainer = document.getElementById('gridContainer');
let column = document.getElementsByClassName("column");
let row = document.getElementsByClassName("row");

/* Buttons for changing color and resetting the grid */

let blackBtn = document.querySelector(".blackBtn");
let rainbowBtn = document.querySelector(".rainbowBtn");

/* Mouse events */

let mouseDown = false;
document.body.onmousedown = function() {
    mouseDown = true;
}
document.body.onmouseup = function() {
    mouseDown = false;
}

function makeGrid(rowDivs, columnDivs) {
    for (let r = 0; r < columnDivs; r++) {
        let column = document.createElement('div');
        column.classList.add('column');
        for (let j = 0; j < rowDivs; j++) {
            let row = document.createElement('div');
            row.addEventListener('mousedown', changeColor)
            row.classList.add('row');
            column.appendChild(row);
        }
        gridContainer.appendChild(column);
    }
}

function changeColor(e) {
    if (mouseDown) {
        let color1 = Math.floor(Math.random() * 256);
        let color2 = Math.floor(Math.random() * 256);
        let color3 = Math.floor(Math.random() * 256);

        e.target.style.backgroundColor = `rgb(${color1},${color2},${color3})`;
    }
}
makeGrid(64, 64);