
(() => {
  'use strict'
  const forms = document.querySelectorAll('.needs-validation')
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }
      form.classList.add('was-validated')
    }, false)
  })
})();

(function () {
  'use strict';
  window.addEventListener('load', function () {
    var forms = document.getElementsByClassName('needs-validation');
    var validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();


URL = "http://localhost:3000/estabelecimentos";

//API Imgur para upload de imagens
const CLIENT_ID = "9facbf355e71bd0";

const uploadFile = document.getElementById("fotoestabelecimento");

uploadFile.addEventListener("change", (event) => {
  const formData = new FormData();
  formData.append("image", event.target.files[0]);
  fetch("https://api.imgur.com/3/image", {
    method: "POST",
    headers: {
      Authorization: `Client-ID ${CLIENT_ID}`,
    },
    body: formData,
  })
    .then(data => data.json()).then(data => {
      document.getElementById("fotoestabelecimento").value = data.data.link;
    })
    .catch((error) => console.error(error));
});

  const cadastroEstabelecimento = document.getElementById("cadastro_estabelecimento");

  cadastroEstabelecimento.addEventListener("submit", (event) => {

    const estabelecimentos = {
    nome: document.getElementById('nome').value,
    tipo: document.getElementById('tipo_estabelecimento').value,
    email: document.getElementById('email').value,
    telefone: document.getElementById('telefone').value,
    endereco: document.getElementById('endereço').value,
    cidade: document.getElementById('cidade').value,
    //id: ,
    estado: document.getElementById('estado').value,
    website: document.getElementById('website').value,
    instagram: document.getElementById('instagram').value,
    descricao: document.getElementById('descrição_estabelecimento').value,
    foto: document.getElementById('fotoestabelecimento').value,
    alt: document.getElementById('altfoto').value
  };
  
    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: estabelecimentos
    })
      .then((response) => response.json())
    .then(() => location.reload());
    });
  
