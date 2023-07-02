/* 
Verificar se o email está cadastrado no json
  Se não: verifique o email digitado
  Se sim: ser redirecionado para pagina de redefinição de senha
  Inserir nova senha e conferir se são iguais
  se não: As duas senhas devem ser iguais
  Se sim: é enviada a alteração para o json
  e o usuario recebe msg de senha alterada com sucesso
*/




function enviarLinkRedefinicaoSenha(email) {
    // Implementar a lógica para enviar o link de redefinição de senha para o email cadastrado
    // Atraves de uma API de envio de emails ou um serviço de envio de emails específico
  
    // Exibição de mensagem para o usuário
    console.log(`Um link de redefinição de senha foi enviado para o email ${email}. Verifique sua caixa de entrada.`);
  }
  
  function entrar(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
  
    if (verificarEmailCadastrado(email)) {
      // O email está cadastrado, enviar o link de redefinição de senha
      enviarLinkRedefinicaoSenha(email);
    } else {
      // Mensagem de erro ou realizar outras ações necessárias.
      console.log("Verifique o email digitado.");
    }
  }
  
  document.getElementById('enviar').addEventListener('click', entrar);
  