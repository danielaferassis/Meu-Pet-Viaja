document.addEventListener("DOMContentLoaded", function () {
    let containerCidade = document.getElementById('container-cidade')
    let id = window.location.href.split('=')[1]
    if (id == null) {
        containerCidade.innerHTML = "<h1> 404 Cidade não encontrada</h1>"
    } else {
        fetch("http://localhost:3000/cidades")
            .then(response => response.json())
            .then(data => {
                var test = '';
                data.forEach(element => {
                    if (element.id == id) {
                        test = '<img src="'+element.imagem+'" style="width:100%; height:200px; object-fit:cover"><h2 id="top-dest">' + element.cidade + '</h2><p>'+element.detalhes+'</p>';
                        containerCidade.innerHTML = test;
                        swiperLoaderDest()
                    }
                });
            });
    }
})