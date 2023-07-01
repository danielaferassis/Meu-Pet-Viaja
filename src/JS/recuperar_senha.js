function recuperarSenha() {
    var email = document.getElementById('email').value;
    
    // Faz uma requisição para a API no lado do servidor
    fetch('http://localhost:3000/viajante', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: email })
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        alert('Um email de recuperação de senha foi enviado para ' + email);
      } else {
        alert('Falha ao recuperar senha. Verifique seu email e tente novamente.');
      }
    })
    .catch(error => {
      console.error('Erro:', error);
      alert('Ocorreu um erro ao recuperar a senha. Tente novamente mais tarde.');
    });
  }
  