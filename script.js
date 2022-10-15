// DECLARE VARIABLES
const container = document.querySelector(".container")
const gridBtn = document.querySelectorAll(".grid-btn")
const defaultGrid = 16
const defaultColor = "#000"
const eraserColor = "#e0e0e0"

// CREATE GRID
const createDivs = (cols, rows) => {
    for (let i = 1; i <= (cols * rows); i++) {
        const div = document.createElement("div")
        container.style.gridTemplateColumns = `repeat(${cols}, 1fr)`
        container.style.gridTemplateRows = `repeat(${rows}, 1fr)`
        container.appendChild(div).classList.add("grid-box")
    }
}

// REMOVE GRID
const removeDivs = () => {
    const gridBox = document.querySelectorAll(".grid-box")
    gridBox.forEach(box => container.removeChild(box))
}

// CHOOSE GRID
gridBtn.forEach(btn => btn.addEventListener("click", () => {
    const customGrid = btn.value
    removeDivs()
    createDivs(customGrid, customGrid)
    defaultPenColor()
}))

// DEFAULT PEN COLOR
const defaultPenColor = () => {
    const gridBox = document.querySelectorAll(".grid-box")
    gridBox.forEach(box => box.addEventListener("mouseover", () => {
        box.style.backgroundColor = `${defaultColor}`
    }))
}

// DEFAULT SETTINGS
const defaultSettings = () => {
    createDivs(defaultGrid, defaultGrid)
    defaultPenColor()
}

// GENERATE RANDOM COLORS
function randomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

// RGB
const rgb = () => {
    const gridBox = document.querySelectorAll(".grid-box")
    gridBox.forEach(box => box.addEventListener("mouseover", () => {
        box.style.backgroundColor = `${randomColor()}`
    }))
}

// ERASER
const eraser = () => {
    const gridBox = document.querySelectorAll(".grid-box")
    gridBox.forEach(box => box.addEventListener("mouseover", () => {
        box.style.backgroundColor = `${eraserColor}`
    }))
}

// RESET GRID
    const reset = () =>{
        removeDivs()
        if(container.style.gridTemplateColumns == "repeat(16, 1fr)" && container.style.gridTemplateRows == "repeat(16, 1fr)" ){
            createDivs(defaultGrid, defaultGrid)
        } else if(container.style.gridTemplateColumns == "repeat(32, 1fr)" && container.style.gridTemplateRows == "repeat(32, 1fr)" ){
            createDivs(32, 32)
        } else if(container.style.gridTemplateColumns == "repeat(64, 1fr)" && container.style.gridTemplateRows == "repeat(64, 1fr)" ){
            createDivs(64, 64)
        } else{
            createDivs(128, 128)
        }
        defaultPenColor()
    }