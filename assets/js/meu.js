var el = document.getElementById('menu'); // elemento alvo
var ele = document.querySelectorAll('.nav-link');
var btn = document.getElementById('btn-entrar');
var icon = document.getElementById('icon');
var logo = document.getElementById('logo');
var numPx = '50'; // Quantidade de pixels a contar do TOP até definir a cor

window.addEventListener('scroll', function() {
  if (window.scrollY > numPx) {
    el.classList.remove('navbar-dark');
    el.classList.add('mudaCor'); // adiciona classe "mudaCor"
    el.classList.add('navbar-light');
    el.classList.add('shadow-bottom')
    btn.classList.remove('text-white');
    btn.classList.add('text-black');

    icon.src = "assets/img/entrar_black.svg"
    logo.src = "assets/img/logo_black.svg";

    ele.forEach(element =>{
        element.classList.replace('text-white','text-black');
    });

  } else {
    el.classList.remove('mudaCor'); // remove classe "mudaCor"
    el.classList.remove('navbar-light');
    el.classList.remove('shadow-bottom');
    el.classList.add('navbar-dark');
    btn.classList.add('text-white');

    icon.src = "assets/img/mdi_person_outline.svg";
    logo.src = "assets/img/logo_white.svg";

    ele.forEach(element =>{
      element.classList.replace('text-black','text-white');
    });
  }
});
    
var big = true;
var pac = document.getElementById('paco');
var pc2 = document.getElementById('paco2');

pac.onclick = function () {
    if(big){
      alert('Diminui');
        big = false;
        var anime 
        document.getElementById('saiba').style.display = "none";
        pac.style.height = "60px";
        pac.style.width = "400px";
    }else{
      document.getElementById('saiba').style.display = "block";
      alert('cresce');
      big = true;
      pac.style.height = "560px";
      pac.style.width = "400px";
    }    
}


  


