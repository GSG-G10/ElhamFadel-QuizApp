// elements
const submitBtn = document.getElementById("submit");
const useName = document.querySelector('#user-name');
const male = document.querySelector("#gender1");
const famel = document.querySelector("#gender2");
 // prevent submit button to take info
submitBtn.addEventListener("click", function(event){
    event.preventDefault();
    const gender = getRedioValue();
    //there's problem 
    handleUserData(useName.value,gender) && location.replace("/pages/game.html");
    //handleUserData will return true value after save data 
  }); 
  //get redio value 
const getRedioValue = (element)=>male.checked? "male":"famel";
