// TODO: Populate a 512px square div with 16x16 grids using some loop
const CONTAINER_SIZE = 512.00;

gridContainer = document.querySelector("#grid-container");

// Default properties of sketchpad and pen color
let numOfGrids = 16;
let gridSize = CONTAINER_SIZE / numOfGrids;
let penToggle = false;
let penColor = "rgb(0, 0, 0)";
let recentColor = "rgb(0, 0, 0)";

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
function loadPen(penToggle, penColor, penFunction) {
    let grids = document.querySelectorAll(".grid");
    grids.forEach((grid) => {

        // Toggles pen with click
        grid.addEventListener("mousedown", () => {
            penToggle = !penToggle;
            grid.style.background = penFunction(penColor);        
        });

        // Change grid color on hover if toggle is active
        grid.addEventListener("mouseover", () => {
            if (penToggle) {
                grid.style.background = penFunction(penColor);
            };
        });
    });
};


function getRGBArray(hexValue) {
    hexValue = hexValue.slice(1);
    hexArray = hexValue.match(/.{1,2}/g);
    rgbArray = [
        parseInt(hexArray[0], 16),
        parseInt(hexArray[1], 16),
        parseInt(hexArray[2], 16)
    ];
    return rgbArray;
}

function toRGB(rgbArray){
    rgb = `rgb(${rgbArray[0]}, ${rgbArray[1]}, ${rgbArray[2]})`;
    return rgb;
}

function defaultPen(penColor) {
    return penColor;
}

function getRainbow(penColor) {
    rgbArray = [
        Math.floor(Math.random() * 255),
        Math.floor(Math.random() * 255),
        Math.floor(Math.random() * 255)
    ];
    penColor = toRGB(rgbArray);
    return penColor;
}


// Makes default sketpad of size 16 and black pen
generateSketchpad(numOfGrids);
loadPen(penToggle, penColor, defaultPen);


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
        gridNumberInput.value = 64;

    }
    else if (gridNumberInput.value < 8){
        numOfGrids = 8;
        gridNumberInput.value = 8;
    }

    // Clear current sketchpad
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }

    // Populate new sketchpad and pen
    generateSketchpad(numOfGrids);
    loadPen(penToggle, penColor,defaultPen);
})

// Reset button
const reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
    let grids = document.querySelectorAll(".grid");
    grids.forEach((grid) => {
        grid.style.background = "rgb(255, 255, 255)";
    })
})

// Color Picker
const colorPicker = document.querySelector("#colorpicker");
colorPicker.addEventListener("change", () => {
    tmpArray = getRGBArray(colorPicker.value);
    penColor = toRGB(tmpArray);

    recentColor = penColor;
    loadPen(penToggle, penColor, defaultPen);
})


// Eraser 
const eraser = document.querySelector("#eraser");
eraser.addEventListener("click", () => {
    recentColor = penColor;
    penColor = "rgb(255, 255, 255)";
    loadPen(penToggle, penColor, defaultPen);
});

// Pen Toggle
const pen = document.querySelector("#pen");
pen.addEventListener("click", () => {
    penColor = recentColor;
    loadPen(penToggle, penColor, defaultPen);
})

// Rainbow mode
const rainbow = document.querySelector("#rainbow");
rainbow.addEventListener("click", () => {
    recentColor = "rgb(0, 0, 0)";
    loadPen(penToggle, penColor, getRainbow);
})

// Extra Credit Features 
// // TODO: Shade mode (adds increment amounts of shade)
// const shade = document.querySelector("#shade");
// shade.addEventListener("click", () => {
//     recentColor = "rgb(0, 0, 0)";

//     let grids = document.querySelectorAll(".grid");
//     grids.forEach((grid) => {

//         // Toggles pen with click
//         grid.addEventListener("mousedown", () => {
//             penToggle = !penToggle;
//             grid.style.background = (grid.style.background.value * 0.9);        
//         });

//         // Change grid color on hover if toggle is active
//         grid.addEventListener("mouseover", () => {
//             if (penToggle) {
//                 grid.style.background += "rgb(25,25,25)";
//                 console.log(rgb)         
//             };
//         });
//     });
// })
// // TODO: Highlight mode

