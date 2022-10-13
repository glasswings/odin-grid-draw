/**
 * Remove all nodes from the drawing area.
 */
function wipeoutDrawingArea() {
    const drawingArea = document.querySelector('#drawing-area');
    drawingArea.innerHTML = '';
}

/**
 * Fill the drawing area with nodes.
 * 
 * n: number of rows and columns to generate.
 */
function initDrawingArea(n) {
    if (!(n > 0 && n <= 32)) {
        throw new Error("Drawing area can only have between 0 and 32 row-columns")
    }
    wipeoutDrawingArea();
    const drawingArea = document.querySelector('#drawing-area');
    drawingArea.style['grid-template'] = `repeat(${n}, 1fr)`
    for (let y = 1; y <= n; y++) {
        for (let x = 1; x <= n; x++) {
            const newCell = document.createElement('div');
            newCell.style = `grid-column: ${x}; grid-row: ${y}`;
            setLightOnHover(newCell);
            drawingArea.appendChild(newCell);
        }
    }
}

/**
 * Set an event listener so a node lights up when the mouse enters it
 */
function setLightOnHover(node) {
    node.addEventListener(
        'mouseenter',
        (ev) => {
            node.classList.add('lit');
        },
        { once: true }
    )
}

 /*************
 * Once loaded *
  *************/
initDrawingArea(16);
