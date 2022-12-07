// TODO: Populate a 512px square div with 16x16 grids using some loop
const CONTAINER_SIZE = 512;

gridContainer = document.querySelector("#grid-container");

let gridNumber = 16;
gridSize = (CONTAINER_SIZE / gridNumber);

// Generates grids inside grid container
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
let penToggle = false;
let penColor = "black";
let recentColor = "black";

// Modifies the grid colors
const grids = document.querySelectorAll(".grid");
grids.forEach((grid) => {
    
    // Toggles pen with click
    grid.addEventListener("mousedown", () => {
        penToggle = !penToggle;
        grid.style.background = penColor;        
    });

    // Change grid color on hover if toggle is active
    grid.addEventListener("mouseover", () => {
        if (penToggle) {
            grid.style.background = penColor;
        };
    });
});

// Features 

// TODO: Add user input form to select how many grids to populate sketchpad (MAX 100)

// TODO: Reset button
const reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
    grids.forEach((grid) => {
        grid.style.background = "white";
    })
})

// TODO: Color Picker
const colorPicker = document.querySelector("#colorpicker");
colorPicker.addEventListener("change", () => {
    penColor = colorPicker.value;
    recentColor = penColor;
})


// TODO: Eraser & Pen
const eraser = document.querySelector("#eraser");
eraser.addEventListener("click", () => {
    recentColor = penColor;
    penColor = "white";
});

const pen = document.querySelector("#pen");
pen.addEventListener("click", () => {
    penColor = recentColor;
})

// TODO: Rainbow mode

// TODO: Shade mode (adds increment amounts of shade)




// Functions


