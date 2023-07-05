function montaSwiper(cidade, nome, foto, alt, descricao, id, tipo) {
    return `
  <div class="swiper-slide">
    <div class="card card-estabelecimento">
      <div class="container-est" data-id="${id}">
      <img src="${foto}" alt="${alt}">
        <div class="overlay">
          <div class="text">
            <h4>${nome}</h4>
            <p>${descricao.substring(0, 50)}...</p>
          </div>
        </div>
      </div>
      <div class="card-info" data-cidade-id="${cidade}">
        <h3 class="hidden">${cidade}</h3>
        <span class="hidden" data-id="${tipo}">${tipo}</span>
      </div>
    </div>
  </div>
`;
};

let cardsEstabelecimento;
let cardsCidade;
let cidadeSelecionada;
let selectCidade;
let selectTipoEstabelecimento;
let tipoEstabelecimentoSelecionado;

function getCidadePorID(idCidade) {
    return fetch(`http://db-json-kp7o.vercel.app/cidades/${idCidade}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro ao obter os dados da cidade: ${response.status} ${response.statusText}`);
            }
            return response.json();
        })
        .then(cidade => {
            return cidade;
        })
        .catch(error => {
            console.error('Erro ao obter os dados da cidade:', error);
            return null;
        });
};

async function verificarCidadeExistente(idCidade) {
    try {
        const response = await fetch(`http://db-json-kp7o.vercel.app/cidades/${idCidade}`);
        return response.ok;
    } catch (error) {
        console.error('Erro ao verificar a existência da cidade:', error);
        return false;
    }
};

async function filtrarCards(cidadeId) {
    cidadeSelecionada = cidadeId; // Atribuir o valor selecionado do filtro de cidade à variável global

    cardsEstabelecimento = Array.from(document.getElementsByClassName("card-estabelecimento"));

    cardsEstabelecimento.forEach(card => {
        const cidadeCardId = card.querySelector('.card-info').dataset.cidadeId;
        getCidadePorID(cidadeCardId)
            .then(cidadeCard => {
                verificarFiltro(cidadeCard, cidadeSelecionada);
            })
            .catch(error => {
                console.error('Erro ao obter os dados da cidade:', error);
                card.style.display = "none";
            });
    });

    function verificarFiltro(cidadeCard, cidadeId) {
        const estabelecimentos = document.querySelectorAll('.card-estabelecimento');
        estabelecimentos.forEach(estabelecimento => {
            const cidadeCardId = estabelecimento.querySelector('.card-info').dataset.cidadeId;
            if (cidadeId === null || cidadeId === "0" || cidadeCardId === cidadeId) {
                estabelecimento.style.display = "block";
            } else {
                estabelecimento.remove();
            }
        });
    }

    cardsCidade = Array.from(document.querySelectorAll("#wrapper-destinos .container-est"));
    cardsCidade.forEach(card => {
        const cidadeId = card.getAttribute('data-id');
        card.style.display = (cidadeId === cidadeSelecionada || cidadeSelecionada === "0") ? "block" : "none";
        card.addEventListener('click', function () {
            window.location.href = `cidade.html?id=${cidadeId}`;
        });
    });

    // Exibir todos os cards de estabelecimento
    cardsEstabelecimento.forEach(card => {
        card.style.display = "block";
    });
};

async function search_destino() {
    selectCidade = document.getElementById("ibusca");
    cidadeSelecionada = selectCidade.value;

    filtrarCards(cidadeSelecionada);
};

function getCardsEstabelecimento() {
    cardsEstabelecimento = document.getElementsByClassName("card-estabelecimento");
};

function inicializarFiltro() {
    getCardsEstabelecimento();
    selectCidade = document.getElementById("ibusca");
    cidadeSelecionada = selectCidade.value; // Atribuir o valor selecionado do filtro de cidade à variável global
    filtrarCards(cidadeSelecionada);

    // Exibir todos os cards de cidade
    cardsCidade.forEach(card => {
        card.style.display = "block";
    });

    // Exibir todos os cards de estabelecimento
    cardsEstabelecimento.forEach(card => {
        card.style.display = "block";
    });
};
inicializarFiltro();

