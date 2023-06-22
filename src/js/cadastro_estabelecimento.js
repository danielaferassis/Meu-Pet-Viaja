// Validação do formulário de cadastro de estabelecimentos
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


//API Imgur para hospedar a foto
const clientID = "9facbf355e71bd0"
const fileUpload = document.getElementById("fotoestabelecimento");

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
  })
});


// Obter dados dos selects
const selectTipo = document.getElementById("tipo_estabelecimento");
selectTipo.addEventListener("change", function(){
  const options = selectTipo.options;
  const selectValues = [];
  for (let i = 0; i < options.length; i++){
    const option = options[i];
    selectValues.push (option.textContent);
  }
});

const selectCidade = document.getElementById("cidade");
selectCidade.addEventListener("change", function(){
  const options = selectCidade.options;
  const selectValues = [];
  for (let i = 0; i < options.length; i++){
    const option = options[i];
    selectValues.push (option.textContent);
  }
});

//API para cadastro de estabelecimentos

URL = "http://localhost:3000/estabelecimentos"

const cadastroEstabelecimento = document.getElementById("cadastro_estabelecimento");

cadastroEstabelecimento.addEventListener("submit", (event) => {
  
  event.preventDefault();

  const estabelecimentos = {
    nome: document.getElementById("nome").value,
    tipo: document.getElementById("tipo_estabelecimento").value,
    email: document.getElementById("email").value,
    telefone: document.getElementById("telefone").value,
    endereco: document.getElementById("endereco").value,
    cidade: document.getElementById("cidade").value,
    id:"",
    estado: document.getElementById("estado").value,
    website: document.getElementById("website").value,
    instagram: document.getElementById("instagram").value,
    descricao: document.getElementById("descricao_estabelecimento").value,
    foto: document.getElementById("fotoestabelecimento").src,
    alt: document.getElementById("altfoto").value,
  };
    

  fetch(URL, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      },
    body: JSON.stringify(estabelecimentos),
  })
    .then((response) => {
      if (response.ok) {
        alert("Cadastro realizado");
      } else {
        throw new Error("Erro na solicitação.");
      }
    })
    .then((window.location.href = "destinos.html"))
    .catch((error) => {
      console.error(error);
    });
});



