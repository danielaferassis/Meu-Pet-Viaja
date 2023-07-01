let id;
document.addEventListener("DOMContentLoaded", function () {
    let containerEstabelecimento = document.getElementById('container-cidade');
    id = window.location.href.split('=')[1];
    if (id == null) {
        containerEstabelecimento.innerHTML = "<h1> 404 Estabelecimento não encontrado</h1>"
    } else {
        fetch("http://localhost:3000/cidades")
            .then(response => response.json())
            .then(data => {
                var test = '';
                data.forEach(element => {
                    if (element.id == id) {
                        test = '<img src="' + element.imagem + '" style="width:100%; height:200px; object-fit:cover"><h2 id="top-dest">' + element.cidade + '</h2><p>' + element.detalhes + '</p>';
                        containerEstabelecimento.innerHTML = test;
                    }
                });
            });
    }
})


document.addEventListener("DOMContentLoaded", function () {
    let wrapperEstabelecimentos = document.getElementById('slide-container-est')
    console.log('antes de chamar a api de est')
    let containerEstabelecimento = document.getElementById('container-cidade');
    id = window.location.href.split('=')[1];
    if (id == null) {
        containerEstabelecimento.innerHTML = "<h1> 404 Estabelecimento não encontrado</h1>"
    } else {
        fetch("http://localhost:3000/estabelecimentos")
            .then(response => response.json())
            .then(data => {
                data.forEach(element => {

                    console.log(element.id)
                    console.log(id)
                    if (element.id == id) {
                        console.log('entrei no if ' + id)
                        var est = '';
                        est = '<img src="' + element.foto + '" style="width:100%; height:200px; object-fit:cover"><h2 id="top-dest">' + element.nome + '</h2><p>' + element.descricao + '</p>';
                        containerEstabelecimento.innerHTML = est;
                        var test2 = '<div class="slide-content" id="estabelecimentos"><div class="card-wrapper swiper-wrapper" id="wrapper-estabelecimentos">';
                    }
                });
                test2 += '</div></div><div class="swiper-button-next swiper-navBtn" id="next-est"></div><div class="swiper-button-prev swiper-navBtn" id="prev-est"></div><div class="swiper-pagination" id="pag-est"></div>'
                wrapperEstabelecimentos.innerHTML = test2;
                swiperLoaderEst()
            });
        }
    })


//API Imgur para hospedar a foto
const clientID = "9facbf355e71bd0"
const fileUpload = document.getElementById("foto_depoimento");
const prev = document.getElementById("prev-foto-estabelecimento");
fileUpload.addEventListener("change", (event) => {
  const formData = new FormData();
  formData.append("image", event.target.files[0]);
  fetch("https://api.imgur.com/3/image", {
    method: "POST",
    headers: {
      Authorization: `Client-ID ${clientID}`,
    },
    body: formData,
  }).then(data => data.json()).then(data => {
    fileUpload.src = data.data.link;
    prev.innerHTML = '<img src="'+data.data.link+'" style="width: 200px; border-radius: 10px">'
    console.log(data);
  })
});
