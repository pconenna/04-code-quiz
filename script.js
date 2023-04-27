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
var timerH2 = document.querySelector("#timer");
var secondsLeft = 60;
var initialsInput = document.querySelector("#initialsInput");
var submitBtn = document.querySelector("#submit");
var leaderboard = document.querySelector("#leaderboard")
var restartBtn = document.querySelector("#restartBtn");
var clearBtn = document.querySelector("#clearBtn");
var score = 0;
var scores = JSON.parse(localStorage.getItem("scores")) ;
if (scores == null){
    scores = [];
    localStorage.setItem("scores", JSON.stringify(scores))
}

var quiz = [{
    question: "Which one of these is used for databse programming?",
    choice1: "JavaScript",
    choice2: "Python",
    choice3: "SQL",
    choice4: "C#",
    rightAnswer: "SQL"
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
},{
    question: "What encloses the conditional in an if statement?",
    choice1: "square brackets",
    choice2: "parenthesis",
    choice3: "curly braces",
    choice4: "nothing",
    rightAnswer: "parenthesis"
},{
    question: "Which loop is used to iterate of Objects?",
    choice1: "for loop",
    choice2: "while loop",
    choice3: "for each loop",
    choice4: "for in loop",
    rightAnswer: "for in loop"
},{
    question: "Which CSS selector denotes a class named sectionHide?",
    choice1: ".sectionHide",
    choice2: "#sectionHide",
    choice3: "sectionHide",
    choice4: "none of the above",
    rightAnswer: ".sectionHide"
},{
    question: "What does the ++ operator do?",
    choice1: "Increments the value it is attached to.",
    choice2: "Double addition.",
    choice3: "Multiplication",
    choice4: "The ++ is not an operator.",
    rightAnswer: "Increments the value it is attached to."
},{
    question: "Which array method removes the last element from an array?",
    choice1: "push",
    choice2: "pop",
    choice3: "shift",
    choice4: "splice",
    rightAnswer: "pop"
},{
    question: "What does the value 100% set in the statement flex 1 0 100%?",
    choice1: "width",
    choice2: "height",
    choice3: "flex basis",
    choice4: "size",
    rightAnswer: "size"
}]


var questionIndex = 0;
//starts quiz by hiding the intro and showing a question
btnStart.addEventListener("click",function(event){
    introSection.setAttribute("class","sectionHide");
    countDown();
    answersSection.setAttribute("class","sectionShow");
    timerH2.setAttribute("style","display: block;");
    timeLeft.innerHTML = secondsLeft;
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
        timer.setAttribute("class","sectionHide")
        doneSection.setAttribute("class", "sectionShow");
        scoreDisplay.innerHTML = score;
 }

 function addScore(){
    doneSection.setAttribute("class", "sectionHide");
    leaderboard.setAttribute("class", "sectionShow");
    scores.push({'initials':initialsInput.value,'score':score});
    localStorage.setItem("scores", JSON.stringify(scores));
    scores.sort( (a,b) => b.score - a.score );
    // i got the above line from https://devsheet.com/sort-array-of-objects-by-key-value-in-javascript/
    for( var i = 0; i < scores.length; i++){
        var tag1 = document.createElement("h2");
        tag1.setAttribute("class", "scoreH2");
        var tag2 = document.createElement("span");
        tag1.textContent = scores[i].initials+ ": ";
        tag2.textContent = scores[i].score;
        leaderboard.appendChild(tag1);
        tag1.appendChild(tag2);

    }
}

clearBtn.addEventListener("click", clearScores);
restartBtn.addEventListener("click", restartQuiz);

function restartQuiz(){
    leaderboard.setAttribute("class", "sectionHide");
    introSection.setAttribute("class", "sectionShow");
    secondsLeft = 60;
    timeLeft.innerHTML = secondsLeft;
    timerH2.setAttribute("style","display: hidden;");
    score = 0;
    initialsInput.value = null;
    questionIndex = 0;
    scores = JSON.parse(localStorage.getItem("scores")) ;
    if (scores == null){
        scores = [];
        localStorage.setItem("scores", JSON.stringify(scores))
    }

}

function clearScores(){
    localStorage.clear();
    var tags = document.querySelectorAll(".scoreH2");
    console.log(tags);
    for(var i = 0; i < tags.length; i++){
        tags[i].remove();
    }
    scores = JSON.parse(localStorage.getItem("scores")) ;
    if (scores == null){
        scores = [];
        localStorage.setItem("scores", JSON.stringify(scores))
    }
}