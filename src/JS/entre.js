const URL = "http://localhost:3000/viajante";

function entrar() {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    obterDadosViajante(email);
}

function obterDadosViajante(email) {
    fetch(URL, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    })
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Erro ao obter os dados do usuário");
            }
        })
        .then((data) => {
            const usuarioEncontrado = data.find((usuario) => usuario.email === email);

            if (usuarioEncontrado) {
                validarDadosUsuario(usuarioEncontrado);
            } else {
                alert("Usuário não cadastrado");
            }
        })
        .catch((error) => {
            console.error(error);
            alert("Erro ao obter os dados do usuário");
        });
}

function validarDadosUsuario(usuario) {
    const senha = document.getElementById("senha").value;
  
    if (usuario.senha === senha) {
      alert("Usuário logado. Redirecionando para a página inicial...");
      localStorage.setItem("nomeUsuario", usuario.nome);
      window.location.href = "index.html";
    } else {
      alert("Senha incorreta");
    }
  }
  

function exibirNomeUsuario(nome) {
    console.log(nome)
    const nomeUsuarioElemento = document.getElementById("nome");
    nomeUsuarioElemento.innerText = nome;
}

function exibirSenha() {
    const senhaInput = document.getElementById("senha");
    const senhaCheckbox = document.getElementById("exibir-senha");
  
    senhaInput.type = senhaCheckbox.checked ? "text" : "password";
  }
  



