const container = document.querySelector(".container")

const createDivs = (cols, rows) => {
    for (let i = 1; i <= (cols * rows); i++) {
        const div = document.createElement("div")
        container.style.gridTemplateColumns = `repeat(${cols}, 1fr)`
        container.style.gridTemplateRows = `repeat(${rows}, 1fr)`
        container.appendChild(div).classList.add("square")
    }
}

createDivs(100, 100)