var btnStart = document.querySelector("#btnStart");
var answersSection = document.querySelector("#answersSection");
var introSection = document.querySelector("#intro");
var doneSection = document.querySelector("#doneSection");
var questionH2 = document.querySelector("#questionH2");
var option1 = document.querySelector("#option1");
var option2 = document.querySelector("#option2");
var option3 = document.querySelector("#option3");
var option4 = document.querySelector("#option4");
var scoreDisplay = document.querySelector("#score");
var timeLeft = document.querySelector("#timeLeft");
var secondsLeft = 60;
var initialsInput = document.querySelector("#initialsInput");
var submitBtn = document.querySelector("#submit");

var score = 0;
var scores = JSON.parse(localStorage.getItem("scores")) ;
if (scores == null){
    scores = [];
    localStorage.setItem("scores", JSON.stringify(scores))
}

var quiz = [{
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
    choice2: "An array",
    choice3: "A word",
    choice4: "A number",
    rightAnswer: "A container to store data"
},{
    question: "Which one of these is not a primitive data type in JavaScript?",
    choice1: "string",
    choice2: "number",
    choice3: "object",
    choice4: "boolean",
    rightAnswer: "object"
}]


var questionIndex = 0;
//starts quiz by hiding the intro and showing a question
btnStart.addEventListener("click",function(event){
    introSection.setAttribute("class","sectionHide");
    countDown();
    answersSection.setAttribute("class","sectionShow");
    nextQuestion();
})



 function nextQuestion(){
    var currentQuestion = quiz[questionIndex]
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
    var currentQuestion = quiz[questionIndex]
    var target = event.target;
    console.log(target.value);
    questionIndex++;

    if(target.value === currentQuestion.rightAnswer){
        score++;

    }else{
        // dedeuct more time if answer is wrong
        secondsLeft -=3;
    }
     console.log(score);
    //check if any questions left
    if(questionIndex === quiz.length){
        endQuiz();
    }else{
        nextQuestion();
    }
 }

 option1.addEventListener("click",checkAnswer)
 option2.addEventListener("click",checkAnswer)
 option3.addEventListener("click",checkAnswer)
 option4.addEventListener("click",checkAnswer)
 submitBtn.addEventListener("click",addScore)

 function countDown(){
    var timerInterval = setInterval(function(){
        secondsLeft--;
        timeLeft.innerHTML = secondsLeft;

        // stop timer if user successfully gets to the end of the quiz
        if(questionIndex === quiz.length){
            clearInterval(timerInterval);
        }

        if(secondsLeft === 0){
            clearInterval(timerInterval);
            endQuiz();
        }
    },1000)
 }



 function endQuiz(){
        answersSection.setAttribute("class","sectionHide");
        doneSection.setAttribute("class", "sectionShow");
        scoreDisplay.innerHTML = score;
 }

 function addScore(){
    console.log(JSON.stringify(scores));
    scores.push({'initials':initialsInput.value,'score':score});
    localStorage.setItem("scores", JSON.stringify(scores))
    console.log(JSON.stringify(scores));
   for(var i = 0; i < scores.length; i++){
    console.log(`${scores[i].initials} ${scores[i].score}`)
   }
   

 }

 function sortScores(){
    scores.sort( (a,b) => b.score - a.score );
    // i got the above line from https://devsheet.com/sort-array-of-objects-by-key-value-in-javascript/
    console.log(JSON.stringify(scores));

 }