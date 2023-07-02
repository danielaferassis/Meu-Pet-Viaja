// Página inicial de Login
URL = "http://localhost:3000/viajante";
function entrar(){
    var result;
    var nome;
    var status;
    const $email = document.querySelector("#email") 
    const $senha = document.querySelector("#senha") 

    let divlogin = document.querySelector("#login")

    fetch(URL, {
        headers:{
            method: "PUT",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
        }
    })
    .then((Response) =>{
        Response.json().then((viajante) =>{
            result = Object.values(viajante).filter(viajante => viajante.email === $email.value);
        
            if(result.length === 0){
                alert("usuario não cadastrado");
            }else if (result[0].senha != $senha.value){
                alert("Senha Incorreta");
            }else {
                alert(" Usuario Logado com sucesso");
    
                const infoUsuario = {
                    nome : result[0].nome,
                    status : 'true'
                }
                const dadosUsuario = JSON.stringify(infoUsuario);
                sessionStorage.setItem('Dados', dadosUsuario);
                window.location.href = 'destinos.html';
    
            }  
        })
    })
}


