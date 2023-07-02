// let id;
// document.addEventListener("DOMContentLoaded", function () {
//     let containerEstabelecimento = document.getElementById('container-cidade');
//     id = window.location.href.split('=')[1];
//     if (id == null) {
//         containerEstabelecimento.innerHTML = "<h1> 404 Estabelecimento não encontrado</h1>"
//     } else {
//         fetch("http://localhost:3000/cidades")
//             .then(response => response.json())
//             .then(data => {
//                 var test = '';
//                 data.forEach(element => {
//                     if (element.id == id) {
//                         test = '<img src="' + element.imagem + '" style="width:100%; height:200px; object-fit:cover"><h2 id="top-dest">' + element.cidade + '</h2><p>' + element.detalhes + '</p>';
//                         containerEstabelecimento.innerHTML = test;
//                     }
//                 });
//             });
//     }
// })


// document.addEventListener("DOMContentLoaded", function () {
//     let wrapperEstabelecimentos = document.getElementById('slide-container-est')
//     console.log('antes de chamar a api de est')
//     let containerEstabelecimento = document.getElementById('container-cidade');
//     id = window.location.href.split('=')[1];
//     if (id == null) {
//         containerEstabelecimento.innerHTML = "<h1> 404 Estabelecimento não encontrado</h1>"
//     } else {
//         fetch("http://localhost:3000/estabelecimentos")
//             .then(response => response.json())
//             .then(data => {
//                 data.forEach(element => {

//                     console.log(element.id)
//                     console.log(id)
//                     if (element.id == id) {
//                         console.log('entrei no if ' + id)
//                         var est = '';
//                         est = '<img src="' + element.foto + '" style="width:100%; height:200px; object-fit:cover"><h2 id="top-dest">' + element.nome + '</h2><p>' + element.descricao + '</p>';
//                         containerEstabelecimento.innerHTML = est;
//                         var test2 = '<div class="slide-content" id="estabelecimentos"><div class="card-wrapper swiper-wrapper" id="wrapper-estabelecimentos">';
//                     }
//                 });
//                 test2 += '</div></div><div class="swiper-button-next swiper-navBtn" id="next-est"></div><div class="swiper-button-prev swiper-navBtn" id="prev-est"></div><div class="swiper-pagination" id="pag-est"></div>'
//                 wrapperEstabelecimentos.innerHTML = test2;
//                 swiperLoaderEst()
//             });
//         }
//     })


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
        prev.innerHTML = '<img src="' + data.data.link + '" style="width: 200px; border-radius: 10px">'
        console.log(data);
    })
});

// Função para fazer uma requisição HTTP e retornar os dados como JSON
async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

document.addEventListener("DOMContentLoaded", function () {
    const containerEstabelecimento = document.getElementById('container-cidade');
    const id = new URLSearchParams(window.location.search).get('id'); // Obtenha o ID do estabelecimento da URL

    if (id == null) {
        containerEstabelecimento.innerHTML = "<h1>404 Estabelecimento não encontrado</h1>";
    } else {
        const cidadesURL = "http://localhost:3000/cidades";
        const tipoEstabelecimentoURL = "http://localhost:3000/tipo-estabelecimento";

        // Aguardar o retorno das requisições
        Promise.all([fetchData(cidadesURL), fetchData(tipoEstabelecimentoURL)])
            .then(([cidades, tipoEstabelecimento]) => {
                const data = {
                    "cidades": cidades,
                    "tipo-estabelecimento": tipoEstabelecimento
                };

                function getCidadeNameById(id) {
                    console.log("Cidades:", data['cidades']);
                    const cidade = data['cidades'].find(cidade => cidade.id === parseInt(id));
                    return cidade ? cidade.cidade : null;
                  }

                // Função auxiliar para obter o tipo de estabelecimento pelo ID
                function getTipoEstabelecimentoById(id) {
                    const tipo = data['tipo-estabelecimento'].find(tipo => tipo.id === parseInt(id));
                    return tipo ? tipo.tipo : null;
                }

                console.log("ID:", id); // Adicionado console.log para verificar o ID

                fetch(`http://localhost:3000/estabelecimentos/${id}`)
                    .then(response => response.json())
                    .then(estabelecimento => {
                        let est = `
                <img src="${estabelecimento.foto}" style="width:100%; height:200px; object-fit:cover">
                <h2 id="top-dest">${estabelecimento.nome}</h2>
                <p>${estabelecimento.descricao}</p>
              `;
                        // Obtenha o tipo de estabelecimento pelo ID e exiba na página
                        const tipoEstabelecimento = getTipoEstabelecimentoById(estabelecimento.tipo);
                        if (tipoEstabelecimento) {
                            est += `<p>Tipo: ${tipoEstabelecimento}</p>`;
                        }

                        if (estabelecimento.email) {
                            est += `<p>E-mail: ${estabelecimento.email}</p>`;
                        }
                        if (estabelecimento.telefone) {
                            est += `<p>Telefone: ${estabelecimento.telefone}</p>`;
                        }
                        if (estabelecimento.endereco) {
                            est += `<p>Endereço: ${estabelecimento.endereco}</p>`;
                        }

                        // Obtenha o nome da cidade pelo ID e exiba na página
                        const cidade = getCidadeNameById(estabelecimento.cidade);
                        console.log("Cidade:", cidade); // Adicionado console.log para verificar a cidade
                        if (cidade) {
                            est += `<p>Cidade: ${cidade}</p>`;
                        }
                        if (estabelecimento.estado) {
                            est += `<p>Estado: ${estabelecimento.estado}</p>`;
                        }
                        if (estabelecimento.website) {
                            est += `<p>Website: <a href="${estabelecimento.website}" target="_blank">${estabelecimento.website}</a></p>`;
                        }
                        if (estabelecimento.instagram) {
                            est += `<p>Instagram: <a href="${estabelecimento.instagram}" target="_blank">${estabelecimento.instagram}</a></p>`;
                        }

                        containerEstabelecimento.innerHTML = est;
                    })
                    .catch(error => {
                        containerEstabelecimento.innerHTML = "<h1>Erro ao obter informações do estabelecimento</h1>";
                        console.error(error);
                    });
            })
            .catch(error => {
                console.error("Erro ao obter os dados:", error);
            });
    }
});
















