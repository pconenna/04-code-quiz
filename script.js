var btnStart = document.querySelector("#btnStart");
var answersSection = document.querySelector("#answersSection");
var introSection = document.querySelector("#intro");
var questionH2 = document.querySelector("#questionH2");
var option1 = document.querySelector("#option1");
var option2 = document.querySelector("#option2");
var option3 = document.querySelector("#option3");
var option4 = document.querySelector("#option4");

var questions = {
    question1: {
        question: "Which one of these it not a real programming language?",
        option1: "JavaScript",
        option2: "Python",
        option3: "Bungerscript",
        option4: "C#"
    },
    question2: {
        question: "What language was Minecraft originally written in?",
        option1: "Python",
        option2: "Java",
        option3: "Kotlin",
        option4: "C#"
    }
}
//starts quizby hiding the intro and showing a question
btnStart.addEventListener("click",function(){
    introSection.setAttribute("class","sectionHide");
    answersSection.setAttribute("class","sectionShow")
    questionH2.innerHTML = questions.question1.question;
    option1.textContent = questions.question1.option1;
    option2.textContent = questions.question1.option2;
    option3.textContent = questions.question1.option3;
    option4.textContent = questions.question1.option4;
})