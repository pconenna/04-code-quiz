var btnStart = document.querySelector("#btnStart");
var answersSection = document.querySelector("#answersSection");
var introSection = document.querySelector("#intro");

//starts quizby hiding the intro and showing a question
btnStart.addEventListener("click",function(){
    introSection.setAttribute("class","sectionHide");
    answersSection.setAttribute("class","sectionShow")
})