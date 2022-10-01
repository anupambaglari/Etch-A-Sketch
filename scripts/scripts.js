"use strict;"
const DEFAULTCOLOR = '#0689d4';


let container = document.querySelector(".container");
let slider = document.querySelector(".slider");
let gridValue = 16;
let bgcolor = DEFAULTCOLOR;

// Clear grid to allow for changes to the grid without adding more grids to the exisiting grids
function clearGrid(){
    container.innerHTML = ""
}

//Color Grid
function colorGrid(color){
    let gridItem = document.querySelectorAll(".grid")
    gridItem.forEach((choice) => {
    choice.addEventListener("mousedown", function () { 
        choice.style.backgroundColor = color
    });
})  
}



// Function to create grid 
function createGrid(size) {
    container.style.setProperty('--grid-rows', size);
    container.style.setProperty('--grid-cols', size);
    for (let i = 0; i < (size*size); i++) {
      const grid = document.createElement("div");
      container.appendChild(grid).className = "grid";
    };
  };
  

// Event Listeners  
function events(){

    // Color Picker
    let colorPicker = document.querySelector(".color-picker")
    colorPicker.addEventListener("change", function(){
        bgcolor = colorPicker.value;
        colorGrid(bgcolor)
    })
    
    // Modes
    let colorMode = document.querySelector(".color")
    let eraser = document.querySelector(".eraser")
    let clear = document.querySelector(".clear")

    // Color Mode
    colorMode.addEventListener("click", function(){
        colorMode.classList.add("active")
        eraser.classList.remove("active")
        colorGrid(bgcolor)
    })
    //Eraser Mode
    eraser.addEventListener("click", function(){
        colorMode.classList.remove("active")
        eraser.classList.add("active")
        colorGrid("#FFFFFF")
    })
    // Clear
    clear.addEventListener("click", function(){
        colorMode.classList.remove("active")
        eraser.classList.remove("active")
        clearGrid()
        createGrid(gridValue)
    })

    // Slider to adjust grid size
    slider.addEventListener("change", function(){
        gridValue = slider.value; 
        document.querySelector(".current-grid-density").textContent = `${gridValue}x${gridValue}`;
        clearGrid()
        createGrid(gridValue)
        colorGrid(bgcolor)
    })
}


window.onload = () => {
    createGrid(gridValue)
    colorGrid(bgcolor)
    events()
}

