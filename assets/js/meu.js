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

    icon.src = "assets/img/entrar_black.svg";
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


// Animação do bloco espaco
var big = true;
var pac = document.getElementById('paco');
var ico = document.getElementById('mais');
var text = document.getElementById('text');
var text1 = document.getElementById('text1');
var img = document.getElementById('img-espaco');


pac.onclick = function () {
    if(big){
        big = false;
        document.getElementById('saiba').style.display = "none";
        pac.style.height = "60px";
        pac.style.width = "450px";
        pac.style.background = "gray";
        ico.src = "assets/img/abrir.svg";
        text.innerHTML = "";
        text1.innerHTML = ""; 
    }else{
      document.getElementById('saiba').style.display = "block";
      big = true;
      pac.style.height = "430px";
      pac.style.width = "450px";
      pac.style.background = "black";
      ico.src = "assets/img/menos.svg";
      img.src = "assets/img/recifeantigo.png";
      text.innerHTML = "Alugue uma sala privativa a partir de R$3 mil! Seu negócio em uma das melhores localizações de Recife, na ilha tecnológica, e com ampla conveniência de um shopping à disposição. Conheça nossa estrutura!";
      text1.innerHTML = "Rua da Alfândega,nº35,Lj 401. CEP 50030-030"; 
    }    
}

// Animação do bloco espaco2

var text2 = document.getElementById('text2');
var text3 = document.getElementById('text3'); 
var pc2 = document.getElementById('paco2');
var expandido = true;
var ico2 = document.getElementById('mais2')

text2.innerHTML = "";
text3.innerHTML = ""; 
pc2.onclick = function(){
  if(expandido){
    expandido = false;
    pc2.style.height = "430px";
    pc2.style.width = "450px";
    pc2.style.background = "black";
    ico2.src = "assets/img/menos.svg";
    img.src = "assets/img/rio_branco.png";
    document.getElementById('saiba2').classList.replace('d-none', 'd-block');
    text2.innerHTML = "Alugue uma sala privativa a partir de R$3 mil! Seu negócio em uma das melhores localizações de Recife, na ilha tecnológica, e com ampla conveniência de um shopping à disposição. Conheça nossa estrutura!";
    text3.innerHTML = "Rua da Alfândega,nº35,Lj 401. CEP 50030-030"; 
  }else{
    expandido = true;
    pc2.style.height = "60px";
    pc2.style.width = "450px";
    pc2.style.background = "gray";
    ico2.src = "assets/img/abrir.svg"
    document.getElementById('saiba2').classList.replace('d-block', 'd-none');
    text2.innerHTML = "";
    text3.innerHTML = ""; 
  }
} 

//medias query
const sm = window.matchMedia('(max-width: 320px)');
const sm2 = window.matchMedia('(max-width: 375px)');
const sm3 = window.matchMedia('(max-width: 425px)');
const md = window.matchMedia('(max-width: 768px)');
const lg = window.matchMedia('(max-width: 1024px)'); 

