
document.addEventListener('DOMContentLoaded', function() {

  sessionStorage.removeItem('IsThisFirstTime_Log_From_LiveServer');
  
  if(Object.keys(sessionStorage).length === 0){
    const divEsconder = document.getElementById('usuarioLogado');
    if(divEsconder){
      divEsconder.style.display = 'none';
    }
  }

  const dadosRecuperadosString = sessionStorage.getItem('Dados');
  const dadosRecuperados = JSON.parse(dadosRecuperadosString);
  const valorPrimeiraLetraMaiuscula = dadosRecuperados.nome.charAt(0).toUpperCase() + dadosRecuperados.nome.slice(1);
  const frase = 'Olá, ';

   if(dadosRecuperados.status === "true"){
    const nomeUsuario = document.querySelector('h6');
    nomeUsuario.innerHTML = '';
    nomeUsuario.innerHTML = frase + valorPrimeiraLetraMaiuscula;
  }
});

function deslogar() {
// Limpar o sessionStorage e remover todos os dados
sessionStorage.clear();
if(Object.keys(sessionStorage).length === 0){
  const divEsconder = document.getElementById('usuarioLogado');
  if(divEsconder){
    divEsconder.style.display = 'none';
  }
}
}

function ajustarLayout() {
const larguraJanela = window.innerWidth;

if (larguraJanela >= 240 && larguraJanela <= 615) {
  const divUsuarioLogado = document.getElementById('usuarioLogado');
  const navbarContent = document.getElementById('navbarToggleExternalContent');

  if (divUsuarioLogado && navbarContent) {
    navbarContent.insertBefore(divUsuarioLogado, navbarContent.firstChild);
  }
}
}

// Chamar a função quando a página carregar e quando a janela for redimensionada
window.addEventListener('load', ajustarLayout);
window.addEventListener('resize', ajustarLayout);


const iconeDeslogar = document.getElementById('iconeDeslogar');
iconeDeslogar.addEventListener('click', deslogar);
var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
  });


  