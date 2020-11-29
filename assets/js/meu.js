var el = document.getElementById('menu'); // elemento alvo
var ele = document.querySelectorAll('.nav-link');
var btn = document.getElementById('btn-entrar');
var icon = document.getElementById('icon');
var logo = document.getElementById('logo');
var numPx = '50'; // Quantidade de pixels a contar do TOP até definir a cor

window.addEventListener('scroll', function () {
    
  if (window.scrollY > numPx) {
    el.classList.remove('navbar-dark');
    el.classList.add('mudaCor'); // adiciona classe "mudaCor"
    el.classList.add('navbar-light');
    el.classList.add('shadow-bottom')
    btn.classList.remove('text-white');
    btn.classList.add('text-preto');

    icon.src = "assets/img/entrar_black.svg";
    logo.src = "assets/img/logo_black.svg";

    ele.forEach(element => {
      element.classList.replace('text-white', 'text-preto');
    });

  } else {
    el.classList.remove('mudaCor'); // remove classe "mudaCor"
    el.classList.remove('navbar-light');
    el.classList.remove('shadow-bottom');
    el.classList.add('navbar-dark');
    btn.classList.add('text-white');

    icon.src = "assets/img/mdi_person_outline.svg";
    logo.src = "assets/img/logo_white.svg";

    ele.forEach(element => {
      element.classList.replace('text-preto', 'text-white');
    });
  }
});



function recarregar() {
  location.reload();
}

var recarrega;

window.onresize = function () {
  clearTimeout(recarrega);
  recarrega = setTimeout(recarregar, 100);
};


