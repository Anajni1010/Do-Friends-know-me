var readlineSync = require("readline-sync");
var score =0;

var name = readlineSync.question("What is your name?- ")
console.log("Hello "+ name +" have a great day !")


function play(question,answer)
{
  var userAnswer = readlineSync.question(question);
  if(userAnswer.toUpperCase()===answer)
  {
    console.log("Correct answer");
    score = score + 5;  
    }
  else
  {
    console.log("Wrong Answer");

  }
  console.log("Score is "+ score);
}

var questionOne =
{
  question : "What is my name? - ",
  answer: "Anjani"
}

var questionTwo =
{
  question: "Which college do I study?- ",
  answer : "RN Kovind"

}

var questionThree =
{
  question: "In which city do I live?- ",
  answer : "Jaipur"

}


var quesarr=[questionOne,questionTwo,questionThree]

for(i=0;i<=ques.length;i++)
{
 play(quesarr[i].question,quesarr[i].answer)
}
