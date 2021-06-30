
let answerRight ="";
let numberRightAnswer = 0;
const totalNumberQuestion = 10;
let remainingNumber = 10; 
// load page when page load we will get first question
window.addEventListener('load', (event) => {
    sectionResult.classList.add('hidden');
    addQuestionElement();
  });
//senario when user click button Next 
// firstly The number of questions will be reduced one
// then execute math random  
// The remaining number of questions
//choose a random question function
function getrandomQuestionNumber (){
  return Math.floor(Math.random() * 10)
}
// function get question from json file
function getQuestion(){
    return qusetions[getrandomQuestionNumber ()]
}
// add question for element 
function addQuestionElement(){
   const  {answer_1,answer_2,answer_3,answer_4,qusetion,right_answer}=getQuestion();
   titleQusetion.textContent=qusetion;
   answerRight = right_answer;
   answerQuestion_1.value=answer_1;
   answerQuestion_1.nextElementSibling.textContent=answer_1;
   answerQuestion_2.value=answer_2;
   answerQuestion_2.nextElementSibling.textContent=answer_2;
   answerQuestion_3.value=answer_3;
   answerQuestion_3.nextElementSibling.textContent=answer_3;
   answerQuestion_4.value=answer_4;
   answerQuestion_4.nextElementSibling.textContent=answer_4;

}
//  check if answer write or not 
function checkAnswerIsRight(){
   const answer =  [answerQuestion_3,answerQuestion_1,answerQuestion_2,answerQuestion_4].filter((answer)=>answer.checked?answer.value:"");
  if(answer[0].value===answerRight) numberRightAnswer++;
}
// add event for submit btn
nextBtn.addEventListener("click", function(event){
    // check ---1
    checkAnswerIsRight();
    //remove answer
    [answerQuestion_3,answerQuestion_1,answerQuestion_2,answerQuestion_4].map((radio)=>radio.checked=false)
    //then go to another question 
    remainingNumber = remainingNumber - 1;
    remainNumber.textContent = remainingNumber+"/10";
    if(remainingNumber===1){
        // the next will be finish
        nextBtn.textContent = "FINISH";
        nextBtn.style.backgroundColor = "red";
        return "";
    }else if(remainingNumber===0){
    // resutl
    numberRightAnswer = numberRightAnswer *10;
      // if finish all exam 
      nextBtn.classList.add('hidden');
      remainNumber.classList.add('hidden');
      questionGame.classList.add('hidden');
      sectionResult.classList.remove("hidden")
      // edit header 
      headingPage.textContent = "Result Quiz";
      localStorage.getItem("lastname")
      yourName.textContent = localStorage.getItem("name");
      if(localStorage.getItem("gender")==="male"){
        avater.src = "../svg/boy.svg";
      }else{
        avater.src = "../svg/femal.svg";
      }
      result.textContent = numberRightAnswer + "%"
      return "";
    }
    return addQuestionElement();
  }); 