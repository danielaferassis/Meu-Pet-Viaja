/*Verificar se o email está cadastrado no json
  Se não: verifique o email digitado
  Se sim: ser redirecionado para pagina de redefinição de senha
  Inserir nova senha e conferir se são iguais
  se não: As duas senhas devem ser iguais
  Se sim: é enviada a alteração para o json
  e o usuario recebe msg de senha alterada com sucesso*/



const URL = "http://localhost:3000/viajante";

function entrar() {
    const email = document.getElementById("email").value;
    confirmarEmailCadastrado(email);
}

function confirmarEmailCadastrado(email) {
    fetch(URL)
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
                redirecionarParaRedefinirSenha();
            } else {
                alert("Email não cadastrado");
            }
        })
        .catch((error) => {
            console.error("Erro na requisição:", error);
        });
}

function redirecionarParaRedefinirSenha() {
    window.location.href = "alterar_senha.html";
}
;