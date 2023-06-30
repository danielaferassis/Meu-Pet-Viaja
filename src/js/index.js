document.addEventListener("DOMContentLoaded", function () {
  fetch("http://localhost:3000/estabelecimentos")
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById("container-est");
      const cardsWrap = container.querySelector(".cards-wrap");
      data.forEach(estabelecimento => {
        const card = document.createElement('div');
        card.classList.add('card');

        const arrow = document.createElement('div');
        arrow.classList.add('arrow');
        const span = document.createElement('span');
        const icon = document.createElement('i');
        icon.classList.add('fa-solid', 'fa-paw');
        span.appendChild(icon);
        arrow.appendChild(span);
        card.appendChild(arrow);

        const info = document.createElement('div');
        info.classList.add('info');
        const nome = document.createElement('h2');
        nome.textContent = estabelecimento.nome;
        const tipo = document.createElement('p');
        tipo.textContent = estabelecimento.tipo;

        info.appendChild(nome);
        info.appendChild(tipo);

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

        card.appendChild(descricao);

        cardsWrap.appendChild(card);
      });
    })
    .catch(error => {
      console.error('Ocorreu um erro ao obter os dados do JSON:', error);
    });
});








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



