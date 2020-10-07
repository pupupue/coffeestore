document.addEventListener("DOMContentLoaded", function(){
  (function () {

    var button = document.getElementById('toggle-menu');
    var menu = document.getElementById('main-menu');

    button.addEventListener('click', function(e) {
      e.preventDefault();
      menu.classList.toggle('is-open');
    });

    document.onclick = function(e){
      if(e.target.id !== 'main-menu' && e.target.id !== 'toggle-menu'){
        menu.classList.remove('is-open');
      }
    };
    
  })();
});