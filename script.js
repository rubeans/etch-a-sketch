const container = document.querySelector(".container")
const gridBtn = document.querySelectorAll(".grid-btn")

const createDivs = (cols, rows) => {
    for (let i = 1; i <= (cols * rows); i++) {
        const div = document.createElement("div")
        container.style.gridTemplateColumns = `repeat(${cols}, 1fr)`
        container.style.gridTemplateRows = `repeat(${rows}, 1fr)`
        container.appendChild(div).classList.add("square")
    }
}
const getScale = () => {
    for (let i = 0; i < gridBtn.length; i++) {
        gridBtn[i].addEventListener("click", (e) => {
            // console.log(e.target.attributes.class.nodeValue)
            if (e.target.attributes.class.nodeValue == "sixteen grid-btn") {
                createDivs(16, 16)
            } else if (e.target.attributes.class.nodeValue == "thirty-two grid-btn") {
                createDivs(32, 32)
            } else if (e.target.attributes.class.nodeValue == "sixty-four grid-btn") {
                createDivs(64, 64)
            } else {
                createDivs(128, 128)
            }
        })
    }
}
getScale()

//TODO - make 16x16 the default scale when load the page