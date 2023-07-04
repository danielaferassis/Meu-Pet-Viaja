URL = "http://localhost:3000/viajante";

function alterarSenha() {
  const novaSenhaInput = document.getElementById('nova-senha');
  const confirmeSenhaInput = document.getElementById('confirme-a-senha');
  
  const novaSenha = novaSenhaInput.value;
  const confirmeSenha = confirmeSenhaInput.value;
  
  if (novaSenha !== confirmeSenha) {
    alert('As senhas digitadas não coincidem!');
    return;
  }
  
  // Requisição para a API para atualizar a senha no JSON
      
    fetch(URL, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: getEmailFromURL(), // Função para obter o email da URL
      novaSenha: novaSenha
    })
  })
  .then(response => {
    if (response.ok) {
      // Senha alterada com sucesso
      alert('Senha alterada com sucesso!');
      window.location.href = 'entre.html'; // Redireciona para a página "entre.html"
      
    } else {
      // Falha ao alterar a senha
      alert('Falha ao alterar a senha. Por favor, tente novamente.');
    }
  })
  .catch(error => {
    console.error('Ocorreu um erro:', error);
    alert('Ocorreu um erro ao processar a solicitação. Por favor, tente novamente.');
  });
}

function getEmailFromURL() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get('email');
}













/*function enviar() {
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
        fetch(`http://localhost:3000/viajante/${usuario.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(usuario)
        })
          .then(response => response.json())
          .then(dadosAtualizados => {
            console.log("Senha atualizada com sucesso:", dadosAtualizados);

            // Redirecionar para a página de login após a atualização da senha
            window.location.href = "entre.html";
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
}*/
