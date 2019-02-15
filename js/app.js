
function populate(){
if(quiz.isEnded()){
 
    showScore();

}else{
     //get the element
    var element = document.getElementById('question'); 
    element.innerHTML  = quiz.getIndex().text;
    //choices
    var choices  = quiz.getIndex().choice;
    for(i = 0;i<choices.length;i++){
         var el = document.querySelector('.option'+i );
         el.innerHTML = choices[i];
         guess('btn'+i,choices[i])  
         
    }
    showProgress();

}

}
function guess(id,guess){
    var button = document.getElementById(id);
    button.onclick=function(){
        quiz.guess(guess);
        populate();
    }
}
function showProgress(){

var current = quiz.questionIndex + 1;
var element = document.querySelector('.progress');
element.innerHTML = 'question' +current+'of ' +quiz.questions.length;

}

function showScore(){
    var element = document.getElementById('container');
    element.style.display = 'none';
    var element = document.querySelector('.progress');
    element.innerHTML = '';
    document.querySelector('.result').style.display = 'block';

var score = document.querySelector('.score');
score.textContent = quiz.score;
var btn = document.querySelector('.restart');
btn.addEventListener('click',restart)
   
}
function restart(){
    window.location.reload();
}



////questions
var questions = [
    new Question('What is the Full Form Of HTML?',["Hyper Text Markup Language",
    "Hidden text Markup Language",
    "Hyper Text Makeup Language",
    "Hyper Text Module Language"],'Hyper Text Markup Language'),
    new Question('What is the Full Form Of CSS?',["Common Style Sheet",
    "Casual Style Sheet",
    "Computer Spread Sheet",
    "Cascading Style Sheet"],'Cascading Style Sheet'),
    new Question('What is the Full Form Of JS?',["Javascript",
    "JumboScript",
    "Jumbotron",
    "Java"],'Javascript'),
    new Question('NODEjs is build on which engine?',["Nodejs",
    "V4",
    "Firefox v7",
    "Chrome v8"],'Chrome v8'),
    new Question('What is the full form of DOM?',["Distributed Object Module",
    "Document Object Model",
    "Direct Operation Model",
    "Device Operation Machine"],'Document Object Model'),
    new Question('The new ES6 LET keyword scope is ?',["local",
    "Block",
    "array",
    "object"],'Block'),
    new Question('Div tag is an...?',["None",
    "Inline",
    "Block",
    "Inline-block"],'Block'),
    new Question('Bootstrap is a framwork of ?',["HTML",
    "Java",
    "CSS",
    "Chrome"],'CSS')
]
var quiz  = new Quiz(questions);
populate();