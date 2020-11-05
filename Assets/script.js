// questions array that we display on our hidden html after click event
let quizQuestions = [{
            q1: "What is not a primitive data types?",
            answers: ["strings", "booleans", "alerts", "undefined"],
            correct: "alerts"
        },
        {
            q2: "What is an example of a Javascript Object?",
            answers: ["let cat = {animal:'cat', type:'orange tabby', name:'Nibble'}",
                "let cat = 'Nibble'", "let nibble = true", "let catAge = 2"
            ],
            correct: "let cat = {animal:'cat', type:'orange tabby', name:'Nibble'}"
        }
    ]
    //html on page load
let startbtn = document.querySelector("#startbtn");
let startHtmldiv = document.querySelector(".startHtml");
// variables to our questions div and buttons
let questionsdiv = document.querySelector(".questionsdiv");
let questionsDivH1 = document.querySelector(".qDisplay")
let choice1Btn = document.querySelector("#choice1");
let choice2Btn = document.querySelector("#choice2");
let choice3Btn = document.querySelector("#choice3");
let choice4Btn = document.querySelector("#choice4");

// this is our onclick event to show our questions div and setting our timer after click and to display our 1st question and answers
startbtn.addEventListener("click", function() {
    startHtmldiv.style.display = "none";
    questionsdiv.style.display = "block";
    setTime()
    setQuestion()
})

// variable to begin our timer with and hooking into our h3 class of timer to put our text timer in
let timerH3 = document.querySelector(".timer")
let Timeleft = 60

// function to decrement our timer/clear our timer/get our timer on screen
function setTime() {
    const timerInterval = setInterval(function() {

        Timeleft--

        timerH3.textContent = Timeleft;

        if (Timeleft === 0) {
            clearInterval(timerInterval)
        }
    }, 1000)
}

// now for our function to to display our question
// okay pscode I want this function to grab my global function to access my h1 on my index.html
// to display the question and then add my event listener to my buttons to also disply my  
function setQuestion() {
    questionsDivH1.textContent = quizQuestions


}