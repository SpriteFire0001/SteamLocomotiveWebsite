function CheckAnswers() //It check if the end-user has answered the questions correctly.
{
  var score = 0;
  quiz = document.forms.Quiz.elements;
  
  AnswerQ1 = quiz.RQ1.value;
  if(AnswerQ1 == "Q1A1")
  {
    score++;
  }
  
  AnswerQ2 = quiz.RQ2.value;
  if(AnswerQ2 == "Q2A2")
  {
    score++;
  }
  
  AnswerQ3 = quiz.RQ3.value;
  if(AnswerQ3 == "Q3A2")
  {
    score++;
  }
  
  AnswerQ4 = quiz.RQ4.value;
  if(AnswerQ4 == "Q4A1")
  {
    score++;
  }
  
  AnswerQ5 = quiz.NQ5.value;
  if(AnswerQ5 == 1975)
  {
    score++;
  }
  
  AnswerQ6 = quiz.RQ6.value;
  if(AnswerQ6 == "Q6A3")
  {
    score++;
  }
  
  AnswerQ7 = quiz.RQ7.value;
  if(AnswerQ7 == "Q7A1")
  {
    score++;
  }
  
  AnswerQ8 = quiz.RQ8.value;
  if(AnswerQ8 == "Q8A1")
  {
    score++;
  }
   ShowFeedBack(score);
}

function ShowFeedBack(score) //A subroutine which displays the a message on the foreground of the quiz's interface.
{
  feedback = document.getElementsByTagName("form")[0]
  feedback.innerHTML = '<h2>Your score is ' + score + "." + '</h2>';

}


