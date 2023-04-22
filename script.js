var btnStart = document.querySelector("#btnStart");
var answersSection = document.querySelector("#answersSection");
var introSection = document.querySelector("#intro");
var questionH2 = document.querySelector("#questionH2");
var option1 = document.querySelector("#option1");
var option2 = document.querySelector("#option2");
var option3 = document.querySelector("#option3");
var option4 = document.querySelector("#option4");


var quiz = {
    question1: {
        question: "Which one of these is not a real programming language?",
        choice1: "JavaScript",
        choice2: "Python",
        choice3: "Bungerscript",
        choice4: "C#"
    },
    question2: {
        question: "What language was Minecraft originally written in?",
        choice1: "Python",
        choice2: "Java",
        choice3: "Kotlin",
        choice4: "C#"
    },
    question3: {
        question: "What is a variable?",
        choice1: "A container to store data",
        choice2: "something",
        choice3: "something else",
        choice4: "another wrong answer"
    }

}
var currentQuestion = quiz.question1;
var questionIndex = 0;
//starts quiz by hiding the intro and showing a question
btnStart.addEventListener("click",function(){
    introSection.setAttribute("class","sectionHide");
    answersSection.setAttribute("class","sectionShow")
    nextQuestion();
})
option1.addEventListener("click",nextQuestion);
option2.addEventListener("click",nextQuestion);
option3.addEventListener("click",nextQuestion);
option4.addEventListener("click",nextQuestion);

 function nextQuestion(){
    var quizKeys = Object.keys(quiz);
    currentQuestion = quiz[quizKeys[questionIndex]];
    questionH2.innerHTML = currentQuestion.question;
    option1.textContent = currentQuestion.choice1;
    option2.textContent = currentQuestion.choice2;
    option3.textContent = currentQuestion.choice3;
    option4.textContent = currentQuestion.choice4;
    questionIndex++;
 }
