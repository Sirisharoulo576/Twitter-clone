
function toggle() {
  console.log("hello");
  var x = document.getElementById("popup");
    
  if(x.style.display === "none" || x.style.display === "") {
   x.style.display = "block";
  }

  

  let showHide = document.getElementsByClassName("container");
   if(showHide[0].style.display === "none" || showHide[0].style.display === "") {
   showHide[0].style.display = "flex";
   } 
}




function login() {
  console.log("trying to login");
 
  let email = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  console.log(email);
  console.log(password);   
  if((email === "sirisharoulo@gmail.com" && password === "sirisha@576") || (email === "sagarroulo@gmail.com" && password === "sagar@576")) {
  let containerElement = document.getElementsByClassName("container");
  if(containerElement[0].style.display === "none") {
  containerElement[0].style.display = "block";
  }

  else{
    containerElement[0].style.display ="none";
  }

  let footer2Element = document.getElementsByClassName("footer2");
 
   if(footer2Element[0].style.display === "none") {
    footer2Element[0].style.display = "block";
   }
   else {
    footer2Element[0].style.display = "none";
   }
  
  let userElement = document.getElementsByClassName("user");
  console.log(userElement)
  console.log(userElement[0].style.display)
   if(userElement[0].style.display === "none" || userElement[0].style.display === "") {
    userElement[0].style.display = "block";
   } else {
    userElement[0].style.display = "none";
   }

   let popupElement = document.getElementById("popup");
 
   if(popupElement.style.display === "none") {
    popupElement.style.display = "block";
   }
   else {
    popupElement.style.display = "none";
   }
  }


}
 





