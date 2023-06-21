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

  (function() {
    'use strict';
    window.addEventListener('load', function() {
      var forms = document.getElementsByClassName('needs-validation');
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();

  function cadastrarViajante(){
    document.getElementById('cadastro_viajante').style['display'] = 'block';
  };

  
function mostrarSenha(){
    var senha = document.getElementById('senha');
    if(senha.type=='password'){
        senha.type='text';
    }else{
        senha.type='password';
}
};

function cancelarFormulario (){
    window.location.href = "index.html";
};

function previewFoto() {
  var previewFoto = document.getElementById("fotoperfil");
  previewFoto.addEventListener("change", function(e) {
    const files = tgt.files;
    const fr = new FileReader();
    fr.onload = function(){
      document.getElementById("fotoperfil_preview").src = fr.result;
    }
    fr.readAsDataURL(files[0]);
  })};