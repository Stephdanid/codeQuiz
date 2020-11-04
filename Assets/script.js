let quizQuestions = [{
    q: "What is not a primitive data types?",
    answers: ["strings", "booleans", "alerts", "undefined"],
    correct: "alerts"
}]

let startbtn = document.querySelector("#startbtn");
let startHtmldiv = document.querySelector(".startHtml");
let questionsdiv = document.querySelector(".questionsdiv");

startbtn.addEventListener("click", function() {
    startHtmldiv.style.display = "none";
    questionsdiv.style.display = "block";
    setTime()
})
let Timeleft = 60

function setTime() {
    const timerInterval = setInterval(function() {
        console.log(Timeleft)
        Timeleft--
        if (Timeleft === 0) {
            clearInterval(timerInterval)
        }
    }, 1000)
}