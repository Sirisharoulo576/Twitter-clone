
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

  let footerJSON = {"section": "footer",
              "header": "Don't miss what's happening",
              "sectionheader": "People on Twitter are the first to know.",
              "actions":[{"name": "login",
                          "function": "toggle"},
                         {"name": "signup",
                           "function": "null"}]
                        }

                        
console.log(document);
console.log(document.getElementById("footer"));
const footer = document.getElementById("footer");


const header = document.createElement("h2");
const headerText = document.createTextNode( footerJSON.header);
header.appendChild(headerText);



const subHeader = document.createElement("h5");
const subHeaderText = document.createTextNode(footerJSON.sectionheader);
subHeader.appendChild(subHeaderText);

const div = document.createElement("div");
div.appendChild(header);
div.appendChild(subHeader);
footer.appendChild(div);



// const loginButton = document.createElement("button");
// const loginText = document.createTextNode(footerJSON.actions[0].name);
// loginButton.appendChild(loginText);
// loginButton.className = "button2";
// loginButton.addEventListener("click", toggle);

// footer.appendChild(loginButton);



// const signUp = document.createElement("button");
// const signUpText = document.createTextNode(footerJSON.actions[1].name);
// signUp.appendChild(signUpText);
// signUp.className = "button2";

// footer.appendChild(signUp);

// let button ;
// let buttonText;
// button = document.createElement("button");
// buttonText = document.createTextNode(footerJSON.actions[0].name);
// button.appendChild(buttonText);
// button.className = "button2";
// button.addEventListener("click", toggle);

// footer.appendChild(button);



// button = document.createElement("button");
// buttonText = document.createTextNode(footerJSON.actions[1].name);
// button.appendChild(buttonText);
// button.className = "button2";

// footer.appendChild(button);




for(let x of footerJSON.actions) {
 
 let button ;
 let buttonText;
 button = document.createElement("button");
 buttonText = document.createTextNode(x.name);
 button.appendChild(buttonText);
 button.className = "button2";
 button.addEventListener("click", toggle);

 footer.appendChild(button);

}

// let text = "";
// for(let x in footerJSON.actions) {
//   text += footerJSON.actions[x].name;
// }
 
// let text2 = "";
// for(let x of footerJSON.actions){
//   text2 += x.name;
// }
// console.log(text2);



