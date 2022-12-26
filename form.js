
function toggle() {
  console.log("hello");
  var x = document.getElementById("popup");
    
  if(x.style.display === "none") {
   x.style.display = "block";
  }

  else{
    x.style.display = "none";
  }

  let showHide = document.getElementsByClassName("container");
   if(showHide[0].style.display === "none") {
   showHide[0].style.display = "block";
   } else {
    showHide[0].style.display = "none";
   }
}





 





