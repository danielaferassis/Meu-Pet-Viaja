document.addEventListener("DOMContentLoaded", function () {
    fetch("http://localhost:3000/cidades")
        .then(response => response.json())
        .then(data => {
            let wrapperDestinos = document.getElementById('slide-container')
            let wrapperFilter = document.getElementById('ibusca')
            var cidadeCarrosel = '<div class="slide-content" id="destinos"><div class="card-wrapper swiper-wrapper" id="wrapper-destinos">';
            var cidadeFilter = '<select class="filter" name="filtro" id="ibusca" required oninput="search_destino()"><option value="cidade" onclick="setFilterType()">Selecione a cidade desejada:</option>';
            data.forEach(element => {
                cidadeCarrosel += '<div class="container-est card swiper-slide" cidade="' + element.cidade + '"> <img src="' + element.imagem + '" alt="' + element.alt + '" class="image"><div class="overlay"><div class="text"><a href="cidade.html?id=' + element.id + '">' + element.cidade + '</a><p><a href="cidade.html?id=' + element.id + '">' + element.detalhes.substr(0, 50) + "..." + '</a></p></div></div></div>';
                cidadeFilter += '<option value="' + element.cidade + '" onclick="setFilterType()">' + element.cidade + '</option>';
            });
            cidadeCarrosel += '</div></div><div class="swiper-button-next swiper-navBtn" id="next-dest"></div><div class="swiper-button-prev swiper-navBtn" id="prev-dest"></div><div class="swiper-pagination" id="pag-dest"></div>'
            wrapperDestinos.innerHTML = cidadeCarrosel;
            cidadeFilter += '</select>';
            wrapperFilter.innerHTML = cidadeFilter;
            swiperLoaderDest()
        });
});

document.addEventListener("DOMContentLoaded", function(){
    let wrapperEstabelecimentos = document.getElementById('slide-container-est')
    fetch("http://localhost:3000/estabelecimentos")
        .then(response => response.json())
        .then(data => {
            var test2 = '<div class="slide-content" id="estabelecimentos"><div class="card-wrapper swiper-wrapper" id="wrapper-estabelecimentos">';
            console.log(data)
            data.forEach(element => {
                test2 += '<div class="container-est card swiper-slide" cidade="' + element.cidade + '" nome="' + element.nome + '"> <img src="' + element.foto + '" alt="' + element.alt + '" class="image"><div class="overlay"><div class="text"><a href="#">' + element.nome + '</a><p>' + element.descricao.substr(0, 50) + "..." + '</p></div></div></div>';
            });
            test2 += '</div></div><div class="swiper-button-next swiper-navBtn" id="next-est"></div><div class="swiper-button-prev swiper-navBtn" id="prev-est"></div><div class="swiper-pagination" id="pag-est"></div>'
            wrapperEstabelecimentos.innerHTML = test2;
            swiperLoaderEst()
        });
})


function setFilterType() {
    if (filtro.value.toLowerCase() == 'cidade') {
        document.getElementById('wrapper-destinos').style.display = 'flex';
        document.getElementById('top-dest').style.display = 'block';
    } else {
        document.getElementById('wrapper-destinos').style.display = 'none';
        document.getElementById('top-dest').style.display = 'none';
    }
}

function search_destino() {
    let input = document.getElementById('ibusca').value;
    input = input.toLowerCase();
    fetch("http://localhost:3000/cidades")
        .then(response => response.json())
        .then(data => {
            let wrapperDestinos = document.getElementById('slide-container')
            var cidadeCarrosel = '<div class="slide-content" id="destinos"><div class="card-wrapper swiper-wrapper" id="wrapper-destinos">';
            let n = 0;
            data.forEach(element => {
                console.log('===========> antes do carrosel ' + element.cidade.toLowerCase())
                if (element.cidade.toLowerCase() == input) {
                    console.log('===========> entrei no se do carrosel' + input)
                    cidadeCarrosel += '<div class="container-est card swiper-slide" cidade="' + element.cidade + '"> <img src="' + element.imagem + '" alt="' + element.alt + '" class="image"><div class="overlay"><div class="text"><a href="cidade.html?id=' + element.id + '">' + element.cidade + '</a><p><a href="cidade.html?id=' + element.id + '">' + element.detalhes.substr(0, 50) + "..." + '</a></p></div></div></div>';
                    n++
                }
                if ('cidade' == input) {
                    console.log('===========> entrei no se do carrosel' + input)
                    cidadeCarrosel += '<div class="container-est card swiper-slide" cidade="' + element.cidade + '"> <img src="' + element.imagem + '" alt="' + element.alt + '" class="image"><div class="overlay"><div class="text"><a href="cidade.html?id=' + element.id + '">' + element.cidade + '</a><p><a href="cidade.html?id=' + element.id + '">' + element.detalhes.substr(0, 50) + "..." + '</a></p></div></div></div>';
                    n++
                }
            });
            cidadeCarrosel += '</div></div><div class="swiper-button-next swiper-navBtn" id="next-dest"></div><div class="swiper-button-prev swiper-navBtn" id="prev-dest"></div><div class="swiper-pagination" id="pag-dest"></div>'
            console.log(cidadeCarrosel)
            wrapperDestinos.innerHTML = cidadeCarrosel;
            console.log(wrapperDestinos)
            swiperLoaderDest()
        });
}


function swiperLoaderDest() {
    console.log("comecei o swiper")
    let swiperDest = new Swiper("#destinos", {
        slidesPerView: 3,
        spaceBetween: 25,
        loop: false,
        centerSlide: 'true',
        fade: 'true',
        grabCursor: 'true',
        pagination: {
            el: "#pag-dest",
            clickable: true,
            dynamicBullets: true,
        },
        navigation: {
            nextEl: "#next-dest",
            prevEl: "#prev-dest",
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
    })

}

function swiperLoaderEst() {
    var swiperEst = new Swiper("#estabelecimentos", {
        slidesPerView: 3,
        spaceBetween: 25,
        loop: false,
        centerSlide: 'true',
        fade: 'true',
        grabCursor: 'true',
        pagination: {
            el: "#pag-est",
            clickable: true,
            dynamicBullets: true,
        },
        navigation: {
            nextEl: "#next-est",
            prevEl: "#prev-est",
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
    })
}