async function search_destino_tipo_estabelecimento() {
    selectTipoEstabelecimento = document.getElementById("ibusca_tipo_estabelecimento");
    let tipoEstabelecimentoSelecionado = selectTipoEstabelecimento.value;

    console.log('Tipo de estabelecimento selecionado:', tipoEstabelecimentoSelecionado);

    cidadeSelecionada = document.getElementById("idbusca").value;

    filtrarCardsTipoEstabelecimento(tipoEstabelecimentoSelecionado, cidadeSelecionada);
};

function filtrarCardsTipoEstabelecimento(tipoEstabelecimentoSelecionado, cidadeSelecionada) {
    const selectTipoEstabelecimento = document.getElementById("ibusca_tipo_estabelecimento");
    const tipoEstabelecimentoSelecionadoId = parseInt(selectTipoEstabelecimento.options[selectTipoEstabelecimento.selectedIndex].dataset.id);

    const cardsEstabelecimento = Array.from(document.getElementsByClassName("card-estabelecimento"));
    const swiperContainer = document.getElementById("slide-container-est");
    const swiperWrapper = swiperContainer.querySelector(".swiper-wrapper");
    const cardsCidade = Array.from(document.querySelectorAll("#wrapper-destinos .container-est"));

    cardsEstabelecimento.forEach(card => {
        const tipoEstabelecimentoCardId = parseInt(card.querySelector('.card-info span').dataset.id);
        const cidadeCardId = parseInt(card.querySelector('.card-info').dataset.cidadeId);

        const isTipoEstabelecimentoSelecionado = parseInt(tipoEstabelecimentoSelecionado) === 0 || tipoEstabelecimentoCardId === parseInt(tipoEstabelecimentoSelecionadoId);
        const isCidadeSelecionada = cidadeSelecionada === "" || (cidadeCardId === parseInt(cidadeSelecionada) && parseInt(cidadeSelecionada) !== 0);

        if (isTipoEstabelecimentoSelecionado && isCidadeSelecionada) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });

    cardsCidade.forEach(card => {
        const cidadeId = parseInt(card.getAttribute('data-id'));
        const cardEstabelecimentos = Array.from(card.querySelectorAll('.card-estabelecimento'));
        const hasVisibleEstabelecimentos = cardEstabelecimentos.some(estabelecimento => estabelecimento.style.display !== "none");

        if (cidadeId === parseInt(cidadeSelecionada) || cidadeSelecionada === "0" || hasVisibleEstabelecimentos) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });

    // Remove os cards que estão ocultos do swiper
    const swiperSlides = Array.from(swiperWrapper.getElementsByClassName("swiper-slide"));
    swiperSlides.forEach(slide => {
        const card = slide.querySelector(".card-estabelecimento");
        if (card && card.style.display === "none") {
            slide.remove();
        }
    });

    // Reorganiza os cards visíveis para o início do swiper
    const visibleSlides = Array.from(swiperWrapper.getElementsByClassName("swiper-slide"));
    visibleSlides.forEach(slide => {
        swiperWrapper.prepend(slide);
    });

    // Destruir o swiper atual
    if (swiperContainer.swiper) {
        swiperContainer.swiper.destroy();
    }

    // Criar um novo swiper com as configurações necessárias
    const newSwiper = new Swiper(swiperContainer, {
        spaceBetween: 10,
    });
};

function executarFiltros(cidadeSelecionada, tipoEstabelecimentoSelecionado) {
    console.log('Cidade selecionada:', cidadeSelecionada);
    console.log('Tipo de estabelecimento selecionado:', tipoEstabelecimentoSelecionado);
    filtrarCardsTipoEstabelecimento(tipoEstabelecimentoSelecionado, cidadeSelecionada);
};

const btnFiltrar = document.getElementById("btnFiltrar");
selectCidade = document.getElementById("ibusca");
selectTipoEstabelecimento = document.getElementById("ibusca_tipo_estabelecimento");

btnFiltrar.addEventListener('click', function () {
    cidadeSelecionada = selectCidade.value;
    tipoEstabelecimentoSelecionado = selectTipoEstabelecimento.value;

    console.log('Botão Filtrar clicado');
    console.log('Cidade selecionada:', cidadeSelecionada);
    console.log('Tipo de estabelecimento selecionado:', tipoEstabelecimentoSelecionado);

    if (cidadeSelecionada && tipoEstabelecimentoSelecionado) {
        executarFiltros(cidadeSelecionada, tipoEstabelecimentoSelecionado);
    } else if (cidadeSelecionada) {
        console.log('Apenas o filtro de cidade selecionado');
        filtrarCards(cidadeSelecionada);
    } else if (tipoEstabelecimentoSelecionado) {
        console.log('Apenas o filtro de tipo de estabelecimento selecionado');
        filtrarCardsTipoEstabelecimento(tipoEstabelecimentoSelecionado, cidadeSelecionada);
    }
});

