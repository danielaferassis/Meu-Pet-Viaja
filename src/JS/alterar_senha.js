function enviar() {
  // Obter os valores dos campos de entrada
  var email = document.getElementById("email").value;
  var novaSenha = document.getElementById("senha").value;
  var confirmarSenha = document.getElementById("confirmarSenha").value;

  // Validar os valores de entrada
  if (email === "") {
    alert("Preencha o e-mail!");
    return;
  }

  if (novaSenha === "") {
    alert("Preencha a nova senha!");
    return;
  }

  if (novaSenha !== confirmarSenha) {
    alert("As senhas não coincidem!");
    return;
  }

  // Buscar os dados JSON na API
  fetch("http://localhost:3000/viajante")
    .then(response => response.json())
    .then(data => {
      // Encontrar o usuário com o e-mail fornecido
      var usuario = data.find(viajante => viajante.email === email);

      if (usuario) {
        // Atualizar a senha do usuário
        usuario.senha = novaSenha;

        // Enviar os dados JSON atualizados de volta para a API
        fetch("http://localhost:3000/viajante", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        })
          .then(response => response.json())
          .then(dadosAtualizados => {
            console.log("Senha atualizada com sucesso:", dadosAtualizados);
            // Exibir mensagem de sucesso ou executar outras ações
          })
          .catch(error => {
            console.error("Erro ao atualizar a senha:", error);
            // Exibir mensagem de erro ou executar outras ações
          });
      } else {
        alert("Usuário não encontrado!");
      }
    })
    .catch(error => {
      console.error("Erro ao buscar os dados JSON:", error);
      // Exibir mensagem de erro ou executar outras ações
    });
}
