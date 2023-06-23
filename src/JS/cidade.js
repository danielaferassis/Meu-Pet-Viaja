let id;
document.addEventListener("DOMContentLoaded", function () {
    let containerCidade = document.getElementById('container-cidade');
    id = window.location.href.split('=')[1];
    if (id == null) {
        containerCidade.innerHTML = "<h1> 404 Cidade não encontrada</h1>"
    } else {
        fetch("http://localhost:3000/cidades")
            .then(response => response.json())
            .then(data => {
                var test = '';
                data.forEach(element => {
                    if (element.id == id) {
                        test = '<img src="' + element.imagem + '" style="width:100%; height:200px; object-fit:cover"><h2 id="top-dest">' + element.cidade + '</h2><p>' + element.detalhes + '</p>';
                        containerCidade.innerHTML = test;
                    }
                });
            });
    }
})


document.addEventListener("DOMContentLoaded", function () {
    let wrapperEstabelecimentos = document.getElementById('slide-container-est')
    console.log('antes de chamar a api de est')
    fetch("http://localhost:3000/estabelecimentos")
        .then(response => response.json())
        .then(data => {
            var test2 = '<div class="slide-content" id="estabelecimentos"><div class="card-wrapper swiper-wrapper" id="wrapper-estabelecimentos">';
            console.log(data)
            data.forEach(element => {

                console.log(element.cidade)
                console.log(id)
                if (element.cidade == id) {

                    console.log('dentro do if')
                    test2 += montaSwiper(element.cidade, element.nome, element.foto, element.alt, element.descricao, element.id);
                }
            });
            test2 += '</div></div><div class="swiper-button-next swiper-navBtn" id="next-est"></div><div class="swiper-button-prev swiper-navBtn" id="prev-est"></div><div class="swiper-pagination" id="pag-est"></div>'
            wrapperEstabelecimentos.innerHTML = test2;
            swiperLoaderEst()
        });
})