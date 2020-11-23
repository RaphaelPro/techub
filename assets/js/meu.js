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
var solu = document.getElementById('solu');


pac.onclick = function () {
    if(big){
        big = false;
        document.getElementById('saiba').style.display = "none";
        pac.style.height = "60px";
        pac.style.width = "450px";
        pac.style.background = "gray";
        ico.src = "assets/img/abrir.svg";
        solu.style.marginTop = "50px";
    }else{
      document.getElementById('saiba').style.display = "block";
      big = true;
      pac.style.height = "430px";
      pac.style.width = "450px";
      pac.style.background = "black";
      ico.src = "assets/img/menos.svg";
      img.src = "assets/img/recifeantigo.png";
      solu.style.marginTop = "350px";
    }    
}

// Animação do bloco espaco2

var text2 = document.getElementById('text2');
var text3 = document.getElementById('text3'); 
var pc2 = document.getElementById('paco2');
var expandido = true;
var ico2 = document.getElementById('mais2')
pc2.onclick = function(){
  if(expandido){
    expandido = false;
    pc2.style.height = "430px";
    pc2.style.width = "450px";
    pc2.style.background = "black";
    ico2.src = "assets/img/menos.svg";
    img.src = "assets/img/rio_branco.png";
    document.getElementById('saiba2').classList.replace('d-none', 'd-block');
    solu.style.marginTop = "350px"; 
  }else{
    expandido = true;
    pc2.style.height = "60px";
    pc2.style.width = "450px";
    pc2.style.background = "gray";
    ico2.src = "assets/img/abrir.svg"
    document.getElementById('saiba2').classList.replace('d-block', 'd-none');
    solu.style.marginTop = "50px";
  }
} 

//medias query
const sm = window.matchMedia('(max-width: 320px)');
const sm2 = window.matchMedia('(max-width: 375px)');
const sm3 = window.matchMedia('(max-width: 425px)');
const md = window.matchMedia('(max-width: 768px)');
const lg = window.matchMedia('(max-width: 1024px)'); 

//Over
function houver1() {
  document.getElementById('img1-hover').src = 'assets/img/Mask_Group.png';
}

function houver2() { 
  document.getElementById('img2-hover').src = 'assets/img/office_mask.png';
 }

 function houver3() { 
  document.getElementById('img3-hover').src = 'assets/img/evento_mask.png';
 }

 function houver4() { 
  document.getElementById('img4-hover').src = 'assets/img/postal_mask.png';
 }


 //Out
function houver1Out() {
  document.getElementById('img1-hover').src = 'assets/img/posicao_trabalho.png';
}
function houver2Out() {
  document.getElementById('img2-hover').src = 'assets/img/office.png';
}

function houver3Out() { 
  document.getElementById('img3-hover').src = 'assets/img/evento.png';
 }

 function houver4Out() { 
  document.getElementById('img4-hover').src = 'assets/img/caixa_postal.png';
 }