let wrapperDestinos = document.getElementById('wrapper-destinos')
fetch("http://localhost:3000/cidades")
    .then(response => response.json())
    .then(data => {
        var test = '';
        data.forEach(element => {
            console.log(element)
            test += '<div class="container-est card swiper-slide" cidade="' + element.cidade + '"> <img src="' + element.imagem + '" alt="' + element.alt + '" class="image"><div class="overlay"><div class="text"><a href="cidade.html?id='+element.id+'">' + element.cidade + '</a><p><a href="cidade.html?id='+element.id+'">' + element.detalhes.substr(0, 50) + "..." + '</a></p></div></div></div>';
        });
        wrapperDestinos.innerHTML = test;
        swiperLoaderDest()
    });

document.addEventListener("DOMContentLoaded", function () {
    let wrapperEstabelecimentos = document.getElementById('wrapper-estabelecimentos')
    fetch("http://localhost:3000/estabelecimentos")
        .then(response => response.json())
        .then(data => {
            var test2 = '';
            data.forEach(element => {
                console.log(element)
                test2 += '<div class="container-est card swiper-slide" cidade="' + element.cidade + '" nome="' + element.nome + '"> <img src="' + element.imagem + '" alt="' + element.alt + '" class="image"><div class="overlay"><div class="text"><a href="#">' + element.nome + '</a><p>' + element.detalhes.substr(0, 50) + "..." + '</p></div></div></div>';
                console.log(test2)
            });
            wrapperEstabelecimentos.innerHTML = test2;
            swiperLoaderEst()
        });
});

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
    let input = document.getElementById('ibusca').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('container-est');
    let filtro = document.getElementById('filtro');

    if (filtro.value.toLowerCase() == 'cidade') {
        for (i = 0; i < x.length; i++) {
            console.log(x[i].getAttribute('cidade'))
            if (x[i].getAttribute('cidade') != null) {
                if (!x[i].getAttribute('cidade').toLowerCase().includes(input)) {
                    x[i].style.display = 'none';
                }
                else {
                    x[i].style.display = 'flex';
                }
            }
        }
    } else {
        for (i = 0; i < x.length; i++) {
            if (x[i].getAttribute('nome') != null) {
                if (!x[i].getAttribute('nome').toLowerCase().includes(input)) {
                    x[i].style.display = 'none';
                }
                else {
                    x[i].style.display = 'flex';
                }
            }
        }
    }
    swiperLoader()
}

function swiperLoaderDest() {
    console.log("comecei o swiper")
    var swiperDest = new Swiper("#destinos", {
        slidesPerView: 3,
        spaceBetween: 25,
        loop: true,
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
        loop: true,
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