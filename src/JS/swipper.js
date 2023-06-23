function montaSwiper(cidade, nome, foto, alt, desc, id){
    return '<div class="container-est card swiper-slide" cidade="' + cidade + '" nome="' + nome + '"> <img src="' + foto + '" alt="' + alt + '" class="image"><div class="overlay"><div class="text"><a href="estabelecimento.html?id='+id+'">' + nome + '</a><p>' + desc.substr(0, 50) + "..." + '</p></div></div></div>';
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