document.addEventListener("DOMContentLoaded", function () {

  fetch("http://localhost:3000/estabelecimentos")
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById("container-est");
      const cardsWrap = container.querySelector(".swiper-wrapper");
      data.forEach(estabelecimento => {
        const card = document.createElement('div');
        card.classList.add('swiper-slide');

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


        info.appendChild(nome);

        card.appendChild(info);

        const foto = document.createElement('img');
        foto.src = estabelecimento.foto;
        foto.alt = estabelecimento.alt;

        card.appendChild(foto);

        // Adicionar evento de mouseover e mouseout
        card.addEventListener('mouseover', () => {
          descricao.style.display = 'block';
        });

        card.addEventListener('mouseout', () => {
          descricao.style.display = 'none';
        });

        const descricao = document.createElement('p');
        descricao.classList.add('description');
        descricao.textContent = estabelecimento.descricao;

        info.appendChild(nome);
        card.appendChild(info);
        card.appendChild(descricao);
        cardsWrap.appendChild(card);
      });

      // Inicialize o Swiper.js após adicionar todos os cards
      new Swiper('.slide-container', {
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
        scrollbar: {
          el: ".swiper-scrollbar",
          hide: true,
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
    })
    .catch(error => {
      console.error('Ocorreu um erro ao obter os dados do JSON ou inicializar o Swiper:', error);
    });

    
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

    fetch("http://localhost:3000/depoimentos")
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById("locais-wrap");
      const cardsWrap = container.querySelector(".locais-wrap");
      data.forEach(depoimento => {
        const card = document.createElement('div');
        card.classList.add('local');

        const fotoDiv = document.createElement('div');
        fotoDiv.classList.add('local_img');
        const foto = document.createElement('img');
        foto.src = depoimento.foto;
        foto.alt = depoimento.alt;

        fotoDiv.appendChild(foto);
        card.appendChild(fotoDiv);

        const nota = document.createElement('div');
        nota.classList.add('nota');
      
        
        var i = depoimento.nota;

        for (var j = 1; j <= i; j++) {
      
          var icon = document.createElement('i');
          icon.classList.add('fa-solid', 'fa-paw');
          nota.appendChild(icon);
          card.appendChild(nota);
        }

        const nome = document.createElement('div');
        nome.classList.add('nome');
        const nomeUsuario = document.createElement('h3');
        nomeUsuario.textContent = depoimento.nome;
        const avaliacao = document.createElement('p');
        avaliacao.textContent = depoimento.avaliacao;

        card.appendChild(nome);
        nome.appendChild(nomeUsuario);
        nome.appendChild(avaliacao);
        console.log(card);
        
       cardsWrap.appendChild(card);

      });
    });
    
    
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



