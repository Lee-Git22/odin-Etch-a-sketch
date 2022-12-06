// TODO: Populate a 512px square div with 16x16 grids using some loop
const CONTAINER_SIZE = 512;

gridContainer = document.querySelector("#grid-container");

let gridNumber = 16;
gridSize = (CONTAINER_SIZE / gridNumber);

for (i = 0; i < CONTAINER_SIZE; i += gridSize) {
    for (j = 0; j < CONTAINER_SIZE; j += gridSize) {
        grid = document.createElement("div");
        grid.setAttribute("class", "grid");

        // Account for grid border and padding
        grid.style.width = (gridSize - 4 ) + "px";
        grid.style.height = (gridSize - 4) + "px";

        gridContainer.append(grid);
    }

}

// TODO: Add a click and drag effect for inking sketch pad with cursor using event listeners


// TODO: Add user input form to select how many grids to populate sketchpad (MAX 100)