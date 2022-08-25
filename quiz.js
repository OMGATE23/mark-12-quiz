const quizForm = document.querySelector(".quiz-form")
const submitButton = document.querySelector("#submit-answer-button")
const outputE2 = document.querySelector("#output")

const correctAnswers = ["90°", "right angled","60°","Isosceles Triangle","Equilateral Triangle","Scalene Triangle", "40°", "80°", "60°", "more than 90°"]

submitButton.addEventListener('click', calculateScore)

function calculateScore(e){
    e.preventDefault()
    let score = 0;
    let i = 0;
    const formResults = new FormData(quizForm)
    // console.log(formResults)

    for (let entry of formResults.values()){
        if (entry == correctAnswers[i]){
            score = score +1
        }
        i++
    }

    console.log(score)
    
    outputE2.innerText = "Score: " + score
}

function onTheClick(){
    console.log("on click")
}

