function Quiz(questions){
  this.score = 0;
  this.questions = questions;
  this.questionIndex = 0;
}
Quiz.prototype.getIndex = function(){
  return this.questions[this.questionIndex];
}
Quiz.prototype.isEnded = function(){
  return this.questions.length === this.questionIndex;
}
Quiz.prototype.guess = function(answer){

  if(this.getIndex().correctAnswer(answer)){
    this.score++;
    }
    this.questionIndex++;
}