document.addEventListener('DOMContentLoaded', function (e) {
  $(document).ready(function () {

    //card1
    $('#div-img').mouseenter(function () { 
      $('#cruz').fadeOut('slow', function () {
        $('#cdt').animate({opacity : '1'}, 300);
        $('#cdt').css('display','block');
        });
   });
   
   $('#div-img').mouseleave(function () { 
     $('#cdt').fadeOut('normal', function () { 
      $('#cruz').fadeIn('fast');
      });
    });

    //card2
    $('#div-img2').mouseenter(function () { 
      $('#cruz2').fadeOut('slow', function () {
        $('#cdt2').animate({opacity : '1'}, 300);
        $('#cdt2').css('display','block');
        });
   });
   
   $('#div-img2').mouseleave(function () { 
     $('#cdt2').fadeOut('normal', function () { 
      $('#cruz2').fadeIn('fast');
      });
    });

    //card3
    $('#div-img3').mouseenter(function () { 
      $('#cruz3').fadeOut('slow', function () {
        $('#cdt3').animate({opacity : '1'}, 300);
        $('#cdt3').css('display','block');
        });
   });
   
   $('#div-img3').mouseleave(function () { 
     $('#cdt3').fadeOut('normal', function () { 
      $('#cruz3').fadeIn('fast');
      });
    });

    //card4
    $('#div-img4').mouseenter(function () { 
      $('#cruz4').fadeOut('slow', function () {
        $('#cdt4').animate({opacity : '1'}, 300);
        $('#cdt4').css('display','block');
        });
   });
   
   $('#div-img4').mouseleave(function () { 
     $('#cdt4').fadeOut('normal', function () { 
      $('#cruz4').fadeIn('fast');
      });
    });
   

    $(".navbar-toggler").click(function () {
      if ($("#menu").hasClass("mudaCor") && $(window).scrollTop() <= 0) {

        $('#menu').removeClass('mudaCor');
        $('#menu').addClass('navbar-dark').removeClass('navbar-light');
        $('#menu').removeClass('shadow-bottom');
        $('.nav-link').addClass('text-white').removeClass('text-preto');
        $('#logo').attr('src','assets/img/logo_white.svg');
        $('#icon').attr('src','assets/img/mdi_person_outline.svg');
        $('#btn-entrar').addClass('text-white').removeClass('text-preto');
      }else{
        $('#menu').addClass('mudaCor');
        $('#menu').addClass('navbar-light').removeClass('navbar-dark');
        $('#menu').addClass('shadow-bottom');
        $('.nav-link').addClass('text-preto').removeClass('text-white');
        $('#logo').attr('src', 'assets/img/logo_black.svg');
        $('#icon').attr('src', 'assets/img/entrar_black.svg');
        $('#btn-entrar').addClass('text-preto').removeClass('text-white');
      }
    });  


  });


  var text2 = document.getElementById('text2');
  var text3 = document.getElementById('text3');

  text2.style.display = "none";
  text2.style.visibility = "hidden";
  text3.style.display = "none";
  text3.style.visibility = "hidden";



  var mqls = [
    window.matchMedia("(min-width:320px) and (max-width:424px)"),
    window.matchMedia("(min-width: 425px) and (max-width:576px)"),
    window.matchMedia("(min-width: 577px) and (max-width: 767px)"),
    window.matchMedia("(min-width:768px) and (max-width:991px)"),
    window.matchMedia("(min-width:992px) and (max-width:1190px)"),
    window.matchMedia("(min-width:1200px) and (max-width:1350px)"),
    window.matchMedia("(min-width:1360px) and (max-width:1490px)"),
    window.matchMedia("(min-width: 1500px) and (max-width: 1800px)"),
    window.matchMedia("only screen and (-webkit-min-device-pixel-ratio: 3),  ( min-width: 1900px)")
  ]
  
  for (var i = 0; i < mqls.length; i++) {
    mqls[i].addListener(mqh);
  }

  function mqh() {
    if (mqls[0].matches) {

      $(document).ready(function () {


        $("#mais").click(function (e) {
          e.preventDefault();
          if ($("#paco").height() == 500) {
            $('#paco').animate({
              height: "60px",
              width: "90%"
            }, 200);
            $('#paco').css("background-color", "gray");
            $('#saiba').css({
              display: "none"
            });
            $('#mais').attr('src', 'assets/img/abrir.svg');
            $('#img-espaco').attr('src', 'assets/img/recifeantigo.png');
            $('#solu').animate({
              'margin-top': "150px"
            }, 200);
            $('#text').css({
              visibility: "hidden",
              display: "none"
            });
            $('#text1').css({
              visibility: "hidden",
              display: "none"
            });

          } else {
            $('#paco').animate({
              height: "500px",
              width: "90%"
            }, 200);
            $('#paco').css("background-color", "#000");
            $('#saiba').css({
              display: "block"
            });
            $("#mais").attr('src', 'assets/img/menos.svg');
            $('#solu').css({
              'margin-top': "550px"
            });
            $('#text').css({
              visibility: "visible",
              display: "block"
            });
            $('#text1').css({
              visibility: "visible",
              display: "block"
            });


            $('#paco2').css({
              height: "60px"
            });
            $('#paco2').css({
              'background-color': 'gray'
            })
            $('#mais2').attr('src', 'assets/img/abrir.svg');
            $('#saiba2').css({
              display: 'none'
            });
          }

        });

        $("#mais2").click(function (e) {
          e.preventDefault();
          if ($("#paco2").height() == 60) {
            $('#paco2').animate({
              height: "500px",
              width: "90%"
            }, 200);
            $('#paco2').css("background-color", "black");
            $('#saiba2').css({
              display: "block"
            });
            $('#mais2').attr('src', 'assets/img/menos.svg');
            $('#img-espaco').attr('src', 'assets/img/rio_branco.png');
            $('#solu').css({
              'margin-top': "550px"
            });
            $('#text2').css({
              visibility: "visible",
              display: "block"
            });
            $('#text3').css({
              visibility: "visible",
              display: "block"
            });

            $('#paco').css({
              height: "60px"
            });
            $('#paco').css({
              'background-color': 'gray'
            })
            $('#mais').attr('src', 'assets/img/abrir.svg');
            $('#saiba').css({
              display: 'none'
            });

          } else {
            $('#paco2').animate({
              height: "60px",
              width: "90%"
            }, 200);
            $('#paco2').css("background-color", "gray");
            $('#saiba2').css({
              display: "none"
            });
            $("#mais2").attr('src', 'assets/img/abrir.svg');
            $('#solu').animate({
              'margin-top': "150px"
            }, 200);
            $('#text2').css({
              visibility: "hidden",
              display: "none"
            });
            $('#text3').css({
              visibility: "hidden",
              display: "none"
            });
            $('#saiba2').css({
              display: "none"
            });


          }

        });
      });

    } else if (mqls[1].matches) {

      $(document).ready(function () {


        $("#mais").click(function (e) {
          e.preventDefault();
          if ($("#paco").height() == 500) {
            $('#paco').animate({
              height: "60px",
              width: "80%"
            }, 200);
            $('#paco').css("background-color", "gray");
            $('#saiba').css({
              display: "none"
            });
            $('#mais').attr('src', 'assets/img/abrir.svg');
            $('#img-espaco').attr('src', 'assets/img/recifeantigo.png');
            $('#solu').animate({
              'margin-top': "150px"
            }, 200);
            $('#text').css({
              visibility: "hidden",
              display: "none"
            });
            $('#text1').css({
              visibility: "hidden",
              display: "none"
            });

          } else {
            $('#paco').animate({
              height: "500px",
              width: "80%"
            }, 200);
            $('#paco').css("background-color", "#000");
            $('#saiba').css({
              display: "block"
            });
            $("#mais").attr('src', 'assets/img/menos.svg');
            $('#solu').css({
              'margin-top': "550px"
            });
            $('#text').css({
              visibility: "visible",
              display: "block"
            });
            $('#text1').css({
              visibility: "visible",
              display: "block"
            });


            $('#paco2').css({
              height: "60px"
            });
            $('#paco2').css({
              'background-color': 'gray'
            })
            $('#mais2').attr('src', 'assets/img/abrir.svg');
            $('#saiba2').css({
              display: 'none'
            });
          }

        });

        $("#mais2").click(function (e) {
          e.preventDefault();
          if ($("#paco2").height() == 60) {
            $('#paco2').animate({
              height: "500px",
              width: "80%"
            }, 200);
            $('#paco2').css("background-color", "black");
            $('#saiba2').css({
              display: "block"
            });
            $('#mais2').attr('src', 'assets/img/menos.svg');
            $('#img-espaco').attr('src', 'assets/img/rio_branco.png');
            $('#solu').css({
              'margin-top': "550px"
            });
            $('#text2').css({
              visibility: "visible",
              display: "block"
            });
            $('#text3').css({
              visibility: "visible",
              display: "block"
            });

            $('#paco').css({
              height: "60px"
            });
            $('#paco').css({
              'background-color': 'gray'
            })
            $('#mais').attr('src', 'assets/img/abrir.svg');
            $('#saiba').css({
              display: 'none'
            });

          } else {
            $('#paco2').animate({
              height: "60px",
              width: "80%"
            }, 200);
            $('#paco2').css("background-color", "gray");
            $('#saiba2').css({
              display: "none"
            });
            $("#mais2").attr('src', 'assets/img/abrir.svg');
            $('#solu').animate({
              'margin-top': "150px"
            }, 200);
            $('#text2').css({
              visibility: "hidden",
              display: "none"
            });
            $('#text3').css({
              visibility: "hidden",
              display: "none"
            });
            $('#saiba2').css({
              display: "none"
            });


          }

        });
      });
    } else if (mqls[2].matches) {

      $(document).ready(function () {


        $("#mais").click(function (e) {
          e.preventDefault();
          if ($("#paco").height() == 500) {
            $('#paco').animate({
              height: "60px",
              width: "80%"
            }, 200);
            $('#paco').css("background-color", "gray");
            $('#saiba').css({
              display: "none"
            });
            $('#mais').attr('src', 'assets/img/abrir.svg');
            $('#img-espaco').attr('src', 'assets/img/recifeantigo.png');
            $('#solu').animate({
              'margin-top': "150px"
            }, 200);
            $('#text').css({
              visibility: "hidden",
              display: "none"
            });
            $('#text1').css({
              visibility: "hidden",
              display: "none"
            });

          } else {
            $('#paco').animate({
              height: "500px",
              width: "80%"
            }, 200);
            $('#paco').css("background-color", "#000");
            $('#saiba').css({
              display: "block"
            });
            $("#mais").attr('src', 'assets/img/menos.svg');
            $('#solu').css({
              'margin-top': "550px"
            });
            $('#text').css({
              visibility: "visible",
              display: "block"
            });
            $('#text1').css({
              visibility: "visible",
              display: "block"
            });


            $('#paco2').css({
              height: "60px"
            });
            $('#paco2').css({
              'background-color': 'gray'
            })
            $('#mais2').attr('src', 'assets/img/abrir.svg');
            $('#saiba2').css({
              display: 'none'
            });
          }

        });

        $("#mais2").click(function (e) {
          e.preventDefault();
          if ($("#paco2").height() == 60) {
            $('#paco2').animate({
              height: "500px",
              width: "80%"
            }, 200);
            $('#paco2').css("background-color", "black");
            $('#saiba2').css({
              display: "block"
            });
            $('#mais2').attr('src', 'assets/img/menos.svg');
            $('#img-espaco').attr('src', 'assets/img/rio_branco.png');
            $('#solu').css({
              'margin-top': "550px"
            });
            $('#text2').css({
              visibility: "visible",
              display: "block"
            });
            $('#text3').css({
              visibility: "visible",
              display: "block"
            });

            $('#paco').css({
              height: "60px"
            });
            $('#paco').css({
              'background-color': 'gray'
            })
            $('#mais').attr('src', 'assets/img/abrir.svg');
            $('#saiba').css({
              display: 'none'
            });

          } else {
            $('#paco2').animate({
              height: "60px",
              width: "80%"
            }, 200);
            $('#paco2').css("background-color", "gray");
            $('#saiba2').css({
              display: "none"
            });
            $("#mais2").attr('src', 'assets/img/abrir.svg');
            $('#solu').animate({
              'margin-top': "150px"
            }, 200);
            $('#text2').css({
              visibility: "hidden",
              display: "none"
            });
            $('#text3').css({
              visibility: "hidden",
              display: "none"
            });
            $('#saiba2').css({
              display: "none"
            });


          }

        });
      });
    } else if (mqls[3].matches) {
      $(document).ready(function () {


        $("#mais").click(function (e) {
          e.preventDefault();
          if ($("#paco").height() == 500) {
            $('#paco').animate({
              height: "60px",
              width: "90%"
            }, 200);
            $('#paco').css("background-color", "gray");
            $('#saiba').css({
              display: "none"
            });
            $('#mais').attr('src', 'assets/img/abrir.svg');
            $('#img-espaco').attr('src', 'assets/img/recifeantigo.png');
            $('#solu').animate({
              'margin-top': "150px"
            }, 200);
            $('#text').css({
              visibility: "hidden",
              display: "none"
            });
            $('#text1').css({
              visibility: "hidden",
              display: "none"
            });

          } else {
            $('#paco').animate({
              height: "500px",
              width: "90%"
            }, 200);
            $('#paco').css("background-color", "#000");
            $('#saiba').css({
              display: "block"
            });
            $("#mais").attr('src', 'assets/img/menos.svg');
            $('#solu').css({
              'margin-top': "550px"
            });
            $('#text').css({
              visibility: "visible",
              display: "block"
            });
            $('#text1').css({
              visibility: "visible",
              display: "block"
            });


            $('#paco2').css({
              height: "60px"
            });
            $('#paco2').css({
              'background-color': 'gray'
            })
            $('#mais2').attr('src', 'assets/img/abrir.svg');
            $('#saiba2').css({
              display: 'none'
            });
          }

        });

        $("#mais2").click(function (e) {
          e.preventDefault();
          if ($("#paco2").height() == 60) {
            $('#paco2').animate({
              height: "500px",
              width: "90%"
            }, 200);
            $('#paco2').css("background-color", "black");
            $('#saiba2').css({
              display: "block"
            });
            $('#mais2').attr('src', 'assets/img/menos.svg');
            $('#img-espaco').attr('src', 'assets/img/rio_branco.png');
            $('#solu').css({
              'margin-top': "550px"
            });
            $('#text2').css({
              visibility: "visible",
              display: "block"
            });
            $('#text3').css({
              visibility: "visible",
              display: "block"
            });

            $('#paco').css({
              height: "60px"
            });
            $('#paco').css({
              'background-color': 'gray'
            })
            $('#mais').attr('src', 'assets/img/abrir.svg');
            $('#saiba').css({
              display: 'none'
            });

          } else {
            $('#paco2').animate({
              height: "60px",
              width: "90%"
            }, 200);
            $('#paco2').css("background-color", "gray");
            $('#saiba2').css({
              display: "none"
            });
            $("#mais2").attr('src', 'assets/img/abrir.svg');
            $('#solu').animate({
              'margin-top': "150px"
            }, 200);
            $('#text2').css({
              visibility: "hidden",
              display: "none"
            });
            $('#text3').css({
              visibility: "hidden",
              display: "none"
            });
            $('#saiba2').css({
              display: "none"
            });


          }

        });
      });
    } else if (mqls[4].matches) {
      $(document).ready(function () {


        $("#mais").click(function (e) {
          e.preventDefault();
          if ($("#paco").height() == 540) {
            $('#paco').animate({
              height: "60px",
              width: "70%"
            }, 200);
            $('#paco').css("background-color", "gray");
            $('#saiba').css({
              display: "none"
            });
            $('#mais').attr('src', 'assets/img/abrir.svg');
            $('#img-espaco').attr('src', 'assets/img/recifeantigo.png');
            $('#solu').animate({
              'margin-top': "150px"
            }, 200);
            $('#text').css({
              visibility: "hidden",
              display: "none"
            });
            $('#text1').css({
              visibility: "hidden",
              display: "none"
            });

          } else {
            $('#paco').animate({
              height: "540px",
              width: "70%"
            }, 200);
            $('#paco').css("background-color", "#000");
            $('#saiba').css({
              display: "block"
            });
            $("#mais").attr('src', 'assets/img/menos.svg');
            $('#solu').css({
              'margin-top': "550px"
            });
            $('#text').css({
              visibility: "visible",
              display: "block"
            });
            $('#text1').css({
              visibility: "visible",
              display: "block"
            });


            $('#paco2').css({
              height: "60px"
            });
            $('#paco2').css({
              'background-color': 'gray'
            })
            $('#mais2').attr('src', 'assets/img/abrir.svg');
            $('#saiba2').css({
              display: 'none'
            });
          }

        });

        $("#mais2").click(function (e) {
          e.preventDefault();
          if ($("#paco2").height() == 60) {
            $('#paco2').animate({
              height: "540px",
              width: "70%"
            }, 200);
            $('#paco2').css("background-color", "black");
            $('#saiba2').css({
              display: "block"
            });
            $('#mais2').attr('src', 'assets/img/menos.svg');
            $('#img-espaco').attr('src', 'assets/img/rio_branco.png');
            $('#solu').css({
              'margin-top': "550px"
            });
            $('#text2').css({
              visibility: "visible",
              display: "block"
            });
            $('#text3').css({
              visibility: "visible",
              display: "block"
            });

            $('#paco').css({
              height: "60px"
            });
            $('#paco').css({
              'background-color': 'gray'
            })
            $('#mais').attr('src', 'assets/img/abrir.svg');
            $('#saiba').css({
              display: 'none'
            });

          } else {
            $('#paco2').animate({
              height: "60px",
              width: "70%"
            }, 200);
            $('#paco2').css("background-color", "gray");
            $('#saiba2').css({
              display: "none"
            });
            $("#mais2").attr('src', 'assets/img/abrir.svg');
            $('#solu').animate({
              'margin-top': "150px"
            }, 200);
            $('#text2').css({
              visibility: "hidden",
              display: "none"
            });
            $('#text3').css({
              visibility: "hidden",
              display: "none"
            });
            $('#saiba2').css({
              display: "none"
            });


          }

        });
      });
    } else if (mqls[5].matches) {
      $(document).ready(function () {


        $("#mais").click(function (e) {
          e.preventDefault();
          if ($("#paco").height() == 500) {
            $('#paco').animate({
              height: "60px",
              width: "430px"
            }, 200);
            $('#paco').css("background-color", "gray");
            $('#saiba').css({
              display: "none"
            });
            $('#mais').attr('src', 'assets/img/abrir.svg');
            $('#img-espaco').attr('src', 'assets/img/recifeantigo.png');
            $('#solu').animate({
              'margin-top': "150px"
            }, 200);
            $('#text').css({
              visibility: "hidden",
              display: "none"
            });
            $('#text1').css({
              visibility: "hidden",
              display: "none"
            });

          } else {
            $('#paco').animate({
              height: "500px",
              width: "430px"
            }, 200);
            $('#paco').css("background-color", "#000");
            $('#saiba').css({
              display: "block"
            });
            $("#mais").attr('src', 'assets/img/menos.svg');
            $('#solu').css({
              'margin-top': "550px"
            });
            $('#text').css({
              visibility: "visible",
              display: "block"
            });
            $('#text1').css({
              visibility: "visible",
              display: "block"
            });


            $('#paco2').css({
              height: "60px"
            });
            $('#paco2').css({
              'background-color': 'gray'
            })
            $('#mais2').attr('src', 'assets/img/abrir.svg');
            $('#saiba2').css({
              display: 'none'
            });
          }

        });

        $("#mais2").click(function (e) {
          e.preventDefault();
          if ($("#paco2").height() == 60) {
            $('#paco2').animate({
              height: "500px",
              width: "430px"
            }, 200);
            $('#paco2').css("background-color", "black");
            $('#saiba2').css({
              display: "block"
            });
            $('#mais2').attr('src', 'assets/img/menos.svg');
            $('#img-espaco').attr('src', 'assets/img/rio_branco.png');
            $('#solu').css({
              'margin-top': "550px"
            });
            $('#text2').css({
              visibility: "visible",
              display: "block"
            });
            $('#text3').css({
              visibility: "visible",
              display: "block"
            });

            $('#paco').css({
              height: "60px"
            });
            $('#paco').css({
              'background-color': 'gray'
            })
            $('#mais').attr('src', 'assets/img/abrir.svg');
            $('#saiba').css({
              display: 'none'
            });

          } else {
            $('#paco2').animate({
              height: "60px",
              width: "430px"
            }, 200);
            $('#paco2').css("background-color", "gray");
            $('#saiba2').css({
              display: "none"
            });
            $("#mais2").attr('src', 'assets/img/abrir.svg');
            $('#solu').animate({
              'margin-top': "150px"
            }, 200);
            $('#text2').css({
              visibility: "hidden",
              display: "none"
            });
            $('#text3').css({
              visibility: "hidden",
              display: "none"
            });
            $('#saiba2').css({
              display: "none"
            });


          }

        });


        //your code to be executed after 1 seconds

      });
    } else if (mqls[6].matches) {

      $(document).ready(function () {


        $("#mais").click(function (e) {
          e.preventDefault();
          if ($("#paco").height() == 500) {
            $('#paco').animate({
              height: "60px",
              width: "430px"
            }, 200);
            $('#paco').css("background-color", "gray");
            $('#saiba').css({
              display: "none"
            });
            $('#mais').attr('src', 'assets/img/abrir.svg');
            $('#img-espaco').attr('src', 'assets/img/recifeantigo.png');
            $('#solu').animate({
              'margin-top': "150px"
            }, 200);
            $('#text').css({
              visibility: "hidden",
              display: "none"
            });
            $('#text1').css({
              visibility: "hidden",
              display: "none"
            });

          } else {
            $('#paco').animate({
              height: "500px",
              width: "430px"
            }, 200);
            $('#paco').css("background-color", "#000");
            $('#saiba').css({
              display: "block"
            });
            $("#mais").attr('src', 'assets/img/menos.svg');
            $('#solu').css({
              'margin-top': "550px"
            });
            $('#text').css({
              visibility: "visible",
              display: "block"
            });
            $('#text1').css({
              visibility: "visible",
              display: "block"
            });


            $('#paco2').css({
              height: "60px"
            });
            $('#paco2').css({
              'background-color': 'gray'
            })
            $('#mais2').attr('src', 'assets/img/abrir.svg');
            $('#saiba2').css({
              display: 'none'
            });
          }

        });

        $("#mais2").click(function (e) {
          e.preventDefault();
          if ($("#paco2").height() == 60) {
            $('#paco2').animate({
              height: "500px",
              width: "430px"
            }, 200);
            $('#paco2').css("background-color", "black");
            $('#saiba2').css({
              display: "block"
            });
            $('#mais2').attr('src', 'assets/img/menos.svg');
            $('#img-espaco').attr('src', 'assets/img/rio_branco.png');
            $('#solu').css({
              'margin-top': "550px"
            });
            $('#text2').css({
              visibility: "visible",
              display: "block"
            });
            $('#text3').css({
              visibility: "visible",
              display: "block"
            });

            $('#paco').css({
              height: "60px"
            });
            $('#paco').css({
              'background-color': 'gray'
            })
            $('#mais').attr('src', 'assets/img/abrir.svg');
            $('#saiba').css({
              display: 'none'
            });

          } else {
            $('#paco2').animate({
              height: "60px",
              width: "430px"
            }, 200);
            $('#paco2').css("background-color", "gray");
            $('#saiba2').css({
              display: "none"
            });
            $("#mais2").attr('src', 'assets/img/abrir.svg');
            $('#solu').animate({
              'margin-top': "150px"
            }, 200);
            $('#text2').css({
              visibility: "hidden",
              display: "none"
            });
            $('#text3').css({
              visibility: "hidden",
              display: "none"
            });
            $('#saiba2').css({
              display: "none"
            });


          }

        });


        //your code to be executed after 1 seconds

      });
    } else if (mqls[7].matches) {
      $(document).ready(function () {


        $("#mais").click(function (e) {
          e.preventDefault();
          if ($("#paco").height() == 500) {
            $('#paco').animate({
              height: "60px",
              width: "430px"
            }, 200);
            $('#paco').css("background-color", "gray");
            $('#saiba').css({
              display: "none"
            });
            $('#mais').attr('src', 'assets/img/abrir.svg');
            $('#img-espaco').attr('src', 'assets/img/recifeantigo.png');
            $('#solu').animate({
              'margin-top': "150px"
            }, 200);
            $('#text').css({
              visibility: "hidden",
              display: "none"
            });
            $('#text1').css({
              visibility: "hidden",
              display: "none"
            });

          } else {
            $('#paco').animate({
              height: "500px",
              width: "430px"
            }, 200);
            $('#paco').css("background-color", "#000");
            $('#saiba').css({
              display: "block"
            });
            $("#mais").attr('src', 'assets/img/menos.svg');
            $('#solu').css({
              'margin-top': "550px"
            });
            $('#text').css({
              visibility: "visible",
              display: "block"
            });
            $('#text1').css({
              visibility: "visible",
              display: "block"
            });


            $('#paco2').css({
              height: "60px"
            });
            $('#paco2').css({
              'background-color': 'gray'
            })
            $('#mais2').attr('src', 'assets/img/abrir.svg');
            $('#saiba2').css({
              display: 'none'
            });
          }

        });

        $("#mais2").click(function (e) {
          e.preventDefault();
          if ($("#paco2").height() == 60) {
            $('#paco2').animate({
              height: "500px",
              width: "430px"
            }, 200);
            $('#paco2').css("background-color", "black");
            $('#saiba2').css({
              display: "block"
            });
            $('#mais2').attr('src', 'assets/img/menos.svg');
            $('#img-espaco').attr('src', 'assets/img/rio_branco.png');
            $('#solu').css({
              'margin-top': "550px"
            });
            $('#text2').css({
              visibility: "visible",
              display: "block"
            });
            $('#text3').css({
              visibility: "visible",
              display: "block"
            });

            $('#paco').css({
              height: "60px"
            });
            $('#paco').css({
              'background-color': 'gray'
            })
            $('#mais').attr('src', 'assets/img/abrir.svg');
            $('#saiba').css({
              display: 'none'
            });

          } else {
            $('#paco2').animate({
              height: "60px",
              width: "430px"
            }, 200);
            $('#paco2').css("background-color", "gray");
            $('#saiba2').css({
              display: "none"
            });
            $("#mais2").attr('src', 'assets/img/abrir.svg');
            $('#solu').animate({
              'margin-top': "150px"
            }, 200);
            $('#text2').css({
              visibility: "hidden",
              display: "none"
            });
            $('#text3').css({
              visibility: "hidden",
              display: "none"
            });
            $('#saiba2').css({
              display: "none"
            });
          }
        });
      });
    } else if (mqls[8].matches) {
      $(document).ready(function () {


        $("#mais").click(function (e) {
          e.preventDefault();
          if ($("#paco").height() == 500) {
            $('#paco').animate({
              height: "60px",
              width: "480px"
            }, 200);
            $('#paco').css("background-color", "gray");
            $('#saiba').css({
              display: "none"
            });
            $('#mais').attr('src', 'assets/img/abrir.svg');
            $('#img-espaco').attr('src', 'assets/img/recifeantigo.png');
            $('#solu').animate({
              'margin-top': "150px"
            }, 200);
            $('#text').css({
              visibility: "hidden",
              display: "none"
            });
            $('#text1').css({
              visibility: "hidden",
              display: "none"
            });

          } else {
            $('#paco').animate({
              height: "500px",
              width: "480px"
            }, 200);
            $('#paco').css("background-color", "#000");
            $('#saiba').css({
              display: "block"
            });
            $("#mais").attr('src', 'assets/img/menos.svg');
            $('#solu').css({
              'margin-top': "550px"
            });
            $('#text').css({
              visibility: "visible",
              display: "block"
            });
            $('#text1').css({
              visibility: "visible",
              display: "block"
            });


            $('#paco2').css({
              height: "60px"
            });
            $('#paco2').css({
              'background-color': 'gray'
            })
            $('#mais2').attr('src', 'assets/img/abrir.svg');
            $('#saiba2').css({
              display: 'none'
            });
          }

        });

        $("#mais2").click(function (e) {
          e.preventDefault();
          if ($("#paco2").height() == 60) {
            $('#paco2').animate({
              height: "500px",
              width: "480px"
            }, 200);
            $('#paco2').css("background-color", "black");
            $('#saiba2').css({
              display: "block"
            });
            $('#mais2').attr('src', 'assets/img/menos.svg');
            $('#img-espaco').attr('src', 'assets/img/rio_branco.png');
            $('#solu').css({
              'margin-top': "550px"
            });
            $('#text2').css({
              visibility: "visible",
              display: "block"
            });
            $('#text3').css({
              visibility: "visible",
              display: "block"
            });

            $('#paco').css({
              height: "60px"
            });
            $('#paco').css({
              'background-color': 'gray'
            })
            $('#mais').attr('src', 'assets/img/abrir.svg');
            $('#saiba').css({
              display: 'none'
            });

          } else {
            $('#paco2').animate({
              height: "60px",
              width: "480px"
            }, 200);
            $('#paco2').css("background-color", "gray");
            $('#saiba2').css({
              display: "none"
            });
            $("#mais2").attr('src', 'assets/img/abrir.svg');
            $('#solu').animate({
              'margin-top': "150px"
            }, 200);
            $('#text2').css({
              visibility: "hidden",
              display: "none"
            });
            $('#text3').css({
              visibility: "hidden",
              display: "none"
            });
            $('#saiba2').css({
              display: "none"
            });
          }
        });
      });
    } else {

      $(document).ready(function () {


        $("#mais").click(function (e) {
          e.preventDefault();
          if ($("#paco").height() == 500) {
            $('#paco').animate({
              height: "60px",
              width: "80%"
            }, 200);
            $('#paco').css("background-color", "gray");
            $('#saiba').css({
              display: "none"
            });
            $('#mais').attr('src', 'assets/img/abrir.svg');
            $('#img-espaco').attr('src', 'assets/img/recifeantigo.png');
            $('#solu').animate({
              'margin-top': "150px"
            }, 200);
            $('#text').css({
              visibility: "hidden",
              display: "none"
            });
            $('#text1').css({
              visibility: "hidden",
              display: "none"
            });

          } else {
            $('#paco').animate({
              height: "500px",
              width: "80%"
            }, 200);
            $('#paco').css("background-color", "#000");
            $('#saiba').css({
              display: "block"
            });
            $("#mais").attr('src', 'assets/img/menos.svg');
            $('#solu').css({
              'margin-top': "550px"
            });
            $('#text').css({
              visibility: "visible",
              display: "block"
            });
            $('#text1').css({
              visibility: "visible",
              display: "block"
            });


            $('#paco2').css({
              height: "60px"
            });
            $('#paco2').css({
              'background-color': 'gray'
            })
            $('#mais2').attr('src', 'assets/img/abrir.svg');
            $('#saiba2').css({
              display: 'none'
            });
          }

        });

        $("#mais2").click(function (e) {
          e.preventDefault();
          if ($("#paco2").height() == 60) {
            $('#paco2').animate({
              height: "500px",
              width: "80%"
            }, 200);
            $('#paco2').css("background-color", "black");
            $('#saiba2').css({
              display: "block"
            });
            $('#mais2').attr('src', 'assets/img/menos.svg');
            $('#img-espaco').attr('src', 'assets/img/rio_branco.png');
            $('#solu').css({
              'margin-top': "550px"
            });
            $('#text2').css({
              visibility: "visible",
              display: "block"
            });
            $('#text3').css({
              visibility: "visible",
              display: "block"
            });

            $('#paco').css({
              height: "60px"
            });
            $('#paco').css({
              'background-color': 'gray'
            })
            $('#mais').attr('src', 'assets/img/abrir.svg');
            $('#saiba').css({
              display: 'none'
            });

          } else {
            $('#paco2').animate({
              height: "60px",
              width: "80%"
            }, 200);
            $('#paco2').css("background-color", "gray");
            $('#saiba2').css({
              display: "none"
            });
            $("#mais2").attr('src', 'assets/img/abrir.svg');
            $('#solu').animate({
              'margin-top': "150px"
            }, 200);
            $('#text2').css({
              visibility: "hidden",
              display: "none"
            });
            $('#text3').css({
              visibility: "hidden",
              display: "none"
            });
            $('#saiba2').css({
              display: "none"
            });
          }
        });
      });
    }
  }
  mqh();
});