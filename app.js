const inputs = document.querySelectorAll(".angle-input")
const checkButton = document.querySelector("#is-traingle-btn")
const output1 = document.querySelector("#output")







checkButton.addEventListener('click', checkTriangle)


function addAngles(angle1,angle2,angle3){
    return angle1 + angle2 + angle3
}
function checkTriangle(){
    let sum = addAngles(Number(inputs[0].value),Number(inputs[1].value),Number(inputs[2].value))

    if (sum === 180) {
        output1.innerText = "Yes it is"
    }

    else {
        output1.innerText = "No its not"
    }
}

