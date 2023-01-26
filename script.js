const gridContainer = document.getElementById('gridContainer');
let column = document.getElementsByClassName("column");
let row = document.getElementsByClassName("row");

/* Buttons for changing color and resetting the grid */

let blackBtn = document.querySelector(".blackBtn");
let rainbowBtn = document.querySelector(".rainbowBtn");

/* Mouse events to determine if the grids blocks should change color */

let mouseDown = false;
document.body.onmousedown = function() {
    mouseDown = true;
}
document.body.onmouseup = function() {
    mouseDown = false;
}

/* Prompt user to input what size they want the grid to be. */



/* Function to construct the grid. */

function makeGrid(rowDivs, columnDivs) {
    for (let r = 0; r < columnDivs; r++) {
        let column = document.createElement('div');
        column.classList.add('column');
        for (let j = 0; j < rowDivs; j++) {
            let row = document.createElement('div');
            row.addEventListener('mousedown', changeColor);
            row.addEventListener('mouseover', changeColor);
            row.classList.add('row');
            column.appendChild(row);
        }
        gridContainer.appendChild(column);
    }
}

/* Function used to determine which color to display */

function changeColor(e) {
    if (mouseDown) {
        let color1 = Math.floor(Math.random() * 256);
        let color2 = Math.floor(Math.random() * 256);
        let color3 = Math.floor(Math.random() * 256);

        e.target.style.backgroundColor = `rgb(${color1},${color2},${color3})`;
    }
}

function getSize(e) {
    if (e > 100) {
        alert("Size can not be greater than 100")
    }
}

/* Call upon the makeGrid function */

makeGrid(50, 50);