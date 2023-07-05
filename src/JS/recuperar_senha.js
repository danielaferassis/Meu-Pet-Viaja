URL = "https://db-json-kp7o.vercel.app/viajante";

// Função para verificar se o e-mail está cadastrado
function verificarEmail() {
    // Obter o valor do campo de e-mail
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
  
    // Requisição para a API e verificar se o e-mail está cadastrado no arquivo JSON
    fetch(URL, {
      method: 'POST',
      body: JSON.stringify({ email: email }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      if (data.cadastrado) {
        // E-mail cadastrado, redirecionar para a página de alteração de senha
        window.location.href = 'alterar_senha.html?email=' + encodeURIComponent(email);
      } else {
        alert('Verifique o e-mail digitado.');
      }
    })
    .catch(error => {
      console.error('Erro ao verificar o e-mail:', error);
      alert('Ocorreu um erro ao verificar o e-mail. Por favor, tente novamente mais tarde.');
    });
  }
  