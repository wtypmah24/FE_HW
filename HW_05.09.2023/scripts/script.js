const firstButton = document.querySelector(".first_button")
const firstSquare = document.querySelector(".square_1")

firstButton.addEventListener("click", function(){
    firstSquare.style.height = "100px"
    firstSquare.style.width = "100px"
    firstSquare.style.backgroundColor = "green"
})

const secondButton = document.querySelector(".second_button")
const secondSquare = document.querySelector(".square_2")

secondButton.addEventListener("click", function(){
    secondSquare.style.backgroundColor = "blue"
    console.log(secondSquare.style.backgroundColor);
})

const thirdButton = document.querySelector(".third_button")
const thirdSquare = document.querySelector(".square_3")

thirdButton.addEventListener("click", function(){
    let newWidth = `${thirdSquare.offsetWidth + 40}px`
    let newHeight = `${thirdSquare.offsetHeight + 40}px`
    thirdSquare.style.height = newHeight
    thirdSquare.style.width = newWidth
    // thirdSquare.style.backgroundColor = "black"
})

const fourthButton = document.querySelector(".fourth_button")

fourthButton.addEventListener("click", function(){
    const rootDivElem = document.querySelector(".root")
    const paragraph1 = document.createElement("p")
    const paragraph2 = document.createElement("p")

    paragraph1.innerText = "Hello world!"
    paragraph1.style.color = "blue"

    paragraph2.innerText = "Goodbye world!"
    paragraph2.style.color = "green"

    rootDivElem.append(paragraph1, paragraph2)
})