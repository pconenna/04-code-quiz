var btnStart = document.querySelector("#btnStart");
var answersSection = document.querySelector("#answersSection");
var introSection = document.querySelector("#intro");
var questionH2 = document.querySelector("#questionH2");
var option1 = document.querySelector("#option1");
var option2 = document.querySelector("#option2");
var option3 = document.querySelector("#option3");
var option4 = document.querySelector("#option4");
var scoreDisplay = document.querySelector("#score");
var score = 0;
var highScore = 0;

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


var questionIndex = 0;
//starts quiz by hiding the intro and showing a question
btnStart.addEventListener("click",function(event){
    introSection.setAttribute("class","sectionHide");
    answersSection.setAttribute("class","sectionShow");
    scoreDisplay.innerHTML = score;

    nextQuestion();
})



 function nextQuestion(){
    var currentQuestion = arr[questionIndex]
    questionH2.innerHTML = currentQuestion.question;
   
    option1.setAttribute('value', currentQuestion.choice1);
    option1.textContent = option1.getAttribute('value');

    option2.setAttribute('value', currentQuestion.choice2);
    option2.textContent = option2.getAttribute('value'); 

    option3.setAttribute('value', currentQuestion.choice3);
    option3.textContent = option3.getAttribute('value');
    
    option4.setAttribute('value', currentQuestion.choice4);
    option4.textContent = option4.getAttribute('value'); 
}

function checkAnswer(event){
    var currentQuestion = arr[questionIndex]
    var target = event.target;
    console.log(target.value);
    questionIndex++;

    if(target.value === currentQuestion.rightAnswer){
        score++;
        scoreDisplay.innerHTML = score;

    }
    //check if any questions left
    // if(questionIndex !==7){

    // }else{
        console.log(score);

        nextQuestion();
    // }
 }

 option1.addEventListener("click",checkAnswer)
 option2.addEventListener("click",checkAnswer)
 option3.addEventListener("click",checkAnswer)
 option4.addEventListener("click",checkAnswer)