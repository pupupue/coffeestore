document.addEventListener("DOMContentLoaded", function(){
  let links = document.getElementsByClassName("button-shadow-1");

  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function(e){
      e.preventDefault()
    }); 
  }
});



