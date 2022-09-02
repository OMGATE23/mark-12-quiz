const sideInputs = document.querySelectorAll(".side-input")
const areaButton = document.querySelector("#area-button")
const outputDiv = document.querySelector("#output")

areaButton.addEventListener('click', clickHandler)

function clickHandler(){
    sideOne = Number(sideInputs[0].value)
    sideTwo = Number(sideInputs[1].value)
    
    if(sideOne < 0 || sideTwo < 0){
        outputDiv.innerText = "Input valid inputs"
    } else {
        let area = sideOne*sideTwo*0.5

        outputDiv.innerText = "Area of the triangle " + area.toFixed(2)
    }

}