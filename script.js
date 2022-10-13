const container = document.querySelector(".container")
const gridBtn = document.querySelectorAll(".grid-btn")
const defaultGrid = 16
const defaultColor = "#000"
let currentColor;

// CREATE THE GRIDS
const createDivs = (cols, rows) => {
    for (let i = 1; i <= (cols * rows); i++) {
        const div = document.createElement("div")
        container.style.gridTemplateColumns = `repeat(${cols}, 1fr)`
        container.style.gridTemplateRows = `repeat(${rows}, 1fr)`
        container.appendChild(div).classList.add("grid-box")
    }
}

// REMOVE THE GRIDS
const removeDivs = () => {
    // TODO 
}

// DEFAULT SETTINGS
const defaultSettings = () => {
    createDivs(defaultGrid, defaultGrid)
    //TODO - make 16x16 the default scale when load the page
    // TODO - NEED TO FINISH
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