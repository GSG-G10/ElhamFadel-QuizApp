// elements
const submitBtn = document.getElementById("submit");
const useName = document.querySelector('#user-name');
const male = document.querySelector("#gender1");
const famel = document.querySelector("#gender2");
function handleUserData (name="user",gender="male"){
  localStorage.setItem("name", name);
  localStorage.setItem("gender", gender);
  return true;
}
 // prevent submit button to take info
submitBtn.addEventListener("click", function(event){
    event.preventDefault();
    const gender = getRedioValue();
    //there's problem 
    handleUserData(useName.value,gender)&&  location.replace("/pages/game.html")
  }); 
  //get redio value 
const getRedioValue = (element)=>male.checked? "male":"famel";