document.addEventListener('DOMContentLoaded', function () {
    fetch("http://db-json-kp7o.vercel.app/cidades")
        .then(response => response.json())
        .then(data => {
            let wrapperDestinos = document.getElementById('slide-container');
            let cidadeFilter = '<option value="">Selecione a cidade desejada:</option>';

            var cidadeCarrosel = '<div class="slide-content" id="destinos"><div class="card-wrapper swiper-wrapper" id="wrapper-destinos">';

            data.forEach(element => {
                cidadeCarrosel += '<div class="container-est card swiper-slide" cidade="' + element.cidade + '" data-id="' + element.id + '" > <img src="' + element.imagem + '" alt="' + element.alt + '" class="image"><div class="overlay"><div class="text"><a href="cidade.html?id=' + element.id + '">' + element.cidade + '</a><p><a href="cidade.html?id=' + element.id + '">' + element.detalhes.substr(0, 50) + "..." + '</a></p></div></div></div>';
                cidadeFilter += '<option value="' + element.id + '">' + element.cidade + '</option>';
            });

            cidadeCarrosel += '</div></div><div class="swiper-button-next swiper-navBtn" id="next-dest"></div><div class="swiper-button-prev swiper-navBtn" id="prev-dest"></div><div class="swiper-pagination" id="pag-dest"></div>';
            wrapperDestinos.innerHTML = cidadeCarrosel;

            // Atualiza o select de cidades
            let wrapperFilter = document.getElementById('ibusca');
            wrapperFilter.innerHTML = cidadeFilter;

            swiperLoaderDest();

            // Adiciona evento de clique aos cards de cidade
            const cardsCidade = document.querySelectorAll("#wrapper-destinos .container-est");
            Array.from(cardsCidade).forEach(card => {
                const cidade = card.getAttribute('cidade');
                card.addEventListener('click', function () {
                    window.location.href = `cidade.html?id=${element.id}`;
                });
            });
        });

    fetch("https://db-json-kp7o.vercel.app/tipo-estabelecimento")
        .then(response => response.json())
        .then(data => {
            let wrapperFilterTipoEstabelecimento = document.getElementById('ibusca_tipo_estabelecimento');
            let tipoEstabelecimentoFilter = '<option value="">Selecione o tipo de estabelecimento desejado:</option>';

            data.forEach(element => {
                tipoEstabelecimentoFilter += '<option value="' + element.id + '" data-id="' + element.id + '">' + element.tipo + '</option>';
            });

            wrapperFilterTipoEstabelecimento.innerHTML = tipoEstabelecimentoFilter;
        });


    // Popula os cards de estabelecimentos
    let wrapperEstabelecimentos = document.getElementById('slide-container-est');
    fetch("https://db-json-kp7o.vercel.app/estabelecimentos")
        .then(response => response.json())
        .then(data => {
            var test2 = '<div class="slide-content" id="estabelecimentos"><div class="card-wrapper swiper-wrapper" id="wrapper-estabelecimentos">';
            data.forEach(element => {
                const card = montaSwiper(element.cidade, element.nome, element.foto, element.alt, element.descricao, element.id, element.tipo);
                test2 += card;

            });
            test2 += '</div></div><div class="swiper-button-next swiper-navBtn" id="next-est"></div><div class="swiper-button-prev swiper-navBtn" id="prev-est"></div><div class="swiper-pagination" id="pag-est"></div>';
            wrapperEstabelecimentos.innerHTML = test2;

            cardsEstabelecimento = wrapperEstabelecimentos.querySelectorAll(".swiper-slide .container-est");

            swiperLoaderEst();

            // Adiciona evento de clique aos cards
            const cards = document.getElementsByClassName('card');
            Array.from(cards).forEach(card => {
                card.addEventListener('click', function () {
                    const estabelecimentoId = card.querySelector('.container-est').getAttribute('data-id');
                    window.location.href = `estabelecimento.html?id=${estabelecimentoId}`;;
                });
            });

        });


});









