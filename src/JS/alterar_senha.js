


function enviar() {
    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("confirmarSenha").value;
  
    if (senha !== confirmarSenha) {
      alert("As senhas não coincidem. Por favor, verifique.");
      return;
    }
  
    alterarSenha(senha);
  }
  

  function alterarSenha(senha) {
    const usuarioId = 1; // ID do usuário que deseja alterar a senha
    const url = `http://localhost:3000/viajante/${usuarioId}`;
  
    // Definir o corpo da requisição com a nova senha
    const body = {
      senha: senha
    };
  
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then(response => {
        if (response.ok) {
          alert("Senha alterada com sucesso!");
        } else {
          alert("Erro ao alterar a senha. Por favor, tente novamente.");
        }
      })
      .catch(error => {
        console.error('Ocorreu um erro:', error);
        alert("Erro ao alterar a senha. Por favor, tente novamente.");
      });
  }
  
  