document.addEventListener("DOMContentLoaded", function () {
  fetch("http://localhost:3000/estabelecimentos")
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById("container-est");
      const cardsWrap = container.querySelector(".cards-wrap");
      data.forEach(estabelecimento => {
        const card = document.createElement('div');
        card.classList.add('card');

        const foto = document.createElement('img');
        foto.src = estabelecimento.foto;
        foto.alt = estabelecimento.alt;

        card.appendChild(foto);

        const arrow = document.createElement('div');
        arrow.classList.add('arrow');
        const span = document.createElement('span');
        const icon = document.createElement('i');
        icon.classList.add('fa-solid', 'fa-paw');

        card.appendChild(arrow);
        arrow.appendChild(span);
        span.appendChild(icon);


        // Adicionar evento de mouseover e mouseout
        card.addEventListener('mouseover', () => {
          descricao.style.display = 'block';
          info.style.display = 'block';

        });

        card.addEventListener('mouseout', () => {
          descricao.style.display = 'none';
          info.style.display = 'none';
        });

        const info = document.createElement('div');
        info.classList.add('info');
        const nome = document.createElement('h2');
        nome.textContent = estabelecimento.nome;
        const tipo = document.createElement('p');
        tipo.textContent = estabelecimento.tipo;
      
        const descricao = document.createElement('p');
        descricao.classList.add('description');
        descricao.textContent = estabelecimento.descricao;

        info.appendChild(nome);
        info.appendChild(tipo);
        card.appendChild(info);
        card.appendChild(descricao);

        cardsWrap.appendChild(card);
      });
    })
    .catch(error => {
      console.error('Ocorreu um erro ao obter os dados do JSON:', error);
    });
});



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

  if(dadosRecuperados.status === "true"){
    const esconderEntre = document.getElementById('entre');
      if(esconderEntre){
        esconderEntre.style.display = 'none';
      }
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
    const esconderEntre = document.getElementById('entre');
      if(esconderEntre){
        esconderEntre.style.display = 'block';
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
  breakpoints: {
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



