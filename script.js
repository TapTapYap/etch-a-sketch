const gridContainer = document.getElementById('gridContainer');

function makeGrid(numDivs) {
    for (let i = 0; i < numDivs; i++) {
        let block = document.createElement('div');
        block.classList.add('block');
        gridContainer.appendChild('block');
    }
}

makeGrid(64);