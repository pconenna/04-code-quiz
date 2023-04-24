var btnStart = document.querySelector("#btnStart");
var answersSection = document.querySelector("#answersSection");
var introSection = document.querySelector("#intro");
var questionH2 = document.querySelector("#questionH2");
var option1 = document.querySelector("#option1");
var option2 = document.querySelector("#option2");
var option3 = document.querySelector("#option3");
var option4 = document.querySelector("#option4");

var arr = [{
    question: "Which one of these is not a real programming language?",
    choice1: "JavaScript",
    choice2: "Python",
    choice3: "Bungerscript",
    choice4: "C#",
    rightAnswer: "Bungerscript"
}, {
    question: "What language was Minecraft originally written in?",
    choice1: "Python",
    choice2: "Java",
    choice3: "Kotlin",
    choice4: "C#",
    rightAnswer: "Java"
}, {
    question: "What is a variable?",
    choice1: "A container to store data",
    choice2: "something",
    choice3: "something else",
    choice4: "another wrong answer",
    rightAnswer: "A container to store data"
}]

var quiz = {
    question1: {
        question: "Which one of these is not a real programming language?",
        choice1: "JavaScript",
        choice2: "Python",
        choice3: "Bungerscript",
        choice4: "C#",
        rightAnswer: 3
    },
    question2: {
        question: "What language was Minecraft originally written in?",
        choice1: "Python",
        choice2: "Java",
        choice3: "Kotlin",
        choice4: "C#",
        rightAnswer: 2
    },
    question3: {
        question: "What is a variable?",
        choice1: "A container to store data",
        choice2: "something",
        choice3: "something else",
        choice4: "another wrong answer",
        rightAnswer: 1
    }

}

var questionIndex = 0;
//starts quiz by hiding the intro and showing a question
btnStart.addEventListener("click",function(event){
    introSection.setAttribute("class","sectionHide");
    answersSection.setAttribute("class","sectionShow")
    nextQuestion();
})



 function nextQuestion(){
     
     //  var quizKeys = Object.keys(quiz);
    //  var currentQuestion = quiz[quizKeys[questionIndex]];
    var currentQuestion = arr[questionIndex]
    questionH2.innerHTML = currentQuestion.question;
    option1.textContent = currentQuestion.choice1;
    option2.textContent = currentQuestion.choice2;
    option3.textContent = currentQuestion.choice3;
    option4.textContent = currentQuestion.choice4;
    option1.setAttribute('value', currentQuestion.choice1)
    //checkAnswer(target)
    ; //move this 
}

function checkAnswer(event){
    // var questionKeys = Object.keys(currentQuestion);
    // var rightAnswer = currentQuestion.rightAnswer;
    var target = event.target;
    console.log(target.value);


    questionIndex++
    //check if any questions left
    // if(questionIndex !==7){

    // }else{

        nextQuestion();
    // }
 }
 //dynamic building
 option1.addEventListener("click",checkAnswer)
 option2.addEventListener("click",checkAnswer)
 option3.addEventListener("click",checkAnswer)
 option4.addEventListener("click",checkAnswer)