const inputs = document.querySelectorAll(".angle-input")
const checkButton = document.querySelector("#is-traingle-btn")
const output1 = document.querySelector("#output")







checkButton.addEventListener('click', checkTriangle)


function addAngles(angle1,angle2,angle3){
    return angle1 + angle2 + angle3
}
function checkTriangle(){

    let angle1 = Number(inputs[0].value)
    let angle2 = Number(inputs[1].value)
    let angle3 = Number(inputs[2].value)
    if(angle1 <= 0 || angle2 <= 0 || angle3 <= 0){
        output1.innerText = "Enter valid inputs which are non-zero positive integers"
    } else {
        let sum = addAngles(angle1, angle2, angle3)



        if (sum === 180) {
            output1.innerText = "It makes a triangle"
        }

        else {
            output1.innerText = "No it doesnt make a triangle. It is " + Math.abs(180 - sum) +" angles away"
        }
    }
    
}

