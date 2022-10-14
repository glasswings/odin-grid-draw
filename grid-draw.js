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

 /**********************
 * Control bar behavior *
  **********************/

/**
 * Register validation behaviors of grid-size input element
 */
registerGridSizeInputValidation(document.querySelector('#grid-size'));
function registerGridSizeInputValidation(gridSizeInput) {
    const gsi = gridSizeInput;
    const min = 4;
    const max = 100;
    const def = 16;
    gsi.min = min;
    gsi.max = max;
    gsi.value = def;
    gsi.addEventListener(
        'blur',
        (ev) => {
            console.log("Blur!")
            const v = gsi.value;
            if (Number.isNaN(v))
                gsi.value = def;
            else if (v < min)
                gsi.value = min;
            else if (v > max)
                gsi.value = max;
        }
    );
}

/**
 * Register clear button behaviors
 */
document.querySelector('#clear').addEventListener(
    'click',
    (ev) =>
{
    const gridSizeInput = document.querySelector('#grid-size');
    initDrawingArea(gridSizeInput.value)
});

 /*************
 * Once loaded *
  *************/
initDrawingArea(16);
