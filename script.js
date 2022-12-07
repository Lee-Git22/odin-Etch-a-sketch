// TODO: Populate a 512px square div with 16x16 grids using some loop
const CONTAINER_SIZE = 512;

gridContainer = document.querySelector("#grid-container");

// Default properties of sketchpad and pen color
let numOfGrids = 16;
let gridSize = CONTAINER_SIZE / numOfGrids;
let penToggle = false;
let penColor = "black";
let recentColor = "black";

// Generates grids inside grid container
function generateSketchpad (numOfGrids) {
    gridSize = (CONTAINER_SIZE / numOfGrids);

    for (i = 0; i < numOfGrids; i++) {
        for (j = 0; j < numOfGrids; j++) {
        grid = document.createElement("div");
        grid.setAttribute("class", "grid");

        // Account for grid border
        grid.style.width = (gridSize - 4.01) + "px";
        grid.style.height = (gridSize - 4.01) + "px";

        gridContainer.append(grid);
        };
    };
};

// Loads pen for applying color to grids
function loadPen(penToggle, penColor) {
    let grids = document.querySelectorAll(".grid");
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
};

// Makes default sketpad of size 16 and black pen
generateSketchpad(numOfGrids);
loadPen(penToggle, penColor);


// Features 

// TODO: Add user input form to select how many grids to populate sketchpad (MAX 64)
const gridNumberInput = document.querySelector("#gridNumber-input");
const sketchPadRequest = document.querySelector("#new-pad");

// Takes user input sketchpad size from from
gridNumberInput.addEventListener("change", () => {
    numOfGrids = gridNumberInput.value;    
})

// Validates size and generates new sketchpad
sketchPadRequest.addEventListener("click", () => {
    if (gridNumberInput.value > 64){
        numOfGrids = 64;
    }
    else if (gridNumberInput.value < 8){
        numOfGrids = 8;
    }



    // Clear current sketchpad
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }

    // Populate new sketchpad and pen
    generateSketchpad(numOfGrids);
    loadPen(penToggle, penColor);
})

// Reset button
const reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
    let grids = document.querySelectorAll(".grid");
    grids.forEach((grid) => {
        grid.style.background = "white";
    })
})

// Color Picker
const colorPicker = document.querySelector("#colorpicker");
colorPicker.addEventListener("change", () => {
    penColor = colorPicker.value;
    recentColor = penColor;
    loadPen(penToggle, penColor);
})


// Eraser & Pen
const eraser = document.querySelector("#eraser");
eraser.addEventListener("click", () => {
    recentColor = penColor;
    penColor = "white";
    loadPen(penToggle, penColor);
});

const pen = document.querySelector("#pen");
pen.addEventListener("click", () => {
    penColor = recentColor;
    loadPen(penToggle, penColor);
})

// TODO: Rainbow mode

// TODO: Shade mode (adds increment amounts of shade)



