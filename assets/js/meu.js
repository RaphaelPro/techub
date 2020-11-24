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




 document.addEventListener('DOMContentLoaded', function(e){

  var text2 = document.getElementById('text2');
  var text3 = document.getElementById('text3'); 
  var pc2 = document.getElementById('paco2');
  var expandido = true;
  var ico2 = document.getElementById('mais2');

var big = true;
var pac = document.getElementById('paco');
var ico = document.getElementById('mais');
var text = document.getElementById('text');
var text1 = document.getElementById('text1');
var img = document.getElementById('img-espaco');
var solu = document.getElementById('solu');
  
    var mqls = [
      window.matchMedia("(max-width: 325px)"),
      window.matchMedia("(min-width: 375px) and (max-width: 420px)"),
      window.matchMedia("(min-width:425px) and (max-width:760px)"),
      window.matchMedia("(max-width:768px)"),
      window.matchMedia("(max-width:1024px) and (min-width:1300px)"),
      window.matchMedia("(min-width:1920px)")
    ]

    for(var i = 0; i < mqls.length; i++){
      mqls[i].addListener(mqh);
    }

    function mqh(){
      if(mqls[0].matches){
        pac.onclick = function() {
          if(big){
            big = false;
            document.getElementById('saiba').style.display = "none";
            pac.style.height = "60px";
            pac.style.width = "300px";
            pac.style.background = "gray";
            ico.src = "assets/img/abrir.svg";
            solu.style.marginTop = "150px";
            pac.style.display ="block";
            pac.style.zIndex = "1";
            solu.style.marginTop ="250px";
            text.style.visibility="hidden";
            text.style.display="none";
            text1.style.visibility="hidden";
            text1.style.display="none";
            pc2.style.display = "block";
          }else{
          document.getElementById('saiba').style.display = "block";
          big = true;
          pac.style.height = "500px";
          pac.style.width = "300px";
          pac.style.background = "black";
          ico.src = "assets/img/menos.svg";
          img.src = "assets/img/recifeantigo.png";
          solu.style.marginTop = "550px";
          text.style.visibility="visible";
          text.style.fontSize ="16px";
            text.style.display="block";
            text1.style.visibility="visible";
            text1.style.display="block";
            text1.style.fontSize = "16px";
        } 
        
        pc2.onclick = function(){
          console.log('funciona');
          if(expandido){
            expandido = false;
            pc2.style.height = "500px";
            pc2.style.width = "300px";
            pc2.style.background = "black";
            ico2.src = "assets/img/menos.svg";
            img.src = "assets/img/rio_branco.png";
            document.getElementById('saiba2').classList.replace('d-none', 'd-block');
            solu.style.marginTop = "650px";
            text2.style.display="block";
            text2.style.visibility="visible";
            text3.style.visibility="visible";
            text3.style.display="block"; 
          }else{
            expandido = true;
            pc2.style.height = "60px";
            pc2.style.width = "300px";
            pc2.style.background = "gray";
            ico2.src = "assets/img/abrir.svg"
            document.getElementById('saiba2').classList.replace('d-block', 'd-none');
            solu.style.marginTop = "250px";
            text2.style.display="none";
            text2.style.visibility="hidden";
            text3.style.visibility="hidden";
            text3.style.display="none";
          }
        }         
      }
      }else if(mqls[1].matches){
        pac.onclick = function() {
          if(big){
            big = false;
            document.getElementById('saiba').style.display = "none";
            pac.style.height = "60px";
            pac.style.width = "340px";
            pac.style.background = "gray";
            ico.src = "assets/img/abrir.svg";
            solu.style.marginTop = "50px";
            pac.style.display ="block";
            pac.style.zIndex = "1";
            solu.style.marginTop ="150px";
            text.style.visibility="hidden";
            text.style.display="none";
            text1.style.visibility="hidden";
            text1.style.display="none";
            pc2.style.display = "block";
          }else{
          document.getElementById('saiba').style.display = "block";
          big = true;
          pac.style.height = "500px";
          pac.style.width = "340px";
          pac.style.background = "black";
          ico.src = "assets/img/menos.svg";
          img.src = "assets/img/recifeantigo.png";
          solu.style.marginTop = "550px";
          text.style.visibility="visible";
          text.style.fontSize ="16px";
            text.style.display="block";
            text1.style.visibility="visible";
            text1.style.display="block";
            text1.style.fontSize = "16px";
        }    
        }

        pc2.onclick = function(){
          console.log('funciona');
          if(expandido){
            expandido = false;
            pc2.style.height = "500px";
            pc2.style.width = "340px";
            pc2.style.background = "black";
            ico2.src = "assets/img/menos.svg";
            img.src = "assets/img/rio_branco.png";
            document.getElementById('saiba2').classList.replace('d-none', 'd-block');
            solu.style.marginTop = "650px";
            text2.style.display="block";
            text2.style.visibility="visible";
            text3.style.visibility="visible";
            text3.style.display="block"; 
          }else{
            expandido = true;
            pc2.style.height = "60px";
            pc2.style.width = "340px";
            pc2.style.background = "gray";
            ico2.src = "assets/img/abrir.svg"
            document.getElementById('saiba2').classList.replace('d-block', 'd-none');
            solu.style.marginTop = "250px";
            text2.style.display="none";
            text2.style.visibility="hidden";
            text3.style.visibility="hidden";
            text3.style.display="none";
          }
        } 
      }else if(mqls[2].matches){
        pac.onclick = function() {
          if(big){
            big = false;
            document.getElementById('saiba').style.display = "none";
            pac.style.height = "60px";
            pac.style.width = "400px";
            pac.style.background = "gray";
            ico.src = "assets/img/abrir.svg";
            solu.style.marginTop = "50px";
            pac.style.display ="block";
            pac.style.zIndex = "1";
            solu.style.marginTop ="150px";
            text.style.visibility="hidden";
            text.style.display="none";
            text1.style.visibility="hidden";
            text1.style.display="none";
            pc2.style.display = "block";
          }else{
          document.getElementById('saiba').style.display = "block";
          big = true;
          pac.style.height = "500px";
          pac.style.width = "400px";
          pac.style.background = "black";
          ico.src = "assets/img/menos.svg";
          img.src = "assets/img/recifeantigo.png";
          solu.style.marginTop = "550px";
          text.style.visibility="visible";
          text.style.fontSize ="16px";
            text.style.display="block";
            text1.style.visibility="visible";
            text1.style.display="block";
            text1.style.fontSize = "16px";
        }    
        }

        pc2.onclick = function(){
          console.log('funciona');
          if(expandido){
            expandido = false;
            pc2.style.height = "500px";
            pc2.style.width = "400px";
            pc2.style.background = "black";
            ico2.src = "assets/img/menos.svg";
            img.src = "assets/img/rio_branco.png";
            document.getElementById('saiba2').classList.replace('d-none', 'd-block');
            solu.style.marginTop = "650px";
            text2.style.display="block";
            text2.style.visibility="visible";
            text3.style.visibility="visible";
            text3.style.display="block"; 
          }else{
            expandido = true;
            pc2.style.height = "60px";
            pc2.style.width = "400px";
            pc2.style.background = "gray";
            ico2.src = "assets/img/abrir.svg"
            document.getElementById('saiba2').classList.replace('d-block', 'd-none');
            solu.style.marginTop = "250px";
            text2.style.display="none";
            text2.style.visibility="hidden";
            text3.style.visibility="hidden";
            text3.style.display="none";
          }
        } 
      }else if(mqls[3].matches){
        pac.onclick = function() {
          if(big){
            big = false;
            document.getElementById('saiba').style.display = "none";
            pac.style.height = "60px";
            pac.style.width = "300px";
            pac.style.background = "gray";
            ico.src = "assets/img/abrir.svg";
            solu.style.marginTop = "50px";
            pac.style.display ="block";
            pac.style.zIndex = "1";
            solu.style.marginTop ="150px";
            text.style.visibility="hidden";
            text.style.display="none";
            text1.style.visibility="hidden";
            text1.style.display="none";
            pc2.style.display = "block";
          }else{
          document.getElementById('saiba').style.display = "block";
          big = true;
          pac.style.height = "500px";
          pac.style.width = "300px";
          pac.style.background = "black";
          ico.src = "assets/img/menos.svg";
          img.src = "assets/img/recifeantigo.png";
          solu.style.marginTop = "550px";
          text.style.visibility="visible";
          text.style.fontSize ="16px";
            text.style.display="block";
            text1.style.visibility="visible";
            text1.style.display="block";
            text1.style.fontSize = "16px";
        }    
        }

        pc2.onclick = function(){
          console.log('funciona');
          if(expandido){
            expandido = false;
            pc2.style.height = "500px";
            pc2.style.width = "300px";
            pc2.style.background = "black";
            ico2.src = "assets/img/menos.svg";
            img.src = "assets/img/rio_branco.png";
            document.getElementById('saiba2').classList.replace('d-none', 'd-block');
            solu.style.marginTop = "650px";
            text2.style.display="block";
            text2.style.visibility="visible";
            text3.style.visibility="visible";
            text3.style.display="block"; 
          }else{
            expandido = true;
            pc2.style.height = "60px";
            pc2.style.width = "300px";
            pc2.style.background = "gray";
            ico2.src = "assets/img/abrir.svg"
            document.getElementById('saiba2').classList.replace('d-block', 'd-none');
            solu.style.marginTop = "250px";
            text2.style.display="none";
            text2.style.visibility="hidden";
            text3.style.visibility="hidden";
            text3.style.display="none";
          }
        } 
      }else if(mqls[4].matches){
        pac.onclick = function() {
          if(big){
            big = false;
            document.getElementById('saiba').style.display = "none";
            pac.style.height = "60px";
            pac.style.width = "380px";
            pac.style.background = "gray";
            ico.src = "assets/img/abrir.svg";
            solu.style.marginTop = "50px";
            pac.style.display ="block";
            pac.style.zIndex = "1";
            solu.style.marginTop ="150px";
            text.style.visibility="hidden";
            text.style.display="none";
            text1.style.visibility="hidden";
            text1.style.display="none";
            pc2.style.display = "block";
          }else{
          document.getElementById('saiba').style.display = "block";
          big = true;
          pac.style.height = "500px";
          pac.style.width = "380px";
          pac.style.background = "black";
          ico.src = "assets/img/menos.svg";
          img.src = "assets/img/recifeantigo.png";
          solu.style.marginTop = "550px";
          text.style.visibility="visible";
          text.style.fontSize ="16px";
            text.style.display="block";
            text1.style.visibility="visible";
            text1.style.display="block";
            text1.style.fontSize = "16px";
        }    
        }

        pc2.onclick = function(){
          if(expandido){
            expandido = false;
            pc2.style.height = "500px";
            pc2.style.width = "380px";
            pc2.style.background = "black";
            ico2.src = "assets/img/menos.svg";
            img.src = "assets/img/rio_branco.png";
            document.getElementById('saiba2').classList.replace('d-none', 'd-block');
            solu.style.marginTop = "650px";
            text2.style.display="block";
            text2.style.visibility="visible";
            text3.style.visibility="visible";
            text3.style.display="block"; 
          }else{
            expandido = true;
            pc2.style.height = "60px";
            pc2.style.width = "380px";
            pc2.style.background = "gray";
            ico2.src = "assets/img/abrir.svg"
            document.getElementById('saiba2').classList.replace('d-block', 'd-none');
            solu.style.marginTop = "250px";
            text2.style.display="none";
            text2.style.visibility="hidden";
            text3.style.visibility="hidden";
            text3.style.display="none";
          }
      }
    }else if(mqls[5].matches){
      pac.onclick = function() {
        if(big){
          big = false;
          document.getElementById('saiba').style.display = "none";
          pac.style.height = "60px";
          pac.style.width = "480px";
          pac.style.background = "gray";
          ico.src = "assets/img/abrir.svg";
          solu.style.marginTop = "50px";
          pac.style.display ="block";
          pac.style.zIndex = "1";
          solu.style.marginTop ="150px";
          text.style.visibility="hidden";
          text.style.display="none";
          text1.style.visibility="hidden";
          text1.style.display="none";
          pc2.style.display = "block";
        }else{
        document.getElementById('saiba').style.display = "block";
        big = true;
        pac.style.height = "500px";
        pac.style.width = "480px";
        pac.style.background = "black";
        ico.src = "assets/img/menos.svg";
        img.src = "assets/img/recifeantigo.png";
        solu.style.marginTop = "550px";
        text.style.visibility="visible";
        text.style.fontSize ="16px";
          text.style.display="block";
          text1.style.visibility="visible";
          text1.style.display="block";
          text1.style.fontSize = "16px";
      }    
      }

      pc2.onclick = function(){
        if(expandido){
          expandido = false;
          pc2.style.height = "500px";
          pc2.style.width = "480px";
          pc2.style.background = "black";
          ico2.src = "assets/img/menos.svg";
          img.src = "assets/img/rio_branco.png";
          document.getElementById('saiba2').classList.replace('d-none', 'd-block');
          solu.style.marginTop = "650px";
          text2.style.display="block";
          text2.style.visibility="visible";
          text3.style.visibility="visible";
          text3.style.display="block"; 
        }else{
          expandido = true;
          pc2.style.height = "60px";
          pc2.style.width = "480px";
          pc2.style.background = "gray";
          ico2.src = "assets/img/abrir.svg"
          document.getElementById('saiba2').classList.replace('d-block', 'd-none');
          solu.style.marginTop = "250px";
          text2.style.display="none";
          text2.style.visibility="hidden";
          text3.style.visibility="hidden";
          text3.style.display="none";
        }
    }
  }else{
    pac.onclick = function() {
      if(big){
        big = false;
        document.getElementById('saiba').style.display = "none";
        pac.style.height = "60px";
        pac.style.width = "450px";
        pac.style.background = "gray";
        ico.src = "assets/img/abrir.svg";
        solu.style.marginTop = "50px";
        pac.style.display ="block";
        pac.style.zIndex = "1";
        solu.style.marginTop ="150px";
        text.style.visibility="hidden";
        text.style.display="none";
        text1.style.visibility="hidden";
        text1.style.display="none";
        pc2.style.display = "block";
      }else{
      document.getElementById('saiba').style.display = "block";
      big = true;
      pac.style.height = "500px";
      pac.style.width = "450px";
      pac.style.background = "black";
      ico.src = "assets/img/menos.svg";
      img.src = "assets/img/recifeantigo.png";
      solu.style.marginTop = "550px";
      text.style.visibility="visible";
      text.style.fontSize ="16px";
        text.style.display="block";
        text1.style.visibility="visible";
        text1.style.display="block";
        text1.style.fontSize = "16px";
    }    
    }

    pc2.onclick = function(){
      if(expandido){
        expandido = false;
        pc2.style.height = "500px";
        pc2.style.width = "450px";
        pc2.style.background = "black";
        ico2.src = "assets/img/menos.svg";
        img.src = "assets/img/rio_branco.png";
        document.getElementById('saiba2').classList.replace('d-none', 'd-block');
        solu.style.marginTop = "550px";
        text2.style.display="block";
        text2.style.visibility="visible";
        text3.style.visibility="visible";
        text3.style.display="block"; 
      }else{
        expandido = true;
        pc2.style.height = "60px";
        pc2.style.width = "480px";
        pc2.style.background = "gray";
        ico2.src = "assets/img/abrir.svg"
        document.getElementById('saiba2').classList.replace('d-block', 'd-none');
        solu.style.marginTop = "150px";
        text2.style.display="none";
        text2.style.visibility="hidden";
        text3.style.visibility="hidden";
        text3.style.display="none";
      }
  }
}
    } 
    mqh();
 });

