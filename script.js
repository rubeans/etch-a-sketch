const container = document.querySelector(".container")
const gridBtn = document.querySelectorAll(".grid-btn")
const defaultGrid = 16
const defaultColor = "#000"
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

// REMOVE GRIDS
const removeDivs = () => {
    // TODO 
}

// DEFAULT SETTINGS
const defaultSettings = () => {
    container.addEventListener("mouseenter", ()=>{
        createDivs(defaultGrid, defaultGrid)
        pen()
    })
}

// PEN
const pen = () => {
    const gridBox = document.querySelectorAll(".grid-box")
    gridBox.forEach(box => box.addEventListener("mouseover", () => {
        currentColor = defaultColor
        box.style.backgroundColor = `${currentColor}`
    }))
}

// CHOOSE THE GRID
gridBtn.forEach(btn => btn.addEventListener("click", () => {
    const customGrid = btn.value
    //TODO removeDivs()
    createDivs(customGrid, customGrid)
    pen()
}))



window.onload(defaultSettings)