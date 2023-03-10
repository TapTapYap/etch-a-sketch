/* Variables for HTML elements, building blocks of the grid */

const gridContainer = document.getElementById('gridContainer');
let column = document.getElementsByClassName("column");
let row = document.getElementsByClassName("row");

/* Buttons for changing color, receiving input for size of grid and resetting the grid */

let blackBtn = document.querySelector(".blackBtn");
blackBtn.addEventListener('click', () => setCurrentColor('black'));

let rainbowBtn = document.querySelector(".rainbowBtn");
rainbowBtn.addEventListener('click', () => setCurrentColor('rainbow'));

let resetBtn = document.querySelector('.resetBtn');
resetBtn.addEventListener('click', resetGrid);

let sizeBtn = document.querySelector('.sizeBtn');
sizeBtn.addEventListener('click', getSize);

/* Function that sets the color being chosen by the user */

const DEFAULT_COLOR = '#0a0a0a';
let currentColor = DEFAULT_COLOR;

function setCurrentColor(newColor) {
    activateBtn(newColor);
    currentColor = newColor;
}

/* Mouse events to determine if the grids blocks should change color */

let mouseDown = false;
document.body.onmousedown = function() {
    mouseDown = true;
}
document.body.onmouseup = function() {
    mouseDown = false;
}

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
    if (mouseDown && currentColor === 'rainbow') {
        let color1 = Math.floor(Math.random() * 256);
        let color2 = Math.floor(Math.random() * 256);
        let color3 = Math.floor(Math.random() * 256);

        e.target.style.backgroundColor = `rgb(${color1},${color2},${color3})`;
    } else if (mouseDown && currentColor === 'black') {
        e.target.style.backgroundColor = 'black';
    } else if (mouseDown) {
        e.target.style.backgroundColor = currentColor;
    }
}

/* Prompt user to input what size they want the grid to be. */

function getSize() {
    gridContainer.innerHTML = "";
    let size = prompt('How big do you want the grid to be? ');

    if (size > 100) {
        alert("Size can not be greater than 100");
        getSize();
    }   else {
        makeGrid(size, size);
    }
}

/* Rests the grid */

function resetGrid() {
    gridContainer.innerHTML = "";
    makeGrid(16, 16);
}

/* adds or removes and 'active' status based upon whether the buttons have been clicked */

function activateBtn(newColor) {
    if (currentColor === 'rainbow') {
        rainbowBtn.classList.remove('active');
    }   else if (currentColor === 'black') {
        blackBtn.classList.remove('active');
    }

    if (newColor === 'rainbow') {
        rainbowBtn.classList.add('active');
    }   else if (newColor === 'black') {
        blackBtn.classList.add('active');
    }
}

/* Call upon the makeGrid function */

makeGrid(32, 32);