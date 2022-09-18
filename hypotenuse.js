const sideInputs = document.querySelectorAll(".side-input")
const submitButton = document.querySelector("#hypotenuse-button")
const outputE3 = document.querySelector("#output")

submitButton.addEventListener('click', calculateHypotenuse)

function calculateHypotenuse(){
    sideOne = Number(sideInputs[0].value);
    sideTwo = Number(sideInputs[1].value);


    if (sideOne <= 0 || sideTwo <= 0){
        outputE3.innerText = "Enter Valid Inputs"
    } else {
        sideOneSquared = Math.pow(sideOne, 2)
        sideTwoSquared = Math.pow(sideTwo, 2)

        hypotenuseLength = (Math.sqrt((sideOneSquared + sideTwoSquared))).toFixed(2)

        outputE3.innerText = "Hypotenuse length = " + hypotenuseLength + " units"
    }

}