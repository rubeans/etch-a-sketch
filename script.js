// DECLARE VARIABLES
const container = document.querySelector(".container")
const gridBtn = document.querySelectorAll(".grid-btn")
const defaultGrid = 16
const defaultColor = "#000"
const eraser = "e0e0e0"
let currentColor;

// CREATE GRIDS
const createDivs = (cols, rows) => {
    for (let i = 1; i <= (cols * rows); i++) {
        const div = document.createElement("div")
        container.style.gridTemplateColumns = `repeat(${cols}, 1fr)`
        container.style.gridTemplateRows = `repeat(${rows}, 1fr)`
        container.appendChild(div).classList.add("grid-box")
    }
}

// PEN
const pen = () => {
    const gridBox = document.querySelectorAll(".grid-box")
    gridBox.forEach(box => box.addEventListener("mouseover", () => {
        currentColor = defaultColor
        box.style.backgroundColor = `${currentColor}`
    }))
}

// DEFAULT SETTINGS
const defaultSettings = () => {
    createDivs(defaultGrid, defaultGrid)
    pen()
}

// REMOVE GRIDS
const removeDivs = () => {
    const gridBox = document.querySelectorAll(".grid-box")
    gridBox.forEach(box => container.removeChild(box))
}

// CHOOSE THE GRID
gridBtn.forEach(btn => btn.addEventListener("click", () => {
    const customGrid = btn.value
    removeDivs()
    createDivs(customGrid, customGrid)
    pen()
}))

window.onload(defaultSettings())